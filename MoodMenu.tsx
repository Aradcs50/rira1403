import { motion } from "motion/react";
import { Heart, Zap, Smile, Wind } from "lucide-react";

const moods = [
  {
    id: 1,
    emoji: "😌",
    mood: "آروم و ریلکس",
    moodEn: "Calm & Relaxed",
    item: "موکا خامه‌ای",
    itemEn: "Creamy Mocha",
    price: "75,000",
    points: 4,
    color: "from-blue-500 to-cyan-500",
    icon: Wind,
  },
  {
    id: 2,
    emoji: "😍",
    mood: "عاشقانه و شیرین",
    moodEn: "Romantic & Sweet",
    item: "کیک ردولوت",
    itemEn: "Red Velvet Cake",
    price: "95,000",
    points: 5,
    color: "from-pink-500 to-rose-500",
    icon: Heart,
  },
  {
    id: 3,
    emoji: "⚡️",
    mood: "پرانرژی و شاد",
    moodEn: "Energetic & Happy",
    item: "اسپرسو دوبل",
    itemEn: "Double Espresso",
    price: "55,000",
    points: 4,
    color: "from-orange-500 to-amber-500",
    icon: Zap,
  },
  {
    id: 4,
    emoji: "🧘‍♀️",
    mood: "متعادل و سبک",
    moodEn: "Balanced & Light",
    item: "ماچا لاته",
    itemEn: "Matcha Latte",
    price: "80,000",
    points: 4,
    color: "from-green-500 to-emerald-500",
    icon: Smile,
  },
];

export function MoodMenu() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-4xl text-amber-400 mb-4" style={{ fontFamily: "Georgia, serif" }}>
          امروز حالت چطوره؟
        </h3>
        <p className="text-stone-400 text-xl">بر اساس حالت، انتخاب کن!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {moods.map((mood, index) => (
          <motion.div
            key={mood.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 border border-stone-700 hover:border-amber-500/50 transition-all duration-500 shadow-xl">
              {/* Emoji */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="text-6xl text-center mb-4"
              >
                {mood.emoji}
              </motion.div>

              {/* Mood Name */}
              <div className="text-center mb-4">
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${mood.color} text-white px-4 py-2 rounded-full mb-2`}>
                  <mood.icon className="w-4 h-4" />
                  <span className="text-sm">{mood.mood}</span>
                </div>
                <div className="text-stone-500 text-xs">{mood.moodEn}</div>
              </div>

              {/* Recommended Item */}
              <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4 mb-4">
                <div className="text-amber-400 text-center mb-1">{mood.item}</div>
                <div className="text-stone-500 text-sm text-center">{mood.itemEn}</div>
              </div>

              {/* Price & Points */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-stone-400 text-sm">
                  <span className="text-amber-400 text-lg">{mood.points}</span> امتیاز
                </div>
                <div className="text-amber-400">
                  {mood.price} <span className="text-xs text-stone-500">تومان</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 bg-gradient-to-r ${mood.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
              >
                انتخاب این حس ✨
              </motion.button>
            </div>

            {/* Hover Glow */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${mood.color} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <div className="inline-flex items-center gap-2 bg-stone-800 border border-stone-700 rounded-full px-6 py-3">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="text-stone-300">هر حسی که داری، ما باهات هستیم ☕️</span>
        </div>
      </motion.div>
    </div>
  );
}
