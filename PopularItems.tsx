import { motion } from "motion/react";
import { Flame, ChevronLeft, ChevronRight } from "lucide-react";
import type { MenuItem } from "../data/menuData";
import { useState } from "react";

interface PopularItemsProps {
  menuItems: MenuItem[];
}

export function PopularItems({ menuItems }: PopularItemsProps) {
  const popularItems = menuItems.filter(item => item.popular);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % popularItems.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + popularItems.length) % popularItems.length);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black to-stone-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame className="w-12 h-12 text-orange-500" />
            </motion.div>
            <h2 className="text-5xl text-amber-400" style={{ fontFamily: 'Georgia, serif' }}>
              محبوب‌ترین‌ها
            </h2>
            <motion.div
              animate={{ rotate: [0, -20, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame className="w-12 h-12 text-orange-500" />
            </motion.div>
          </div>
          <p className="text-stone-400 text-xl">
            Most Popular Items
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform -translate-x-1/2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform translate-x-1/2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden px-16">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {popularItems.map((item) => (
                <div key={item.id} className="min-w-full px-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="relative h-96 md:h-full overflow-hidden">
                        <motion.img
                          src={item.image}
                          alt={item.nameFa}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center text-right">
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full mb-6">
                            <Flame className="w-5 h-5" />
                            <span>پرفروش</span>
                          </div>

                          <h3 className="text-5xl md:text-6xl text-amber-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                            {item.nameFa}
                          </h3>
                          
                          <p className="text-2xl text-stone-400 mb-6">
                            {item.name}
                          </p>

                          <p className="text-xl text-stone-300 mb-4 leading-relaxed">
                            {item.descriptionFa}
                          </p>

                          <p className="text-lg text-stone-500 mb-8">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="px-8 py-4 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-2 border-amber-500/50 rounded-2xl"
                            >
                              <div className="text-amber-400 flex items-center gap-3">
                                <span>تومان</span>
                                <span className="text-3xl">{item.price}</span>
                              </div>
                            </motion.div>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-shadow"
                            >
                              سفارش
                            </motion.button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {popularItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-amber-500 to-orange-600'
                    : 'bg-stone-700 hover:bg-stone-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
