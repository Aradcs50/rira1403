import { motion } from "motion/react";
import { Flame, Star, TrendingUp } from "lucide-react";

const weeklyItem = {
  id: 20,
  name: "Caramel Latte",
  nameFa: "لاته کارامل",
  description: "Espresso with caramel and steamed milk",
  descriptionFa: "اسپرسو با کارامل و شیر بخار داده",
  price: "85,000",
  normalPoints: 3,
  bonusPoints: 6,
  image: "https://images.unsplash.com/photo-1619192734912-ef21a714f975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNvZmZlZSUyMG1pbGt8ZW58MXx8fHwxNzYxOTg0ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
};

export function WeeklySpecial() {
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
            animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="w-10 h-10 text-orange-500" />
          </motion.div>
          <h3 className="text-4xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
            طعم هفته
          </h3>
          <motion.div
            animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="w-10 h-10 text-orange-500" />
          </motion.div>
        </div>
        <p className="text-stone-400 text-xl">با امتیاز دوبرابر!</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-3xl overflow-hidden border-2 border-orange-500/50 shadow-2xl shadow-orange-500/20">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 md:h-auto overflow-hidden">
              <motion.img
                src={weeklyItem.image}
                alt={weeklyItem.nameFa}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

              {/* Badge */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
              >
                <Star className="w-5 h-5 fill-white" />
                <span>ویژه هفته</span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center text-right">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-4xl text-amber-400 mb-2" style={{ fontFamily: "Georgia, serif" }}>
                  {weeklyItem.nameFa}
                </h4>
                <p className="text-xl text-stone-400 mb-4">{weeklyItem.name}</p>

                <p className="text-lg text-stone-300 mb-3 leading-relaxed">
                  {weeklyItem.descriptionFa}
                </p>
                <p className="text-stone-500 mb-6">{weeklyItem.description}</p>

                {/* Points Comparison */}
                <div className="bg-stone-800/50 border border-orange-500/30 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-stone-400 line-through">
                      امتیاز معمولی: {weeklyItem.normalPoints}
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-amber-400 text-2xl flex items-center gap-2">
                      <Star className="w-6 h-6 fill-amber-400" />
                      امتیاز ویژه: {weeklyItem.bonusPoints}
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm">
                      ۲ برابر!
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-2 border-amber-500/50 rounded-2xl"
                  >
                    <div className="text-amber-400 flex items-center gap-2">
                      <span className="text-sm">تومان</span>
                      <span className="text-2xl">{weeklyItem.price}</span>
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl shadow-lg hover:shadow-orange-500/50 transition-shadow"
                  >
                    سفارش الان! 🔥
                  </motion.button>
                </div>

                {/* Timer */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-stone-800/50 border border-stone-700 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-stone-400 text-sm">فقط تا پایان هفته!</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl -z-10" />
      </motion.div>
    </div>
  );
}
