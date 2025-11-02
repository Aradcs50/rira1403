import { motion } from "motion/react";
import { Crown, Trophy, Star, TrendingUp } from "lucide-react";

const topFans = [
  {
    id: 1,
    name: "سارا کافه‌دوست",
    points: 256,
    visits: 45,
    level: "platinum",
    avatar: "👩",
  },
  {
    id: 2,
    name: "نیما اسپرسو‌خور",
    points: 240,
    visits: 42,
    level: "platinum",
    avatar: "🧔",
  },
  {
    id: 3,
    name: "مریم قهوه‌عاشق",
    points: 195,
    visits: 38,
    level: "platinum",
    avatar: "👩‍🦰",
  },
  {
    id: 4,
    name: "علی دسرخور",
    points: 178,
    visits: 35,
    level: "gold",
    avatar: "👨",
  },
  {
    id: 5,
    name: "زهرا لاته‌دوست",
    points: 145,
    visits: 28,
    level: "gold",
    avatar: "👱‍♀️",
  },
  {
    id: 6,
    name: "رضا موکاچی",
    points: 132,
    visits: 25,
    level: "gold",
    avatar: "🧑",
  },
];

const levelConfig = {
  platinum: {
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/50",
    icon: "💎",
  },
  gold: {
    color: "from-amber-500 to-yellow-500",
    borderColor: "border-amber-500/50",
    icon: "🥇",
  },
  silver: {
    color: "from-slate-400 to-slate-500",
    borderColor: "border-slate-500/50",
    icon: "🥈",
  },
};

export function FansWall() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Trophy className="w-10 h-10 text-amber-400" />
          <h3 className="text-4xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
            دیوار هواداران
          </h3>
          <Trophy className="w-10 h-10 text-amber-400" />
        </div>
        <p className="text-stone-400 text-xl">برترین اعضای این ماه 🏆</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topFans.map((fan, index) => {
          const config = levelConfig[fan.level as keyof typeof levelConfig];
          const isTopThree = index < 3;

          return (
            <motion.div
              key={fan.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div
                className={`bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 border-2 ${config.borderColor} shadow-xl relative overflow-hidden`}
              >
                {/* Rank Badge */}
                {isTopThree && (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 left-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg text-white`}>
                      {index + 1}
                    </div>
                  </motion.div>
                )}

                {/* Level Icon */}
                <div className="absolute top-4 right-4">
                  <div className="text-3xl">{config.icon}</div>
                </div>

                {/* Avatar */}
                <div className="flex justify-center mb-4 mt-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center shadow-2xl border-4 border-stone-900`}
                  >
                    <span className="text-5xl">{fan.avatar}</span>
                  </motion.div>
                </div>

                {/* Name */}
                <h4 className="text-xl text-amber-400 text-center mb-4">{fan.name}</h4>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-stone-800/50 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      <span className="text-stone-400 text-sm">امتیاز</span>
                    </div>
                    <span className="text-amber-400">{fan.points}</span>
                  </div>

                  <div className="flex items-center justify-between bg-stone-800/50 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-stone-400 text-sm">بازدید</span>
                    </div>
                    <span className="text-green-400">{fan.visits}</span>
                  </div>
                </div>

                {/* Top 3 Special Badge */}
                {isTopThree && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-center"
                  >
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${config.color} text-white px-4 py-2 rounded-full text-sm shadow-lg`}>
                      <Crown className="w-4 h-4" />
                      <span>
                        {index === 0 && "قهرمان ماه"}
                        {index === 1 && "نایب قهرمان"}
                        {index === 2 && "رتبه سوم"}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 2px, transparent 0)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${config.color} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-stone-900 to-stone-800 border border-amber-500/30 rounded-3xl p-8 max-w-md">
          <Crown className="w-12 h-12 text-amber-400" />
          <p className="text-stone-300 leading-relaxed">
            می‌خوای اسمت توی این لیست باشه؟
            <br />
            با هر بازدید و خرید، امتیاز جمع کن و به جمع قهرمان‌ها بپیوند!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-amber-500/50 transition-shadow"
          >
            شروع جمع‌آوری امتیاز! ⭐️
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
