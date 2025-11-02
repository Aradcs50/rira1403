import { useState } from "react";
import { motion } from "motion/react";
import { Lock, User, Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import logoImage from "figma:asset/08272a22e54676bb269cef681cd95bdc7d0a34ff.png";

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // اطلاعات ادمین - می‌توانید اینها را تغییر دهید
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "rira2025";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        onLogin();
      } else {
        setError("نام کاربری یا رمز عبور اشتباه است");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center p-4"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 border-2 border-amber-500/30 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center p-3 mb-4"
            >
              <img
                src={logoImage}
                alt="Rira Cafe"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <h1 className="text-3xl text-amber-400 mb-2">پنل مدیریت</h1>
            <p className="text-stone-400 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              ورود به سیستم
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
            <p className="text-amber-400 text-sm text-center">
              🔒 این بخش فقط برای مدیران قابل دسترسی است
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-stone-300 mb-2 block">
                نام کاربری
              </Label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pr-10 bg-stone-800 border-stone-700 text-white placeholder:text-stone-500"
                  placeholder="نام کاربری خود را وارد کنید"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="text-stone-300 mb-2 block">رمز عبور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10 pl-10 bg-stone-800 border-stone-700 text-white placeholder:text-stone-500"
                  placeholder="رمز عبور خود را وارد کنید"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-amber-400 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-6 text-lg"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <Lock className="w-5 h-5 ml-2" />
                  ورود به پنل
                </>
              )}
            </Button>
          </form>

          {/* Help Text */}
          <div className="mt-6 pt-6 border-t border-stone-700">
            <p className="text-stone-500 text-xs text-center">
              🔐 اطلاعات ورود پیش‌فرض:
              <br />
              نام کاربری: <span className="text-stone-400">admin</span>
              <br />
              رمز عبور: <span className="text-stone-400">rira2025</span>
            </p>
            <p className="text-amber-500/70 text-xs text-center mt-2">
              ⚠️ توصیه می‌شود اطلاعات ورود را تغییر دهید
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  );
}
