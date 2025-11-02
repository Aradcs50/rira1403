import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Settings,
  Package,
  TrendingUp,
  Users,
  DollarSign,
  Plus,
  Edit,
  Trash2,
  X,
  Save,
  Eye,
  EyeOff,
  LogOut,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { toast } from "sonner@2.0.3";
import type { MenuItem } from "../data/menuData";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onUpdateMenu: (items: MenuItem[]) => void;
}

export function AdminPanel({
  isOpen,
  onClose,
  menuItems,
  onUpdateMenu,
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<"products" | "stats" | "settings">(
    "products"
  );
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { id: "hot-drinks", nameFa: "نوشیدنی‌های گرم" },
    { id: "cold-drinks", nameFa: "نوشیدنی‌های سرد" },
    { id: "food", nameFa: "غذا و صبحانه" },
    { id: "desserts", nameFa: "دسر" },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.nameFa.includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEditItem = (item: MenuItem) => {
    setEditingItem({ ...item });
    setShowEditDialog(true);
  };

  const handleSaveItem = () => {
    if (!editingItem) return;

    const updatedItems = menuItems.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
    onUpdateMenu(updatedItems);
    setShowEditDialog(false);
    setEditingItem(null);
    toast.success("محصول با موفقیت به‌روزرسانی شد");
  };

  const handleDeleteItem = (id: number) => {
    if (confirm("آیا از حذف این محصول اطمینان دارید؟")) {
      const updatedItems = menuItems.filter((item) => item.id !== id);
      onUpdateMenu(updatedItems);
      toast.success("محصول با موفقیت حذف شد");
    }
  };

  const handleAddItem = () => {
    const newItem: MenuItem = {
      id: Math.max(...menuItems.map((i) => i.id), 0) + 1,
      name: "",
      nameFa: "",
      description: "",
      descriptionFa: "",
      price: "0",
      image: "",
      category: "hot-drinks",
      popular: false,
    };
    setEditingItem(newItem);
    setShowEditDialog(true);
  };

  const totalRevenue = menuItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/,/g, ""));
    return sum + price;
  }, 0);

  const avgPrice =
    menuItems.length > 0 ? Math.round(totalRevenue / menuItems.length) : 0;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] overflow-y-auto"
      dir="rtl"
    >
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl text-amber-400">پنل مدیریت</h1>
                <p className="text-stone-400 text-sm">
                  مدیریت کافه ری‌را
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="outline"
              className="bg-stone-800 border-stone-700 hover:bg-red-500 hover:border-red-500"
            >
              <X className="w-5 h-5 ml-2" />
              بستن
            </Button>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-stone-900 p-2 rounded-2xl border border-stone-800">
            {[
              { id: "products", label: "محصولات", icon: Package },
              { id: "stats", label: "آمار", icon: TrendingUp },
              { id: "settings", label: "تنظیمات", icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                    : "text-stone-400 hover:text-white hover:bg-stone-800"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "products" && (
              <motion.div
                key="products"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Actions Bar */}
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 mb-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="جستجو در محصولات..."
                        className="pr-10 bg-stone-800 border-stone-700"
                      />
                    </div>
                    <Select
                      value={filterCategory}
                      onValueChange={setFilterCategory}
                    >
                      <SelectTrigger className="w-full md:w-48 bg-stone-800 border-stone-700">
                        <Filter className="w-4 h-4 ml-2" />
                        <SelectValue placeholder="دسته‌بندی" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">همه دسته‌ها</SelectItem>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.nameFa}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={handleAddItem}
                      className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                    >
                      <Plus className="w-5 h-5 ml-2" />
                      افزودن محصول جدید
                    </Button>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-stone-900 border border-stone-800 rounded-2xl p-4 hover:border-amber-500/50 transition-all"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.nameFa}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-amber-400 truncate">
                            {item.nameFa}
                          </h3>
                          <p className="text-stone-500 text-sm truncate">
                            {item.name}
                          </p>
                          <p className="text-stone-300 mt-1">
                            {item.price} تومان
                          </p>
                          {item.popular && (
                            <span className="inline-block mt-1 text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                              محبوب
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={() => handleEditItem(item)}
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-stone-800 border-stone-700 hover:bg-amber-500 hover:border-amber-500"
                        >
                          <Edit className="w-4 h-4 ml-2" />
                          ویرایش
                        </Button>
                        <Button
                          onClick={() => handleDeleteItem(item.id)}
                          variant="outline"
                          size="sm"
                          className="bg-stone-800 border-stone-700 hover:bg-red-500 hover:border-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "stats" && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    {
                      label: "تعداد محصولات",
                      value: menuItems.length,
                      icon: Package,
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      label: "محصولات محبوب",
                      value: menuItems.filter((i) => i.popular).length,
                      icon: TrendingUp,
                      color: "from-amber-500 to-orange-500",
                    },
                    {
                      label: "میانگین قیمت",
                      value: avgPrice.toLocaleString() + " تومان",
                      icon: DollarSign,
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      label: "دسته‌بندی‌ها",
                      value: categories.length,
                      icon: Filter,
                      color: "from-purple-500 to-pink-500",
                    },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-stone-900 border border-stone-800 rounded-2xl p-6"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-stone-400 text-sm mb-1">
                        {stat.label}
                      </p>
                      <p className="text-2xl text-white">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Category Breakdown */}
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
                  <h3 className="text-xl text-amber-400 mb-6">
                    تفکیک دسته‌بندی
                  </h3>
                  <div className="space-y-4">
                    {categories.map((cat) => {
                      const count = menuItems.filter(
                        (i) => i.category === cat.id
                      ).length;
                      const percentage =
                        menuItems.length > 0
                          ? (count / menuItems.length) * 100
                          : 0;

                      return (
                        <div key={cat.id}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-stone-300">
                              {cat.nameFa}
                            </span>
                            <span className="text-amber-400">
                              {count} محصول ({percentage.toFixed(0)}%)
                            </span>
                          </div>
                          <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-6"
              >
                <h3 className="text-xl text-amber-400 mb-6">
                  تنظیمات سیستم
                </h3>
                <div className="space-y-4">
                  <div className="bg-stone-800 rounded-xl p-4">
                    <h4 className="text-stone-300 mb-2">
                      اطلاعات کافه
                    </h4>
                    <div className="text-stone-400 text-sm space-y-1">
                      <p>📍 جویبار، خیابان امام، روبروی مخابرات</p>
                      <p>⏰ ساعات کاری: ۹-۱۱ و ۱۶-۲۳</p>
                      <p>📱 تماس: ۰۹۱۱۷۴۶۸۶۴۹</p>
                      <p>📷 اینستاگرام: @rira_cafe_</p>
                    </div>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <p className="text-amber-400 text-sm">
                      💡 برای تغییر اطلاعات کافه، با توسعه‌دهنده تماس
                      بگیرید
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="bg-stone-900 border-stone-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-amber-400">
              {editingItem?.id && editingItem.nameFa
                ? "ویرایش محصول"
                : "افزودن محصول جدید"}
            </DialogTitle>
            <DialogDescription className="text-stone-400">
              اطلاعات محصول را وارد کنید
            </DialogDescription>
          </DialogHeader>

          {editingItem && (
            <div className="space-y-4 mt-4" dir="rtl">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-stone-300">نام فارسی</Label>
                  <Input
                    value={editingItem.nameFa}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        nameFa: e.target.value,
                      })
                    }
                    className="bg-stone-800 border-stone-700"
                  />
                </div>
                <div>
                  <Label className="text-stone-300">نام انگلیسی</Label>
                  <Input
                    value={editingItem.name}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        name: e.target.value,
                      })
                    }
                    className="bg-stone-800 border-stone-700"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <Label className="text-stone-300">توضیحات فارسی</Label>
                <Textarea
                  value={editingItem.descriptionFa}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      descriptionFa: e.target.value,
                    })
                  }
                  className="bg-stone-800 border-stone-700"
                  rows={2}
                />
              </div>

              <div>
                <Label className="text-stone-300">توضیحات انگلیسی</Label>
                <Textarea
                  value={editingItem.description}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      description: e.target.value,
                    })
                  }
                  className="bg-stone-800 border-stone-700"
                  rows={2}
                  dir="ltr"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-stone-300">قیمت (تومان)</Label>
                  <Input
                    value={editingItem.price}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        price: e.target.value,
                      })
                    }
                    className="bg-stone-800 border-stone-700"
                    placeholder="مثال: 45,000"
                  />
                </div>
                <div>
                  <Label className="text-stone-300">دسته‌بندی</Label>
                  <Select
                    value={editingItem.category}
                    onValueChange={(value) =>
                      setEditingItem({ ...editingItem, category: value })
                    }
                  >
                    <SelectTrigger className="bg-stone-800 border-stone-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.nameFa}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-stone-300">آدرس تصویر</Label>
                <Input
                  value={editingItem.image}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      image: e.target.value,
                    })
                  }
                  className="bg-stone-800 border-stone-700"
                  placeholder="https://..."
                  dir="ltr"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="popular"
                  checked={editingItem.popular || false}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      popular: e.target.checked,
                    })
                  }
                  className="w-4 h-4"
                />
                <Label htmlFor="popular" className="text-stone-300">
                  محصول محبوب
                </Label>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={handleSaveItem}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                >
                  <Save className="w-4 h-4 ml-2" />
                  ذخیره
                </Button>
                <Button
                  onClick={() => setShowEditDialog(false)}
                  variant="outline"
                  className="bg-stone-800 border-stone-700"
                >
                  انصراف
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
