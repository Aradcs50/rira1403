import { motion } from "motion/react";
import { Trophy, Flame, Calendar, Star } from "lucide-react";

export function WeekendChallenge() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-3xl p-8 border-2 border-red-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Trophy className="w-16 h-16 text-amber-400" />
            </motion.div>

            <div className="flex items-center justify-center gap-3 mb-2">
              <Flame className="w-8 h-8 text-orange-500" />
              <h3 className="text-4xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
                چالش آخر هفته
              </h3>
              <Flame className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-stone-300 text-xl">امتیاز ویژه جمعه و شنبه!</p>
          </div>

          {/* Challenge Description */}
          <div className="bg-stone-900/50 border border-red-500/30 rounded-2xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Items */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-2xl">☕️</span>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-300 mb-1">هات چاکلت</div>
                    <div className="text-stone-400 text-sm">Hot Chocolate</div>
                    <div className="text-stone-500 text-xs mt-1">65,000 تومان</div>
                  </div>
                </div>

                <div className="text-center text-2xl text-stone-600">+</div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-2xl">🍰</span>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-300 mb-1">چیزکیک</div>
                    <div className="text-stone-400 text-sm">Cheesecake</div>
                    <div className="text-stone-500 text-xs mt-1">95,000 تومان</div>
                  </div>
                </div>
              </div>

              {/* Reward */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 shadow-2xl"
                  >
                    <Star className="w-12 h-12 text-white fill-white" />
                  </motion.div>
                  <div className="text-3xl text-green-400 mb-2">+25 امتیاز</div>
                  <div className="text-stone-400 text-sm">به جای امتیاز عادی!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-amber-400" />
                <div className="text-amber-400">زمان چالش</div>
              </div>
              <div className="text-stone-300">جمعه و شنبه، هر هفته</div>
              <div className="text-stone-500 text-sm">از ساعت 9 صبح تا 11 شب</div>
            </div>

            <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-6 h-6 text-green-400" />
                <div className="text-green-400">جایزه ویژه</div>
              </div>
              <div className="text-stone-300">25 امتیاز بونوس</div>
              <div className="text-stone-500 text-sm">فقط با سفارش هر دو آیتم</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-2xl shadow-lg hover:shadow-red-500/50 transition-shadow text-lg"
            >
              قبول چالش! 🏆
            </motion.button>

            <div className="mt-4 inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-stone-400 text-sm">
                فقط در روزهای جمعه و شنبه!
              </span>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl -z-10" />
      </motion.div>
    </div>
  );
}
