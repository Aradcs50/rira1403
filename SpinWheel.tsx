import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, X, Sparkles } from "lucide-react";
import { useUser } from "../context/UserContext";
import { toast } from "sonner@2.0.3";

const prizes = [
  { id: 1, label: "+5 امتیاز", value: 5, color: "from-blue-500 to-blue-600" },
  { id: 2, label: "نیم قیمت", value: "discount", color: "from-purple-500 to-purple-600" },
  { id: 3, label: "+10 امتیاز", value: 10, color: "from-green-500 to-green-600" },
  { id: 4, label: "شیرینی رایگان", value: "free", color: "from-amber-500 to-amber-600" },
  { id: 5, label: "+3 امتیاز", value: 3, color: "from-pink-500 to-pink-600" },
  { id: 6, label: "فردا دوباره!", value: 0, color: "from-stone-500 to-stone-600" },
  { id: 7, label: "+15 امتیاز", value: 15, color: "from-red-500 to-red-600" },
  { id: 8, label: "+7 امتیاز", value: 7, color: "from-indigo-500 to-indigo-600" },
];

export function SpinWheel() {
  const { addPoints, user } = useUser();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showPrize, setShowPrize] = useState(false);
  const [wonPrize, setWonPrize] = useState<typeof prizes[0] | null>(null);
  const [canSpin, setCanSpin] = useState(() => {
    const lastSpin = localStorage.getItem("rira_last_spin");
    if (!lastSpin) return true;
    const lastSpinDate = new Date(lastSpin);
    const today = new Date();
    return lastSpinDate.toDateString() !== today.toDateString();
  });

  const handleSpin = () => {
    if (!user || !canSpin || isSpinning) return;

    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomIndex];
    const degreesPerSegment = 360 / prizes.length;
    const targetRotation = 360 * 5 + (360 - (randomIndex * degreesPerSegment + degreesPerSegment / 2));

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(prize);
      setShowPrize(true);
      setCanSpin(false);
      localStorage.setItem("rira_last_spin", new Date().toISOString());

      if (typeof prize.value === "number" && prize.value > 0) {
        addPoints(prize.value);
        toast.success(`شما ${prize.value} امتیاز دریافت کردید! 🎉`);
      } else if (prize.value === "discount") {
        toast.success("تبریک! شما یک نوشیدنی نیم‌قیمت بردید! 🎊");
      } else if (prize.value === "free") {
        toast.success("یک شیرینی رایگان برنده شدید! 🍰");
      } else {
        toast.info("فردا دوباره امتحان کنید! 😊");
      }
    }, 4000);
  };

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <Sparkles className="w-8 h-8 text-amber-400" />
          <h3 className="text-3xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
            چرخ شانس قهوه‌ای
          </h3>
          <Sparkles className="w-8 h-8 text-amber-400" />
        </motion.div>
        <p className="text-stone-400">هر روز یک بار بچرخون و جایزه بگیر!</p>
      </div>

      <div className="flex flex-col items-center">
        {/* Wheel Container */}
        <div className="relative">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-red-500 filter drop-shadow-lg" />
          </div>

          {/* Wheel */}
          <motion.div
            className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
            style={{ rotate: rotation }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            {prizes.map((prize, index) => {
              const degreesPerSegment = 360 / prizes.length;
              const startAngle = index * degreesPerSegment;

              return (
                <div
                  key={prize.id}
                  className={`absolute w-full h-full bg-gradient-to-br ${prize.color}`}
                  style={{
                    transform: `rotate(${startAngle}deg)`,
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((degreesPerSegment * Math.PI) / 180)}% ${50 - 50 * Math.cos((degreesPerSegment * Math.PI) / 180)}%)`,
                  }}
                >
                  <div
                    className="absolute top-12 left-1/2 -translate-x-1/2 text-white text-center"
                    style={{
                      transform: `rotate(${degreesPerSegment / 2}deg)`,
                    }}
                  >
                    <div className="text-xs whitespace-nowrap">{prize.label}</div>
                  </div>
                </div>
              );
            })}

            {/* Center Circle */}
            <div className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Spin Button */}
        <motion.button
          whileHover={{ scale: canSpin && !isSpinning ? 1.05 : 1 }}
          whileTap={{ scale: canSpin && !isSpinning ? 0.95 : 1 }}
          onClick={handleSpin}
          disabled={!canSpin || isSpinning || !user}
          className={`mt-8 px-8 py-4 rounded-full text-white text-xl transition-all ${
            canSpin && !isSpinning && user
              ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-2xl hover:shadow-amber-500/50"
              : "bg-stone-600 cursor-not-allowed"
          }`}
        >
          {!user
            ? "ابتدا وارد شوید"
            : isSpinning
            ? "در حال چرخش..."
            : canSpin
            ? "بچرخون! 🎰"
            : "فردا دوباره بیا!"}
        </motion.button>
      </div>

      {/* Prize Modal */}
      <AnimatePresence>
        {showPrize && wonPrize && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative bg-gradient-to-br ${wonPrize.color} rounded-3xl p-8 max-w-md w-full text-center shadow-2xl`}
            >
              <button
                onClick={() => setShowPrize(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <Gift className="w-20 h-20 text-white mx-auto mb-4" />
              </motion.div>

              <h3 className="text-white text-3xl mb-4">تبریک! 🎉</h3>
              <p className="text-white text-2xl mb-6">{wonPrize.label}</p>

              <button
                onClick={() => setShowPrize(false)}
                className="px-6 py-3 bg-white text-stone-900 rounded-full hover:bg-stone-100 transition-colors"
              >
                عالی!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
