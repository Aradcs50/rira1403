import { motion } from "motion/react";
import { categories } from "../data/menuData";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category, index) => {
          const isActive = activeCategory === category.id;
          
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onCategoryChange(category.id)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-8 py-4 rounded-2xl transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xl shadow-amber-500/30' 
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div className="text-right">
                    <div className={isActive ? 'text-white' : 'text-amber-400'}>
                      {category.nameFa}
                    </div>
                    <div className="text-xs opacity-70">
                      {category.name}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl border-2 border-amber-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Glow effect */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-amber-500/20 blur-xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
