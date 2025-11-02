import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { UserProvider, useUser } from "./context/UserContext";
import { MenuHero } from "./components/MenuHero";
import { PopularItems } from "./components/PopularItems";
import { CategoryTabs } from "./components/CategoryTabs";
import { MenuSection } from "./components/MenuSection";
import { LoyaltyCard } from "./components/LoyaltyCard";
import { SpinWheel } from "./components/SpinWheel";
import { LoginModal } from "./components/LoginModal";
import { WeeklySpecial } from "./components/WeeklySpecial";
import { MysteryBox } from "./components/MysteryBox";
import { MoodMenu } from "./components/MoodMenu";
import { SecretMenu } from "./components/SecretMenu";
import { WeekendChallenge } from "./components/WeekendChallenge";
import { FansWall } from "./components/FansWall";
import { HowToEarn } from "./components/HowToEarn";
import { BaristaMessage } from "./components/BaristaMessage";
import { AdminLogin } from "./components/AdminLogin";
import { AdminPanel } from "./components/AdminPanel";
import {
  Instagram,
  Phone,
  MapPin,
  Clock,
  User,
  LogOut,
  Gift,
  Star,
  Settings,
} from "lucide-react";
import { Toaster } from "sonner@2.0.3";
import logoImage from "figma:asset/08272a22e54676bb269cef681cd95bdc7d0a34ff.png";
import { menuItems as initialMenuItems, type MenuItem } from "./data/menuData";

function AppContent() {
  const { user, isLoggedIn, logout } = useUser();
  const [activeCategory, setActiveCategory] =
    useState("hot-drinks");
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Load menu from localStorage or use initial data
  useEffect(() => {
    const savedMenu = localStorage.getItem("rira-menu");
    if (savedMenu) {
      try {
        setMenuItems(JSON.parse(savedMenu));
      } catch {
        setMenuItems(initialMenuItems);
      }
    } else {
      setMenuItems(initialMenuItems);
    }
  }, []);

  // Save menu to localStorage when it changes
  const handleUpdateMenu = (updatedItems: MenuItem[]) => {
    setMenuItems(updatedItems);
    localStorage.setItem("rira-menu", JSON.stringify(updatedItems));
  };

  // Check for admin session
  useEffect(() => {
    const adminSession = sessionStorage.getItem("rira-admin-logged-in");
    if (adminSession === "true") {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem("rira-admin-logged-in", "true");
    setShowAdminLogin(false);
    setShowAdminPanel(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem("rira-admin-logged-in");
    setShowAdminPanel(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show admin login if requested
  if (showAdminLogin && !isAdminLoggedIn) {
    return <AdminLogin onLogin={handleAdminLogin} />;
  }

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-2xl border-b border-amber-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center p-2">
                <img
                  src={logoImage}
                  alt="Rira Cafe Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-amber-400">کافه ری‌را</div>
                <div className="text-xs text-stone-400">
                  Rira Cafe
                </div>
              </div>
            </motion.div>

            <div className="flex items-center gap-3">
              {/* Admin Panel Button */}
              {isAdminLoggedIn && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAdminPanel(true)}
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-colors"
                  title="پنل مدیریت"
                >
                  <Settings className="w-5 h-5" />
                </motion.button>
              )}
              
              {isLoggedIn && user ? (
                <>
                  <div className="hidden md:flex items-center gap-2 bg-stone-800 border border-amber-500/30 rounded-full px-4 py-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-amber-400">
                      {user.points}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document
                        .getElementById("loyalty-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm">{user.name}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    className="w-10 h-10 bg-stone-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
                    title="خروج"
                  >
                    <LogOut className="w-5 h-5" />
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full"
                >
                  <Gift className="w-4 h-4" />
                  <span className="text-sm">
                    ورود و 10 امتیاز هدیه!
                  </span>
                </motion.button>
              )}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="tel:09117468649"
                className="w-10 h-10 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/rira_cafe_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <MenuHero />

      {/* Join Club CTA (for non-logged in users) */}
      {!isLoggedIn && (
        <section className="py-12 bg-gradient-to-b from-black to-stone-950">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-3xl p-8 md:p-12 border-2 border-amber-500/50 shadow-2xl text-center overflow-hidden">
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

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="inline-block mb-6"
                  >
                    <Gift className="w-20 h-20 text-amber-400" />
                  </motion.div>

                  <h2
                    className="text-4xl md:text-5xl text-amber-400 mb-4"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    به باشگاه طرفداران بپیوند!
                  </h2>

                  <p className="text-stone-300 text-xl mb-8 leading-relaxed">
                    با عضویت در باشگاه، 10 امتیاز هدیه بگیر و از
                    مزایای ویژه بهره‌مند شو!
                  </p>

                  <div className="grid md:grid-cols-4 gap-4 mb-8">
                    {[
                      { icon: "⭐️", text: "جمع امتیاز" },
                      { icon: "🎁", text: "جوایز رایگان" },
                      { icon: "🎰", text: "چرخ شانس روزانه" },
                      { icon: "💎", text: "منوی اختصاصی" },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-stone-900/50 border border-amber-500/30 rounded-2xl p-4"
                      >
                        <div className="text-4xl mb-2">
                          {benefit.icon}
                        </div>
                        <div className="text-stone-300 text-sm">
                          {benefit.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLoginModal(true)}
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-xl shadow-2xl hover:shadow-amber-500/50 transition-shadow"
                  >
                    عضویت و دریافت 10 امتیاز رایگان! 🎉
                  </motion.button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Popular Items Carousel */}
      <PopularItems menuItems={menuItems} />

      {/* Loyalty Section */}
      {isLoggedIn && (
        <section
          id="loyalty-section"
          className="py-20 bg-gradient-to-b from-black to-stone-950"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="text-5xl text-amber-400 mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                باشگاه طرفداران ری‌را
              </h2>
              <p className="text-stone-400 text-xl">
                امتیاز جمع کن، جایزه ببر! 🎁
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto mb-12">
              <LoyaltyCard />
            </div>

            {/* Spin Wheel */}
            <SpinWheel />
          </div>
        </section>
      )}

      {/* How to Earn Points */}
      <section className="py-20 bg-gradient-to-b from-black to-stone-950">
        <div className="container mx-auto px-4">
          <HowToEarn />
        </div>
      </section>

      {/* Weekly Special */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-black">
        <div className="container mx-auto px-4">
          <WeeklySpecial />
        </div>
      </section>

      {/* Mystery Box */}
      <section className="py-20 bg-gradient-to-b from-black to-stone-950">
        <div className="container mx-auto px-4">
          <MysteryBox />
        </div>
      </section>

      {/* Barista Message */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-black">
        <div className="container mx-auto px-4">
          <BaristaMessage />
        </div>
      </section>

      {/* Mood Menu */}
      <section className="py-20 bg-gradient-to-b from-black to-stone-950">
        <div className="container mx-auto px-4">
          <MoodMenu />
        </div>
      </section>

      {/* Weekend Challenge */}
      <section className="py-20 bg-gradient-to-b from-black to-stone-950">
        <div className="container mx-auto px-4">
          <WeekendChallenge />
        </div>
      </section>

      {/* Secret Menu */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-black">
        <div className="container mx-auto px-4">
          <SecretMenu />
        </div>
      </section>

      {/* Fans Wall */}
      <section className="py-20 bg-gradient-to-b from-black to-stone-950">
        <div className="container mx-auto px-4">
          <FansWall />
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu-section"
        className="py-20 bg-gradient-to-b from-stone-950 to-black"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl text-amber-400 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              منوی کامل
            </motion.h2>
            <p className="text-stone-400 text-xl">
              Complete Menu
            </p>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-xs mx-auto mt-6"
            >
              <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Category Tabs */}
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Menu Items Grid */}
          <MenuSection activeCategory={activeCategory} menuItems={menuItems} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-stone-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "☕",
                title: "قهوه تازه",
                titleEn: "Fresh Coffee",
                desc: "دانه‌های قهوه تازه برشته شده",
              },
              {
                icon: "🎂",
                title: "دسرهای خانگی",
                titleEn: "Homemade Desserts",
                desc: "دسرهای تازه و دست‌ساز روزانه",
              },
              {
                icon: "🌟",
                title: "محیطی دنج",
                titleEn: "Cozy Atmosphere",
                desc: "فضایی آرام برای لذت بردن",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 text-center border border-stone-700 hover:border-amber-500/50 transition-all duration-500"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="text-6xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl text-amber-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-400 mb-2">
                  {feature.titleEn}
                </p>
                <p className="text-stone-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-5xl text-amber-400 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ارتباط با ما
            </h2>
            <p className="text-stone-400 text-xl">Contact Us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "تماس",
                value: "09117468649",
                link: "tel:09117468649",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "آدرس",
                value:
                  "جویبار، خیابان امام، روبروی مخابرات، ساختمان گنجینه، طبقه پنجم",
                link: null,
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "ساعت کار",
                value: "همه روزه از ساعت ۹ تا ۱۱ و ۱۶ تا ۲۳",
                link: null,
              },
              {
                icon: <Instagram className="w-8 h-8" />,
                title: "اینستاگرام",
                value: "@rira_cafe_",
                link: "https://www.instagram.com/rira_cafe_/",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-amber-500/50 transition-all"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={
                      item.link.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-amber-400 mb-1">
                        {item.title}
                      </div>
                      <div className="text-stone-300 text-sm leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-amber-400 mb-1">
                        {item.title}
                      </div>
                      <div className="text-stone-300 text-sm leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-stone-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div 
                onClick={(e) => {
                  if (e.detail === 3) {
                    setShowAdminLogin(true);
                  }
                }}
                className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center cursor-pointer"
                title="سه بار کلیک کنید"
              >
                <span className="text-2xl">☕</span>
              </div>
              <div>
                <div className="text-2xl text-amber-400">
                  کافه ری‌را
                </div>
                <div className="text-sm text-stone-400">
                  Rira Cafe
                </div>
              </div>
            </div>
            <p className="text-stone-500 text-sm">
              © 2025 کافه ری‌را - تمامی حقوق محفوظ است
            </p>
            <p className="text-stone-600 text-xs mt-2">
              Designed with ❤️ for coffee lovers
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Action Button - Scroll to Top */}
      {scrolled && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl">↑</span>
        </motion.button>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      {/* Admin Panel */}
      {isAdminLoggedIn && (
        <AdminPanel
          isOpen={showAdminPanel}
          onClose={() => setShowAdminPanel(false)}
          menuItems={menuItems}
          onUpdateMenu={handleUpdateMenu}
        />
      )}

      {/* Toast Notifications */}
      <Toaster position="top-center" richColors />

      {/* Secret Admin Access (Triple Click Logo) */}
      <div
        onClick={(e) => {
          if (e.detail === 3) {
            setShowAdminLogin(true);
          }
        }}
        className="fixed bottom-4 right-4 w-2 h-2 opacity-0"
      />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}