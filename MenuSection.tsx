import { motion } from "motion/react";
import type { MenuItem as MenuItemType } from "../data/menuData";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  activeCategory: string;
  menuItems: MenuItemType[];
}

export function MenuSection({ activeCategory, menuItems }: MenuSectionProps) {
  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <motion.div
      key={activeCategory}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredItems.map((item, index) => (
        <MenuItem key={item.id} item={item} index={index} />
      ))}
    </motion.div>
  );
}
