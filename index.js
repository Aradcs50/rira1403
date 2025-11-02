require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const ZarinpalCheckout = require('zarinpal-checkout');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Database = require('better-sqlite3');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist'))); // serve frontend build if present

const dbFile = path.join(__dirname, 'data.db');
const db = new Database(dbFile);
db.prepare(\`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT,
  email TEXT,
  is_admin INTEGER DEFAULT 0
)\`).run();

db.prepare(\`
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  amount INTEGER,
  authority TEXT,
  ref_id TEXT,
  status TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)\`).run();

// --- seed staff users (same password for all staff) ---
(async function seedStaff(){
  try{
    const existing = db.prepare('SELECT COUNT(*) as c FROM users WHERE username LIKE ?').get('staff%');
    if(!existing || existing.c < 3){
      const bcrypt = require('bcrypt');
      const pw = 'RiraStaff!2025'; // shared staff password (change in production)
      const hashed = await bcrypt.hash(pw, 10);
      const insert = db.prepare('INSERT OR IGNORE INTO users(username,password,email,is_admin) VALUES(?,?,?,?)');
      // create 5 staff accounts staff1..staff5 with same password
      for(let i=1;i<=5;i++){
        try{ insert.run('staff'+i, hashed, null, 0); }catch(e){}
      }
      console.log('Seeded staff accounts (staff1..staff5) with shared password.');
    }
  }catch(e){ console.error('seedStaff error', e); }
})();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT||587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// helper
function generateToken(user){
  return jwt.sign({id:user.id, username:user.username}, process.env.JWT_SECRET || 'secret', {expiresIn:'7d'});
}

app.post('/api/register', async (req,res)=>{
  const {username,password,email} = req.body;
  if(!username||!password) return res.status(400).json({error:'username/password required'});
  const hashed = await bcrypt.hash(password,10);
  try{
    const stmt = db.prepare('INSERT INTO users(username,password,email) VALUES(?,?,?)');
    const info = stmt.run(username, hashed, email||null);
    const user = {id: info.lastInsertRowid, username, email};
    res.json({user, token: generateToken(user)});
  }catch(e){
    res.status(400).json({error: e.message});
  }
});

app.post('/api/login', async (req,res)=>{
  const {username,password} = req.body;
  const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if(!row) return res.status(401).json({error:'invalid credentials'});

// Staff login (uses same credential pattern as users; we seeded staff1..staff5)
app.post('/api/staff/login', async (req,res)=>{
  const {username,password} = req.body;
  const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if(!row) return res.status(401).json({error:'invalid credentials'});
  const ok = await bcrypt.compare(password, row.password);
  if(!ok) return res.status(401).json({error:'invalid credentials'});
  // ensure this is a staff account (username starts with 'staff')
  if(!/^staff\d+$/.test(row.username)) return res.status(403).json({error:'not a staff account'});
  const user = {id:row.id, username:row.username};
  res.json({user, token: generateToken(user)});
});

// Staff orders endpoint - returns paid payments (requires Bearer token)
app.get('/api/staff/orders', (req,res)=>{
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({error:'authorization required'});
  const token = auth.replace('Bearer ','') || '';
  try{
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    // check username is staff*
    const row = db.prepare('SELECT username FROM users WHERE id=?').get(data.id);
    if(!row || !/^staff\d+$/.test(row.username)) return res.status(403).json({error:'for staff only'});
    const orders = db.prepare('SELECT * FROM payments WHERE status LIKE ? ORDER BY created_at DESC').all('paid');
    res.json({orders});
  }catch(e){
    return res.status(401).json({error:'invalid token'});
  }
});


  const ok = await bcrypt.compare(password, row.password);
  if(!ok) return res.status(401).json({error:'invalid credentials'});
  const user = {id:row.id, username:row.username, email:row.email, is_admin:row.is_admin};
  res.json({user, token: generateToken(user)});
});

app.post('/api/send-email', async (req,res)=>{
  const {to, subject, text, html} = req.body;
  if(!to) return res.status(400).json({error:'to required'});
  try{
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to, subject:subject||'Message from Rira site', text, html
    });
    res.json({ok:true, info});
  }catch(e){
    res.status(500).json({error: e.message});
  }
});

// Zarinpal payment create
app.post('/api/payment/create', async (req,res)=>{
  const {amount, userId, description} = req.body;
  if(!amount) return res.status(400).json({error:'amount required'});
  const amountInt = parseInt(amount,10);
  // initialize zarinpal
  const merchant = process.env.ZARINPAL_MERCHANT_ID;
  if(!merchant) return res.status(500).json({error:'ZARINPAL_MERCHANT_ID not configured in server .env'});
  const zarinpal = ZarinpalCheckout.create(merchant, false); // false = sandbox off; set true for sandbox
  const CallbackURL = (process.env.BASE_URL||('http://localhost:4000')) + '/api/payment/verify';
  try{
    const result = await zarinpal.PaymentRequest({
      Amount: amountInt,
      CallbackURL,
      Description: description || 'پرداخت سفارش',
      Email: null,
      Mobile: null
    });
    // result.Authority, result.status
    if(result.status == 100 || result.status == '100'){
      // store in DB
      const stmt = db.prepare('INSERT INTO payments(user_id,amount,authority,status) VALUES(?,?,?,?)');
      const info = stmt.run(userId||null, amountInt, result.authority, 'created');
      return res.json({ok:true, authority: result.authority, url: zarinpal.PaymentURL(result.authority)});
    }else{
      return res.status(400).json({error:'zarinpal error', raw: result});
    }
  }catch(e){
    console.error(e);
    res.status(500).json({error: e.message});
  }
});

// verify endpoint (Zarinpal redirects here)
app.get('/api/payment/verify', async (req,res)=>{
  const {Authority, Status} = req.query;
  const merchant = process.env.ZARINPAL_MERCHANT_ID;
  const zarinpal = ZarinpalCheckout.create(merchant, false);
  try{
    const verification = await zarinpal.PaymentVerification({
      Authority,
      Amount: null // optional; Zarinpal v1 may require amount; using null to let it verify
    });
    // update DB
    const statusText = verification.status==100 ? 'paid' : ('failed:' + verification.status);
    db.prepare('UPDATE payments SET status=?, ref_id=? WHERE authority=?').run(statusText, verification.RefID||null, Authority);
    // return a simple HTML page informing user (frontend can handle nicer)
    res.send(`<html><body><h1>پرداخت ${statusText}</h1><pre>${JSON.stringify(verification)}</pre></body></html>`);
  }catch(e){
    res.status(500).send('verification error: ' + e.message);
  }
});

app.get('/api/me', (req,res)=>{
  const auth = req.headers.authorization;
  if(!auth) return res.json({user:null});
  const token = auth.replace('Bearer ','');
  try{
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const row = db.prepare('SELECT id,username,email,is_admin FROM users WHERE id=?').get(data.id);
    res.json({user: row||null});
  }catch(e){
    res.json({user:null});
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('Server started on', PORT));
