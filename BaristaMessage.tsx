import { motion } from "motion/react";
import { Coffee, Heart, MessageCircle, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { toast } from "sonner@2.0.3";

const messages = [
  {
    text: "امروز قهوه‌ت رو با لبخندت بنوش ☕️\nچون امتیاز شادی از همه بیشتره 💛",
    emoji: "😊",
  },
  {
    text: "هر قهوه‌ای یه داستانه، امروز داستان تو چیه؟ ✨",
    emoji: "📖",
  },
  {
    text: "یادت باشه، بهترین قهوه اون قهوه‌ایه که با دوست صمیمی بخوریش! 🤝",
    emoji: "👫",
  },
  {
    text: "صبحت بخیر! یه روز عالی در انتظارته ☀️",
    emoji: "🌅",
  },
  {
    text: "با هر جرعه قهوه، یه لحظه برای خودت وقت بذار 🧘‍♀️",
    emoji: "☕",
  },
];

export function BaristaMessage() {
  const { addPoints, isLoggedIn } = useUser();
  const [liked, setLiked] = useState(() => {
    const savedDate = localStorage.getItem("rira_message_liked");
    if (!savedDate) return false;
    const likedDate = new Date(savedDate);
    const today = new Date();
    return likedDate.toDateString() === today.toDateString();
  });

  const todayIndex = new Date().getDay();
  const todayMessage = messages[todayIndex % messages.length];

  const handleLike = () => {
    if (!isLoggedIn) {
      toast.error("برای لایک کردن باید وارد شوید");
      return;
    }

    if (liked) {
      toast.info("شما قبلاً این پیام رو لایک کردید!");
      return;
    }

    setLiked(true);
    addPoints(1);
    localStorage.setItem("rira_message_liked", new Date().toISOString());
    toast.success("1 امتیاز برای لایک دریافت کردید! ❤️");
  };

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-3xl p-8 border-2 border-amber-500/30 shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="w-12 h-12 text-amber-400" />
            </motion.div>
            <div>
              <h3 className="text-2xl text-amber-400" style={{ fontFamily: "Georgia, serif" }}>
                پیام امروز از باریستا
              </h3>
              <p className="text-stone-400 text-sm">نامه روزانه کافه ری‌را</p>
            </div>
          </div>

          {/* Message */}
          <div className="bg-stone-900/50 border border-stone-700 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl"
              >
                {todayMessage.emoji}
              </motion.div>
              <div className="flex-1">
                <p className="text-stone-200 text-lg leading-relaxed whitespace-pre-line text-right">
                  {todayMessage.text}
                </p>
              </div>
            </div>
          </div>

          {/* Like Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: isLoggedIn && !liked ? 1.1 : 1 }}
                whileTap={{ scale: isLoggedIn && !liked ? 0.9 : 1 }}
                onClick={handleLike}
                disabled={!isLoggedIn || liked}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  liked
                    ? "bg-red-500 text-white"
                    : isLoggedIn
                    ? "bg-stone-800 text-stone-300 hover:bg-red-500 hover:text-white"
                    : "bg-stone-800 text-stone-600 cursor-not-allowed"
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-white" : ""}`} />
                <span>{liked ? "لایک شد!" : "لایک کن"}</span>
                {isLoggedIn && !liked && <span className="text-amber-400 text-sm">(+1)</span>}
              </motion.button>

              <div className="flex items-center gap-2 text-stone-400">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">{Math.floor(Math.random() * 50) + 20} نفر</span>
              </div>
            </div>

            <MessageCircle className="w-6 h-6 text-stone-600" />
          </div>

          {/* Decoration */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 left-4 w-20 h-20 bg-amber-400/10 rounded-full blur-xl"
          />
        </div>
      </motion.div>
    </div>
  );
}
