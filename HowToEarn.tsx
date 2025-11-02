import { motion } from "motion/react";
import { ShoppingBag, Share2, UserPlus, MessageSquare, Star, Gift } from "lucide-react";

const earningMethods = [
  {
    icon: ShoppingBag,
    title: "خرید کن",
    description: "با هر خرید امتیاز بگیر",
    points: "1-6",
    color: "from-blue-500 to-cyan-500",
    details: [
      "هر نوشیدنی = 2-3 امتیاز",
      "هر دسر = 3-5 امتیاز",
      "هر غذا = 5-6 امتیاز",
    ],
  },
  {
    icon: Share2,
    title: "به اشتراک بذار",
    description: "توی اینستا پست کن",
    points: "+5",
    color: "from-purple-500 to-pink-500",
    details: [
      "عکس + منشن کافه = 5 امتیاز",
      "هر استوری = 3 امتیاز",
      "پست در فید = 5 امتیاز",
    ],
  },
  {
    icon: UserPlus,
    title: "دوست دعوت کن",
    description: "دوستاتو معرفی کن",
    points: "+10",
    color: "from-green-500 to-emerald-500",
    details: [
      "دوست جدید = 10 امتیاز",
      "اولین خرید دوست = بونوس",
      "بدون محدودیت!",
    ],
  },
  {
    icon: MessageSquare,
    title: "نظر بده",
    description: "تجربه‌ت رو بگو",
    points: "+3",
    color: "from-amber-500 to-orange-500",
    details: [
      "فرم نظرسنجی = 3 امتیاز",
      "نظر در گوگل = 5 امتیاز",
      "پیشنهادات = 2 امتیاز",
    ],
  },
  {
    icon: Star,
    title: "آیتم ویژه بگیر",
    description: "طعم هفته و چالش‌ها",
    points: "2x",
    color: "from-red-500 to-orange-500",
    details: [
      "طعم هفته = امتیاز دوبرابر",
      "چالش آخر هفته = +25 امتیاز",
      "باکس سورپرایز = +20 امتیاز",
    ],
  },
  {
    icon: Gift,
    title: "چرخ شانس",
    description: "هر روز یک بار بچرخون",
    points: "3-15",
    color: "from-indigo-500 to-purple-500",
    details: [
      "روزانه یک بار",
      "جوایز متنوع",
      "شانس برد تخفیف!",
    ],
  },
];

export function HowToEarn() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2
          className="text-5xl text-amber-400 mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          چطوری امتیاز بگیریم؟
        </h2>
        <p className="text-stone-400 text-xl">راه‌های مختلف برای جمع کردن امتیاز!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {earningMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 border border-stone-700 hover:border-amber-500/50 transition-all duration-500 shadow-xl h-full">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <method.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl text-amber-400 text-center mb-2">{method.title}</h3>
              <p className="text-stone-400 text-center mb-4">{method.description}</p>

              {/* Points Badge */}
              <div className="flex justify-center mb-6">
                <div className={`bg-gradient-to-r ${method.color} text-white px-6 py-2 rounded-full shadow-lg`}>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    <span>{method.points} امتیاز</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                {method.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-center gap-2 text-stone-300 text-sm bg-stone-800/50 rounded-xl px-3 py-2"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${method.color}`} />
                    <span>{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-stone-900 to-stone-800 border border-amber-500/30 rounded-3xl p-8 max-w-2xl">
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
            <h3 className="text-2xl text-amber-400">امتیازاتو خرج کن!</h3>
            <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
          </div>
          <div className="grid md:grid-cols-3 gap-4 w-full">
            <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4">
              <div className="text-3xl text-amber-400 mb-1">50</div>
              <div className="text-stone-400 text-sm">امتیاز</div>
              <div className="text-stone-500 text-xs mt-1">= نوشیدنی رایگان</div>
            </div>
            <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4">
              <div className="text-3xl text-purple-400 mb-1">80</div>
              <div className="text-stone-400 text-sm">امتیاز</div>
              <div className="text-stone-500 text-xs mt-1">= دسر رایگان</div>
            </div>
            <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4">
              <div className="text-3xl text-green-400 mb-1">100</div>
              <div className="text-stone-400 text-sm">امتیاز</div>
              <div className="text-stone-500 text-xs mt-1">= 15٪ تخفیف کل</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
