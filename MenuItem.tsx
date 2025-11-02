import { motion } from "motion/react";
import { Star, TrendingUp, ShoppingCart } from "lucide-react";
import type { MenuItem as MenuItemType } from "../data/menuData";
import { useUser } from "../context/UserContext";
import { toast } from "sonner@2.0.3";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export function MenuItem({ item, index }: MenuItemProps) {
  const { addPoints, isLoggedIn, addVisit } = useUser();

  const handleOrder = () => {
    if (!isLoggedIn) {
      toast.error("برای سفارش و دریافت امتیاز، ابتدا وارد شوید");
      return;
    }

    // Calculate points based on category
    let points = 2;
    if (item.category === "desserts") points = 3;
    if (item.category === "food") points = 5;

    // Parse price and add to total spent
    const price = parseInt(item.price.replace(/,/g, ""));
    
    addPoints(points);
    addVisit(price);
    
    toast.success(`${item.nameFa} به سبد اضافه شد! 🛒`);
    toast.success(`شما ${points} امتیاز دریافت کردید! ⭐️`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl overflow-hidden shadow-2xl border border-stone-700/50 hover:border-amber-500/50 transition-all duration-500">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.nameFa}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-60" />
          
          {/* Popular Badge */}
          {item.popular && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Star className="w-4 h-4 fill-white" />
              <span className="text-sm">محبوب</span>
            </motion.div>
          )}

          {/* Trending Icon */}
          {item.popular && (
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 left-4"
            >
              <TrendingUp className="w-6 h-6 text-green-400" />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Names */}
          <div className="mb-3">
            <h3 className="text-2xl text-amber-400 mb-1 text-right" style={{ fontFamily: 'Georgia, serif' }}>
              {item.nameFa}
            </h3>
            <p className="text-stone-400 text-sm">
              {item.name}
            </p>
          </div>

          {/* Description */}
          <div className="mb-4 min-h-[60px]">
            <p className="text-stone-300 text-sm text-right leading-relaxed mb-1">
              {item.descriptionFa}
            </p>
            <p className="text-stone-500 text-xs">
              {item.description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-700">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-full"
            >
              <span className="text-amber-400 flex items-center gap-2">
                <span className="text-sm">تومان</span>
                <span className="text-xl">{item.price}</span>
              </span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrder}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-lg hover:shadow-amber-500/50 transition-shadow"
              title="افزودن به سبد"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(251, 191, 36, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
    </motion.div>
  );
}
