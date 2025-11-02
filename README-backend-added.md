# Rira Menu - Backend addition

I unpacked your project and added a simple Node.js backend at `server/` that provides:
- User registration and login (SQLite + bcrypt + JWT)
- Send email endpoint using SMTP (nodemailer)
- Zarinpal payment create & verify flow (uses `zarinpal-checkout` package)
- Simple payments table stored in SQLite

Files added:
- server/package.json
- server/index.js
- server/.env.example

How to run (on your machine or on a Node host):
1. Copy `server/.env.example` to `server/.env` and fill in SMTP credentials and Zarinpal merchant ID.
2. `cd server`
3. `npm install`
4. `npm run dev` (requires nodemon) or `npm start`

Notes and important points:
- I can't activate real SMTP credentials or Zarinpal merchant ID from here. You must set them in `server/.env`.
- For Zarinpal testing use sandbox setting in the zarinpal library if you have sandbox merchant id. In `index.js` change the `false` in `ZarinpalCheckout.create(merchant, false)` to `true` for sandbox if needed.
- This backend serves static files from `../dist` (assuming you build the frontend with Vite into `dist`).
- The payment verification endpoint returns a simple HTML response for the payment gateway redirect; you can customize it or redirect to your frontend.

What I did not change:
- I left your frontend source intact in `src/`. I added backend endpoints; you need to connect the frontend to `/api/*` endpoints (examples below).

Example frontend calls:
- Register: POST /api/register {username,password,email}
- Login: POST /api/login {username,password}
- Create payment: POST /api/payment/create {amount, userId, description}
- Verify: Zarinpal will redirect to GET /api/payment/verify?Authority=...&Status=OK

If you want, I can:
- Modify your frontend `src/` to wire up login/register forms, make the existing buttons call these endpoints, and add a merchant/checkout flow that redirects to Zarinpal.
- Create an admin-only editable page (WYSIWYG) that saves content to the server so you can edit the menu from a web UI.

Do you want me to modify the frontend now to connect buttons/register/login and add a checkout button that uses the backend I added?
