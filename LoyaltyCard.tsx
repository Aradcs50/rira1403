import { motion } from "motion/react";
import { Star, TrendingUp, Gift, Sparkles } from "lucide-react";
import { useUser, UserLevel } from "../context/UserContext";

const levelConfig = {
  guest: {
    name: "مهمان",
    nameEn: "Guest",
    color: "from-stone-600 to-stone-700",
    icon: "👤",
    discount: 0,
  },
  silver: {
    name: "نقره‌ای",
    nameEn: "Silver",
    color: "from-slate-400 to-slate-500",
    icon: "🥈",
    discount: 5,
  },
  gold: {
    name: "طلایی",
    nameEn: "Gold",
    color: "from-amber-400 to-yellow-500",
    icon: "🥇",
    discount: 10,
  },
  platinum: {
    name: "پلاتینیوم",
    nameEn: "Platinum",
    color: "from-purple-400 to-pink-500",
    icon: "💎",
    discount: 15,
  },
};

const getNextLevel = (level: UserLevel): { level: UserLevel; points: number } | null => {
  if (level === "silver") return { level: "gold", points: 51 };
  if (level === "gold") return { level: "platinum", points: 150 };
  return null;
};

export function LoyaltyCard() {
  const { user } = useUser();

  if (!user) return null;

  const config = levelConfig[user.level];
  const nextLevel = getNextLevel(user.level);
  const progress = nextLevel
    ? ((user.points - (user.level === "silver" ? 0 : user.level === "gold" ? 51 : 150)) /
        (nextLevel.points - (user.level === "silver" ? 0 : user.level === "gold" ? 51 : 150))) *
      100
    : 100;

  return (
    <motion.div
      initial={{ scale: 0, rotateY: -180 }}
      animate={{ scale: 1, rotateY: 0 }}
      transition={{ type: "spring", duration: 0.8 }}
      className="relative"
    >
      {/* Card */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${config.color} p-6 shadow-2xl`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-4xl">{config.icon}</span>
                <div>
                  <div className="text-white text-2xl">{config.name}</div>
                  <div className="text-white/80 text-sm">{config.nameEn}</div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          {/* User Info */}
          <div className="mb-6">
            <div className="text-white text-xl mb-1">{user.name}</div>
            <div className="text-white/70 text-sm">{user.phone}</div>
          </div>

          {/* Points Display */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/80 text-sm mb-1">امتیاز شما</div>
                <div className="text-white text-3xl flex items-center gap-2">
                  <Star className="w-6 h-6 fill-white" />
                  {user.points}
                </div>
              </div>
              <div className="text-left">
                <div className="text-white/80 text-sm mb-1">تخفیف فعلی</div>
                <div className="text-white text-3xl">{config.discount}٪</div>
              </div>
            </div>
          </div>

          {/* Progress to Next Level */}
          {nextLevel && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-white/90 text-sm">
                  تا سطح {levelConfig[nextLevel.level].name}
                </div>
                <div className="text-white/90 text-sm">
                  {nextLevel.points - user.points} امتیاز مانده
                </div>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </div>
          )}

          {user.level === "platinum" && (
            <div className="flex items-center justify-center gap-2 text-white">
              <Gift className="w-5 h-5" />
              <span className="text-sm">شما در بالاترین سطح هستید! 🎉</span>
            </div>
          )}
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-4 border border-stone-700"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <div className="text-stone-400 text-sm">تعداد بازدید</div>
          </div>
          <div className="text-white text-2xl">{user.visits}</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-4 border border-stone-700"
        >
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-amber-400" />
            <div className="text-stone-400 text-sm">کل خرید</div>
          </div>
          <div className="text-white text-xl">{user.totalSpent.toLocaleString()}</div>
          <div className="text-stone-500 text-xs">تومان</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
