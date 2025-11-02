import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Phone, Sparkles } from "lucide-react";
import { useUser } from "../context/UserContext";
import { toast } from "sonner@2.0.3";
import logoImage from "figma:asset/08272a22e54676bb269cef681cd95bdc7d0a34ff.png";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useUser();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("لطفا نام خود را وارد کنید");
      return;
    }

    if (!phone.trim() || phone.length < 11) {
      toast.error("لطفا شماره موبایل معتبر وارد کنید");
      return;
    }

    login(name, phone);
    toast.success(`${name} عزیز، خوش آمدید! 🎉`);
    toast.success("شما 10 امتیاز خوش‌آمدگویی دریافت کردید! ☕️");
    onClose();
    setName("");
    setPhone("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 max-w-md w-full border border-amber-500/30 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-10 h-10 bg-stone-700 hover:bg-stone-600 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-4 shadow-lg">
                <img src={logoImage} alt="Rira Cafe Logo" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <h2 className="text-3xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
                  ورود به باشگاه
                </h2>
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-stone-400">و دریافت 10 امتیاز خوش‌آمدگویی!</p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Input */}
              <div>
                <label className="block text-stone-300 mb-2 text-right">نام و نام خانوادگی</label>
                <div className="relative">
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="نام خود را وارد کنید"
                    className="w-full bg-stone-800 border border-stone-700 rounded-2xl px-12 py-4 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-right"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-stone-300 mb-2 text-right">شماره موبایل</label>
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09123456789"
                    className="w-full bg-stone-800 border border-stone-700 rounded-2xl px-12 py-4 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-right"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-2xl hover:shadow-2xl hover:shadow-amber-500/50 transition-shadow"
              >
                ورود و دریافت هدیه 🎁
              </motion.button>
            </motion.form>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 space-y-2"
            >
              <div className="text-center text-stone-500 text-sm mb-3">مزایای عضویت:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  "🎁 10 امتیاز هدیه",
                  "⭐️ جمع امتیاز",
                  "🎂 هدیه تولد",
                  "🎰 چرخ شانس روزانه",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-stone-800/50 border border-stone-700 rounded-xl px-3 py-2 text-stone-300 text-center"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
