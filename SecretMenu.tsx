import { motion } from "motion/react";
import { Lock, Unlock, Crown, Star, Sparkles } from "lucide-react";
import { useUser } from "../context/UserContext";

const secretItems = [
  {
    id: 21,
    name: "White Mocha Secret",
    nameFa: "موکای شکلات سفید محرمانه",
    description: "Premium white chocolate mocha",
    descriptionFa: "موکای پرمیوم با شکلات سفید",
    price: "95,000",
    points: 5,
    minLevel: "gold",
  },
  {
    id: 22,
    name: "Hidden Affogato",
    nameFa: "آفوگاتو پنهان",
    description: "Espresso with vanilla ice cream",
    descriptionFa: "اسپرسو با بستنی وانیل",
    price: "85,000",
    points: 5,
    minLevel: "gold",
  },
  {
    id: 23,
    name: "Rira's Secret Cake",
    nameFa: "کیک محرمانه ریرا",
    description: "Our chef's special creation",
    descriptionFa: "خلاقیت ویژه سرآشپز ما",
    price: "120,000",
    points: 6,
    minLevel: "platinum",
  },
];

export function SecretMenu() {
  const { user } = useUser();

  const hasAccess = user && (user.level === "gold" || user.level === "platinum");

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
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {hasAccess ? (
              <Unlock className="w-10 h-10 text-green-400" />
            ) : (
              <Lock className="w-10 h-10 text-amber-400" />
            )}
          </motion.div>
          <h3 className="text-4xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
            منوی پنهان
          </h3>
          <Crown className="w-10 h-10 text-amber-400" />
        </div>
        <p className="text-stone-400 text-xl">
          {hasAccess
            ? "به منوی اختصاصی خوش آمدید! 👑"
            : "فقط برای اعضای طلایی و پلاتینیوم"}
        </p>
      </motion.div>

      {!hasAccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-12 border-2 border-amber-500/30 text-center">
            {/* Lock Icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full mb-6 border-2 border-amber-500/50"
            >
              <Lock className="w-16 h-16 text-amber-400" />
            </motion.div>

            <h4 className="text-2xl text-amber-400 mb-4">این منو قفله! 🔒</h4>
            <p className="text-stone-300 mb-6 leading-relaxed">
              برای دسترسی به آیتم‌های اختصاصی و طعم‌های محدود،
              <br />
              باید عضو سطح <strong className="text-amber-400">طلایی</strong> یا{" "}
              <strong className="text-purple-400">پلاتینیوم</strong> باشی!
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                  <span className="text-amber-400">طلایی</span>
                </div>
                <div className="text-stone-400 text-sm">51+ امتیاز</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Crown className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-400">پلاتینیوم</span>
                </div>
                <div className="text-stone-400 text-sm">150+ امتیاز</div>
              </div>
            </div>

            {user ? (
              <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4">
                <div className="text-stone-400 text-sm mb-2">پیشرفت شما:</div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-stone-300">امتیاز فعلی: {user.points}</span>
                  <span className="text-amber-400">
                    {user.level === "silver" ? 51 - user.points : "---"} تا طلایی
                  </span>
                </div>
                <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((user.points / 51) * 100, 100)}%` }}
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
                  />
                </div>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-lg"
              >
                ورود به باشگاه
              </motion.button>
            )}
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secretItems.map((item, index) => {
            const canAccess =
              user &&
              ((item.minLevel === "gold" && (user.level === "gold" || user.level === "platinum")) ||
                (item.minLevel === "platinum" && user.level === "platinum"));

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl overflow-hidden border border-amber-500/50 shadow-2xl">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs shadow-lg">
                      <Crown className="w-3 h-3" />
                      <span>محرمانه</span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="h-48 bg-gradient-to-br from-amber-900/40 to-orange-900/40 relative overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 opacity-20"
                    >
                      <Sparkles className="w-full h-full text-amber-400" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-2xl text-amber-400 mb-1 text-right">
                      {item.nameFa}
                    </h4>
                    <p className="text-stone-400 text-sm mb-3">{item.name}</p>

                    <p className="text-stone-300 text-sm text-right mb-2">
                      {item.descriptionFa}
                    </p>
                    <p className="text-stone-500 text-xs mb-4">{item.description}</p>

                    {/* Price & Points */}
                    <div className="flex items-center justify-between pt-4 border-t border-stone-700">
                      <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-full">
                        <div className="text-amber-400 flex items-center gap-2">
                          <span className="text-sm">تومان</span>
                          <span>{item.price}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span>{item.points} امتیاز</span>
                      </div>
                    </div>

                    {/* Order Button */}
                    <motion.button
                      whileHover={{ scale: canAccess ? 1.05 : 1 }}
                      whileTap={{ scale: canAccess ? 0.95 : 1 }}
                      disabled={!canAccess}
                      className={`w-full mt-4 py-3 rounded-xl transition-all ${
                        canAccess
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:shadow-amber-500/50"
                          : "bg-stone-700 text-stone-500 cursor-not-allowed"
                      }`}
                    >
                      {canAccess ? "سفارش محرمانه 🤫" : "نیاز به پلاتینیوم 💎"}
                    </motion.button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
