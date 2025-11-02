import { motion } from "motion/react";
import { Gift, HelpCircle, Sparkles, Star } from "lucide-react";

const possibleItems = [
  "کیک شکلاتی ویژه",
  "لاته کارامل",
  "موکای خاص",
  "چیزکیک بلوبری",
  "براونی آیس‌کریم",
  "اسپرسو دوبل",
];

export function MysteryBox() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h3 className="text-4xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
            باکس سورپرایز ریرا
          </h3>
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>
        </div>
        <p className="text-stone-400 text-xl">نمی‌دونی چیه، ولی عالیه! 🎁</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotateY: 5 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20">
            {/* Gift Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Gift className="w-16 h-16 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl -z-10"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <HelpCircle className="w-8 h-8 text-yellow-400 fill-yellow-400/20" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <h4 className="text-3xl text-center text-purple-300 mb-4">
              یه سورپرایز خوشمزه! 🎉
            </h4>

            {/* Description */}
            <div className="bg-stone-800/50 border border-purple-500/30 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div className="text-right">
                  <p className="text-stone-300 mb-2">
                    داخل این باکس یکی از بهترین محصولات ماست، ولی نمی‌دونی کدوم!
                  </p>
                  <p className="text-stone-400 text-sm">
                    می‌تونه باشه: کیک، نوشیدنی ویژه، یا دسر خاص
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400 flex-shrink-0 mt-1" />
                <div className="text-right">
                  <p className="text-amber-300">
                    <strong>+ ۲۰ امتیاز ویژه باشگاه!</strong>
                  </p>
                  <p className="text-stone-400 text-sm">
                    هر باکس سورپرایز امتیاز بونوس داره
                  </p>
                </div>
              </div>
            </div>

            {/* Possible Items */}
            <div className="mb-6">
              <div className="text-center text-stone-400 text-sm mb-3">
                ممکنه یکی از اینا باشه:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {possibleItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-stone-800/30 border border-stone-700 rounded-xl px-3 py-2 text-stone-300 text-center text-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex items-center justify-between gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl"
              >
                <div className="text-purple-300 text-center">
                  <div className="text-sm mb-1">قیمت باکس</div>
                  <div className="text-2xl flex items-center justify-center gap-2">
                    <span>تومان</span>
                    <span>150,000</span>
                  </div>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                سفارش سورپرایز! 🎁
              </motion.button>
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-stone-400 text-sm">
                  هیجان انتخاب تصادفی رو تجربه کن!
                </span>
              </div>
            </motion.div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10" />
        </motion.div>
      </div>
    </div>
  );
}
