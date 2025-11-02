export interface MenuItem {
  id: number;
  name: string;
  nameFa: string;
  description: string;
  descriptionFa: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // نوشیدنی‌های گرم - Hot Drinks
  {
    id: 1,
    name: "Espresso Single",
    nameFa: "اسپرسو سینگل",
    description: "Rich and intense Italian coffee",
    descriptionFa: "قهوه ایتالیایی غلیظ و پرطعم",
    price: "38,000",
    image: "https://images.unsplash.com/photo-1606310553997-7a01e22900ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjIwMTM0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks",
    popular: true
  },
  {
    id: 2,
    name: "Espresso Double",
    nameFa: "اسپرسو دبل",
    description: "Double shot of intense espresso",
    descriptionFa: "دو شات اسپرسو غلیظ",
    price: "45,000",
    image: "https://images.unsplash.com/photo-1606310553997-7a01e22900ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjIwMTM0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 3,
    name: "Americano",
    nameFa: "آمریکانو",
    description: "Espresso with hot water",
    descriptionFa: "اسپرسو با آب داغ",
    price: "42,000",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbm8lMjBjb2ZmZWV8ZW58MXx8fHwxNzYyMDM1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 4,
    name: "Cappuccino",
    nameFa: "کاپوچینو",
    description: "Espresso with steamed milk and foam",
    descriptionFa: "اسپرسو با شیر بخار داده و فوم",
    price: "52,000",
    image: "https://images.unsplash.com/photo-1643909618082-d916d591c2a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwZm9hbSUyMGFydHxlbnwxfHx8fDE3NjE5Mzk0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks",
    popular: true
  },
  {
    id: 5,
    name: "Latte",
    nameFa: "لاته",
    description: "Smooth espresso with steamed milk",
    descriptionFa: "اسپرسو نرم با شیر بخار داده",
    price: "55,000",
    image: "https://images.unsplash.com/photo-1619192734912-ef21a714f975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNvZmZlZSUyMG1pbGt8ZW58MXx8fHwxNzYxOTg0ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks",
    popular: true
  },
  {
    id: 6,
    name: "Mocha",
    nameFa: "موکا",
    description: "Chocolate and espresso delight",
    descriptionFa: "ترکیب شکلات و اسپرسو",
    price: "58,000",
    image: "https://images.unsplash.com/photo-1604298545771-6aafca512943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NjIwMzUxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 7,
    name: "Caramel Macchiato",
    nameFa: "کارامل ماکیاتو",
    description: "Espresso with caramel and milk",
    descriptionFa: "اسپرسو با کارامل و شیر",
    price: "60,000",
    image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJhbWVsJTIwbWFjY2hpYXRvfGVufDF8fHx8MTc2MjAzNTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 8,
    name: "Turkish Coffee",
    nameFa: "قهوه ترک",
    description: "Traditional Turkish style coffee",
    descriptionFa: "قهوه سنتی به سبک ترکی",
    price: "40,000",
    image: "https://images.unsplash.com/photo-1576685880864-50b3b35f1c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwY29mZmVlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYyMDI0MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 9,
    name: "French Coffee",
    nameFa: "قهوه فرانسه",
    description: "French style filtered coffee",
    descriptionFa: "قهوه فیلتر به سبک فرانسوی",
    price: "48,000",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjb2ZmZWV8ZW58MXx8fHwxNzYyMDM1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 10,
    name: "Hot Chocolate",
    nameFa: "هات چاکلت",
    description: "Rich and creamy chocolate drink",
    descriptionFa: "نوشیدنی شکلاتی غلیظ و خامه‌ای",
    price: "50,000",
    image: "https://images.unsplash.com/photo-1648145800880-0dcec0f85848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBjaG9jb2xhdGUlMjBjcmVhbXxlbnwxfHx8fDE3NjIwMzUxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 11,
    name: "Saffron Tea",
    nameFa: "چای زعفرانی",
    description: "Premium saffron tea",
    descriptionFa: "چای مخصوص با زعفران",
    price: "35,000",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZmcm9uJTIwdGVhfGVufDF8fHx8MTc2MjAzNTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },
  {
    id: 12,
    name: "Masala Tea",
    nameFa: "چای ماسالا",
    description: "Spiced Indian tea",
    descriptionFa: "چای ادویه‌دار هندی",
    price: "38,000",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjB0ZWF8ZW58MXx8fHwxNzYyMDM1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "hot-drinks"
  },

  // نوشیدنی‌های سرد - Cold Drinks
  {
    id: 13,
    name: "Iced Latte",
    nameFa: "آیس لاته",
    description: "Chilled espresso with cold milk",
    descriptionFa: "اسپرسو سرد با شیر",
    price: "58,000",
    image: "https://images.unsplash.com/photo-1559329187-79d04171a646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwbGF0dGUlMjBjb2xkfGVufDF8fHx8MTc2MjAzNTEzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks",
    popular: true
  },
  {
    id: 14,
    name: "Iced Americano",
    nameFa: "آیس آمریکانو",
    description: "Iced espresso with water",
    descriptionFa: "اسپرسو یخ زده با آب",
    price: "48,000",
    image: "https://images.unsplash.com/photo-1581996323441-538096e854b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwYW1lcmljYW5vJTIwZ2xhc3N8ZW58MXx8fHwxNzYyMDM1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 15,
    name: "Iced Mocha",
    nameFa: "آیس موکا",
    description: "Cold chocolate espresso blend",
    descriptionFa: "ترکیب شکلات و اسپرسو سرد",
    price: "62,000",
    image: "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwbW9jaGF8ZW58MXx8fHwxNzYyMDM1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 16,
    name: "Frappe",
    nameFa: "فراپه",
    description: "Blended iced coffee",
    descriptionFa: "قهوه یخ زده بلند شده",
    price: "65,000",
    image: "https://images.unsplash.com/photo-1538516593489-f2edd50403d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFwcGUlMjBibGVuZGVkJTIwY29mZmVlfGVufDF8fHx8MTc2MjAzNTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks",
    popular: true
  },
  {
    id: 17,
    name: "Vanilla Shake",
    nameFa: "وانیل شیک",
    description: "Creamy vanilla milkshake",
    descriptionFa: "میلک‌شیک وانیلی خامه‌ای",
    price: "55,000",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwbWlsa3NoYWtlfGVufDF8fHx8MTc2MjAzNTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 18,
    name: "Chocolate Shake",
    nameFa: "چاکلت شیک",
    description: "Rich chocolate milkshake",
    descriptionFa: "میلک‌شیک شکلاتی غلیظ",
    price: "58,000",
    image: "https://images.unsplash.com/photo-1625869019063-35a5a28f0e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBtaWxrc2hha2V8ZW58MXx8fHwxNzYyMDM1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 19,
    name: "Strawberry Smoothie",
    nameFa: "اسموتی توت فرنگی",
    description: "Fresh strawberry smoothie",
    descriptionFa: "اسموتی توت فرنگی تازه",
    price: "60,000",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzYyMDM1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 20,
    name: "Mango Smoothie",
    nameFa: "اسموتی انبه",
    description: "Tropical mango smoothie",
    descriptionFa: "اسموتی انبه استوایی",
    price: "60,000",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHNtb290aGllfGVufDF8fHx8MTc2MjAzNTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 21,
    name: "Mojito",
    nameFa: "موهیتو",
    description: "Refreshing mint drink",
    descriptionFa: "نوشیدنی نعنایی خنک",
    price: "52,000",
    image: "https://images.unsplash.com/photo-1690921822670-5929218ab41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBtaW50JTIwZHJpbmt8ZW58MXx8fHwxNzYyMDM1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 22,
    name: "Lemonade",
    nameFa: "لیموناد",
    description: "Fresh lemon juice",
    descriptionFa: "آب لیموی تازه",
    price: "45,000",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbmFkZSUyMGZyZXNofGVufDF8fHx8MTc2MjAzNTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 23,
    name: "Orange Juice",
    nameFa: "آب پرتقال",
    description: "Freshly squeezed orange",
    descriptionFa: "آب پرتقال تازه",
    price: "48,000",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMGZyZXNofGVufDF8fHx8MTc2MjAzNTE0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },
  {
    id: 24,
    name: "Cold Brew",
    nameFa: "کلد برو",
    description: "Smooth cold brew coffee",
    descriptionFa: "قهوه دم سرد نرم",
    price: "55,000",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NjIwMzUxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "cold-drinks"
  },

  // صبحانه و غذا - Breakfast & Food
  {
    id: 25,
    name: "Breakfast Platter",
    nameFa: "بشقاب صبحانه",
    description: "Complete breakfast with eggs, cheese, and bread",
    descriptionFa: "صبحانه کامل با تخم مرغ، پنیر و نان",
    price: "95,000",
    image: "https://images.unsplash.com/photo-1603906503589-6a9b9bbbe82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0dGVyJTIwZWdnc3xlbnwxfHx8fDE3NjIwMzUxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
    popular: true
  },
  {
    id: 26,
    name: "Omelet",
    nameFa: "املت",
    description: "Fluffy omelet with vegetables",
    descriptionFa: "املت فرفری با سبزیجات",
    price: "65,000",
    image: "https://images.unsplash.com/photo-1660288929005-e69b03a7bf37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVsZXQlMjB2ZWdldGFibGVzJTIwZnJlc2h8ZW58MXx8fHwxNzYyMDM1MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food"
  },
  {
    id: 27,
    name: "Fried Egg",
    nameFa: "تخم مرغ نیمرو",
    description: "Sunny side up eggs",
    descriptionFa: "تخم مرغ نیمرو طلایی",
    price: "45,000",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGVnZ3xlbnwxfHx8fDE3NjIwMzUxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food"
  },
  {
    id: 28,
    name: "Club Sandwich",
    nameFa: "ساندویچ کلاب",
    description: "Classic club sandwich",
    descriptionFa: "ساندویچ کلاب کلاسیک",
    price: "78,000",
    image: "https://images.unsplash.com/photo-1617686576785-6ec0693e644e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzYyMDM1MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
    popular: true
  },
  {
    id: 29,
    name: "Chicken Sandwich",
    nameFa: "ساندویچ مرغ",
    description: "Grilled chicken sandwich",
    descriptionFa: "ساندویچ مرغ گریل شده",
    price: "72,000",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzYyMDM1MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food"
  },
  {
    id: 30,
    name: "Tuna Sandwich",
    nameFa: "ساندویچ تن ماهی",
    description: "Fresh tuna sandwich",
    descriptionFa: "ساندویچ تن ماهی تازه",
    price: "68,000",
    image: "https://images.unsplash.com/photo-1619096252214-ad2a0f2b01c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzYyMDM1MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food"
  },
  {
    id: 31,
    name: "French Fries",
    nameFa: "سیب زمینی سرخ کرده",
    description: "Crispy french fries",
    descriptionFa: "سیب زمینی سرخ شده ترد",
    price: "38,000",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NjIwMzUxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food"
  },
  {
    id: 32,
    name: "Pasta",
    nameFa: "پاستا",
    description: "Italian style pasta",
    descriptionFa: "پاستای ایتالیایی",
    price: "85,000",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW58ZW58MXx8fHwxNzYyMDM1MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food"
  },
  {
    id: 33,
    name: "Caesar Salad",
    nameFa: "سالاد سزار",
    description: "Fresh Caesar salad",
    descriptionFa: "سالاد سزار تازه",
    price: "62,000",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZHxlbnwxfHx8fDE3NjIwMzUxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food"
  },

  // دسر - Desserts
  {
    id: 34,
    name: "Cheesecake",
    nameFa: "چیزکیک",
    description: "Creamy New York style cheesecake",
    descriptionFa: "چیزکیک خامه‌ای نیویورکی",
    price: "68,000",
    image: "https://images.unsplash.com/photo-1707528903686-91cbbe2f2985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2VjYWtlJTIwc2xpY2UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjAzNTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts",
    popular: true
  },
  {
    id: 35,
    name: "Tiramisu",
    nameFa: "تیرامیسو",
    description: "Classic Italian dessert",
    descriptionFa: "دسر کلاسیک ایتالیایی",
    price: "72,000",
    image: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGl0YWxpYW4lMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjAzNTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts",
    popular: true
  },
  {
    id: 36,
    name: "Brownie",
    nameFa: "براونی",
    description: "Chocolate brownie with ice cream",
    descriptionFa: "براونی شکلاتی با بستنی",
    price: "58,000",
    image: "https://images.unsplash.com/photo-1702827402870-7c33dc7b67be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBicm93bmllJTIwaWNlJTIwY3JlYW18ZW58MXx8fHwxNzYyMDM1MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  },
  {
    id: 37,
    name: "Ice Cream",
    nameFa: "بستنی",
    description: "Artisan ice cream, various flavors",
    descriptionFa: "بستنی دست‌ساز با طعم‌های مختلف",
    price: "45,000",
    image: "https://images.unsplash.com/photo-1570078070382-a8869c07e7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMHNjb29wJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjIwMzUxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  },
  {
    id: 38,
    name: "Chocolate Cake",
    nameFa: "کیک شکلاتی",
    description: "Rich chocolate layer cake",
    descriptionFa: "کیک لایه‌ای شکلاتی غلیظ",
    price: "62,000",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MjAzNTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  },
  {
    id: 39,
    name: "Carrot Cake",
    nameFa: "کیک هویج",
    description: "Moist carrot cake with cream cheese",
    descriptionFa: "کیک هویج نرم با کرم پنیر",
    price: "60,000",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJyb3QlMjBjYWtlfGVufDF8fHx8MTc2MjAzNTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  },
  {
    id: 40,
    name: "Fruit Tart",
    nameFa: "تارت میوه",
    description: "Fresh fruit tart",
    descriptionFa: "تارت میوه‌های تازه",
    price: "65,000",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHRhcnR8ZW58MXx8fHwxNzYyMDM1MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  },
  {
    id: 41,
    name: "Eclair",
    nameFa: "اکلر",
    description: "Classic French eclair",
    descriptionFa: "اکلر فرانسوی کلاسیک",
    price: "55,000",
    image: "https://images.unsplash.com/photo-1587536849024-daaa4a417b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2xhaXIlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjAzNTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  },
  {
    id: 42,
    name: "Muffin",
    nameFa: "مافین",
    description: "Freshly baked muffin",
    descriptionFa: "مافین تازه پخت",
    price: "42,000",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWZmaW58ZW58MXx8fHwxNzYyMDM1MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  },
  {
    id: 43,
    name: "Pancakes",
    nameFa: "پنکیک",
    description: "Fluffy pancakes with syrup",
    descriptionFa: "پنکیک فرفری با شربت",
    price: "68,000",
    image: "https://images.unsplash.com/photo-1619592982366-ed3d55927817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMHN5cnVwJTIwc3RhY2t8ZW58MXx8fHwxNzYyMDM1MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "desserts"
  }
];

export const categories = [
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    nameFa: "نوشیدنی‌های گرم",
    icon: "☕"
  },
  {
    id: "cold-drinks",
    name: "Cold Drinks",
    nameFa: "نوشیدنی‌های سرد",
    icon: "🧊"
  },
  {
    id: "food",
    name: "Food",
    nameFa: "غذا و صبحانه",
    icon: "🍳"
  },
  {
    id: "desserts",
    name: "Desserts",
    nameFa: "دسر",
    icon: "🍰"
  }
];
