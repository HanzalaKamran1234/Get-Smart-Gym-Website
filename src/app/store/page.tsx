"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  Check, 
  CreditCard, 
  Sparkles,
  ArrowRight,
  ShoppingBagIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

// Products Data
const products = [
  {
    id: 1,
    name: "Whey Protein Gold Standard",
    category: "Supplements",
    price: 8500,
    rating: 5,
    image: "/assets/media__1781157310608.jpg",
    desc: "Premium micro-filtered whey protein isolate, 24g protein per serving to support muscle growth."
  },
  {
    id: 2,
    name: "Hyper Blast Pre-Workout",
    category: "Supplements",
    price: 5500,
    rating: 4.8,
    image: "/assets/media__1781157310645.jpg",
    desc: "Explosive energy formula with beta-alanine, caffeine, and L-citrulline for vascular pumps."
  },
  {
    id: 3,
    name: "Leather Lifting Belt (Gold Accent)",
    category: "Gym Accessories",
    price: 3200,
    rating: 5,
    image: "/assets/media__1781157310645.jpg",
    desc: "Double-pronged heavy duty cowhide leather belt providing exceptional lumbar support."
  },
  {
    id: 4,
    name: "Premium Elastane Wrist Wraps",
    category: "Gym Accessories",
    price: 1850,
    rating: 4.7,
    image: "/assets/media__1781157310608.jpg",
    desc: "High elasticity wraps with thumb loops and heavy velcro for joint stabilization."
  },
  {
    id: 5,
    name: "Cast Iron Kettlebell (16kg)",
    category: "Fitness Equipment",
    price: 6500,
    rating: 4.9,
    image: "/assets/media__1781157310618.jpg",
    desc: "Solid single-piece cast iron bell with wide textured handle for full body swings."
  },
  {
    id: 6,
    name: "Adjustable Heavy Dumbbell Pair",
    category: "Fitness Equipment",
    price: 15000,
    rating: 5,
    image: "/assets/media__1781157310608.jpg",
    desc: "Space-saving dumbbell pairs adjustable from 5 lbs up to 52.5 lbs in seconds."
  },
  {
    id: 7,
    name: "Gold-Embossed Gym Hoody",
    category: "Apparel",
    price: 4500,
    rating: 4.8,
    image: "/assets/media__1781157310632.jpg",
    desc: "Premium heavy-cotton aesthetic hoody with comfortable cuffs and gold drawstrings."
  },
  {
    id: 8,
    name: "Compression Workout Tee",
    category: "Apparel",
    price: 2500,
    rating: 4.6,
    image: "/assets/media__1781157310618.jpg",
    desc: "Polyester-elastane blend moisture-wicking fit tee to regulate core temperature."
  }
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Store() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  
  // Checkout States
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Karachi"
  });
  const [orderNumber, setOrderNumber] = useState("");

  // Load cart from LocalStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("getsmart_cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to LocalStorage on updates
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("getsmart_cart", JSON.stringify(newCart));
  };

  const addToCart = (product: typeof products[0]) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updated = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCart(updated);
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      };
      saveCart([...cart, newItem]);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    });
    saveCart(updated);
  };

  const removeFromCart = (id: number) => {
    const filtered = cart.filter(item => item.id !== id);
    saveCart(filtered);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Filter Products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkoutStep === 1) {
      setCheckoutStep(2);
    } else if (checkoutStep === 2) {
      // Place Order
      const randomOrder = "GSG-" + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(randomOrder);
      setCheckoutStep(3);
      // Empty Cart
      saveCart([]);
    }
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    setCheckoutStep(1);
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310645.jpg"
            alt="Store Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Gear & Nutrition</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            ONLINE STORE
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Premium gym supplements, high-performance equipment, training accessories, and apparel.
          </p>
        </div>
      </section>

      {/* Main Store Catalog */}
      <section className="py-20 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-64 shrink-0 flex flex-col gap-8">
              
              {/* Search */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Search Products</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search e.g. Whey, Belt..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded py-3 pl-4 pr-10 text-xs text-white focus:outline-none focus:border-gold placeholder:text-zinc-600 transition-colors"
                  />
                  <Search className="w-4 h-4 text-zinc-500 absolute right-3 top-3.5" />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Categories</label>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {["All", "Supplements", "Gym Accessories", "Fitness Equipment", "Apparel"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2.5 rounded text-left text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-gold-gradient text-black border-gold"
                          : "bg-zinc-950 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart Summary trigger card */}
              <div className="glass-panel p-5 rounded-lg border border-white/5 flex flex-col gap-4">
                <div className="flex items-center justify-between text-white font-outfit font-bold uppercase text-sm">
                  <span>Shopping Cart</span>
                  <div className="relative">
                    <ShoppingBag className="w-5 h-5 text-gold" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-gold text-black font-sans font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-zinc-400 text-xs flex justify-between">
                  <span>Items:</span>
                  <span className="text-white font-bold">{cartItemCount}</span>
                </div>
                <div className="text-zinc-400 text-xs flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-gold font-bold">PKR {cartTotal.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="w-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold text-white text-xs font-bold uppercase tracking-wide py-2.5 rounded transition-colors"
                >
                  View Cart Drawer
                </button>
              </div>

            </div>

            {/* Catalog Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-24 glass-panel rounded-lg border border-white/5">
                  <ShoppingBagIcon className="w-16 h-16 text-zinc-700 mx-auto" />
                  <h3 className="font-outfit text-xl font-bold text-white uppercase mt-4">No Products Found</h3>
                  <p className="text-zinc-500 text-xs mt-1">Try clearing your filters or altering your search query.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((p) => (
                    <div key={p.id} className="glass-panel glass-panel-hover rounded-lg overflow-hidden flex flex-col h-full border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-md group">
                      
                      {/* Image cover */}
                      <div
                        className="relative h-48 overflow-hidden cursor-pointer"
                        onClick={() => setSelectedProduct(p)}
                      >
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] to-transparent opacity-80" />
                        <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-gold">
                          {p.category}
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                        <div>
                          <h3 
                            className="font-outfit text-base font-bold text-white uppercase tracking-wider group-hover:text-gold transition-colors cursor-pointer line-clamp-1"
                            onClick={() => setSelectedProduct(p)}
                          >
                            {p.name}
                          </h3>
                          <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2">
                            {p.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-white/5 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Price</span>
                            <span className="font-outfit text-base font-black text-white">PKR {p.price.toLocaleString()}</span>
                          </div>
                          
                          <button
                            onClick={() => addToCart(p)}
                            className="bg-gold-gradient text-black font-outfit text-xs font-bold uppercase tracking-wide px-4 py-2 rounded glow-gold-hover hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            Add
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Cart Slider Drawer overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] bg-[#0c0c0e] border-l border-white/10 p-6 shadow-2xl z-51 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <h3 className="font-outfit text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-gold" /> Shopping Cart
                  </h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-zinc-400 hover:text-white p-1 rounded-md bg-zinc-900 border border-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh] pr-2 scrollbar-thin">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 text-zinc-500 flex flex-col items-center gap-2">
                      <ShoppingBag className="w-12 h-12 text-zinc-700" />
                      <p className="text-xs uppercase tracking-wider font-bold">Your cart is empty</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="glass-panel p-3 rounded flex gap-4 border border-white/5 items-center justify-between"
                      >
                        <div className="relative w-14 h-14 shrink-0 rounded overflow-hidden bg-zinc-950">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-wide line-clamp-1">{item.name}</h4>
                          <span className="text-gold text-xs font-semibold block mt-0.5">PKR {item.price.toLocaleString()}</span>
                          
                          {/* Quantity selector */}
                          <div className="flex items-center gap-2.5 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 rounded bg-zinc-900 border border-white/10 hover:border-gold flex items-center justify-center text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-white text-xs font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 rounded bg-zinc-900 border border-white/10 hover:border-gold flex items-center justify-center text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-500 hover:text-red-500 p-1.5 rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Bottom billing & checkout actions */}
              <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Subtotal:</span>
                  <span className="font-outfit text-xl font-black text-gold">PKR {cartTotal.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-zinc-900 border border-white/10 text-white font-outfit text-xs font-bold uppercase tracking-wider py-3 rounded transition-all"
                  >
                    Continue Shopping
                  </button>
                  <button
                    disabled={cart.length === 0}
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCheckoutOpen(true);
                    }}
                    className="w-full bg-gold-gradient text-black font-outfit text-xs font-bold uppercase tracking-wider py-3 rounded glow-gold-hover hover:opacity-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Checkout
                  </button>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Detail Modal overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-[#0c0c0e] border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl z-51 flex flex-col sm:flex-row gap-6"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-zinc-900 border border-white/10 hover:border-gold text-white flex items-center justify-center rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Product Image */}
              <div className="relative w-full sm:w-60 h-60 shrink-0 rounded overflow-hidden bg-zinc-950 border border-white/5">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between gap-6 pt-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest">{selectedProduct.category}</span>
                    <h3 className="font-outfit text-xl sm:text-2xl font-black text-white uppercase tracking-wider mt-0.5">{selectedProduct.name}</h3>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{selectedProduct.desc}</p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Price</span>
                    <span className="font-outfit text-xl font-black text-white">PKR {selectedProduct.price.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="bg-gold-gradient text-black font-outfit text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded glow-gold-hover hover:opacity-95 transition-all flex items-center gap-1.5"
                  >
                    Add to Cart
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Wizard Modal overlay */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCheckout}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-xl w-full bg-[#0c0c0e] border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl z-51"
            >
              {/* Close */}
              <button
                onClick={closeCheckout}
                className="absolute top-4 right-4 w-9 h-9 bg-zinc-900 border border-white/10 hover:border-gold text-white flex items-center justify-center rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Steps Indicator */}
              {checkoutStep < 3 && (
                <div className="flex items-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  <span className={checkoutStep === 1 ? "text-gold" : "text-zinc-400"}>1. Shipping</span>
                  <span className="w-6 h-px bg-zinc-800" />
                  <span className={checkoutStep === 2 ? "text-gold" : "text-zinc-500"}>2. Confirmation</span>
                </div>
              )}

              {/* Form Wizard */}
              <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-6">
                
                {/* Step 1: Shipping details */}
                {checkoutStep === 1 && (
                  <>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-outfit text-xl font-bold text-white uppercase tracking-wide">Shipping Details</h3>
                      <p className="text-zinc-400 text-xs">Enter your delivery coordinates. Free delivery inside Karachi.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hanzala Kamran"
                          value={shippingDetails.name}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 03001234567"
                          value={shippingDetails.phone}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. client@email.com"
                          value={shippingDetails.email}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Shipping Address</label>
                        <textarea
                          rows={3}
                          required
                          placeholder="House No, Street, Area, Karachi"
                          value={shippingDetails.address}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold-gradient text-black font-outfit text-xs font-bold uppercase tracking-wider py-3 rounded mt-2 flex items-center justify-center gap-1.5"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Step 2: Confirmation & Billing */}
                {checkoutStep === 2 && (
                  <>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-outfit text-xl font-bold text-white uppercase tracking-wide">Order Confirmation</h3>
                      <p className="text-zinc-400 text-xs">Verify billing totals and payment method.</p>
                    </div>

                    <div className="glass-panel p-4 rounded border border-white/5 text-xs flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Recipient Name:</span>
                        <span className="text-white font-bold">{shippingDetails.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Phone:</span>
                        <span className="text-white font-bold">{shippingDetails.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Shipping Address:</span>
                        <span className="text-white font-bold text-right max-w-xs">{shippingDetails.address}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Payment Mode:</span>
                        <span className="text-gold font-bold">Cash on Delivery (COD)</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gold-gradient text-black font-outfit text-xs font-bold uppercase tracking-wider py-3.5 rounded mt-2 flex items-center justify-center gap-2 glow-gold-hover"
                    >
                      Place Order
                      <Check className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Step 3: Success Confirmation */}
                {checkoutStep === 3 && (
                  <div className="text-center py-6 flex flex-col items-center gap-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-outfit text-2xl font-black text-white uppercase mt-2">Order Confirmed!</h3>
                    <p className="text-zinc-400 text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you for your purchase from the Get Smart Gym shop. Your order <span className="text-gold font-bold">{orderNumber}</span> has been processed. We will call you to confirm dispatch details.
                    </p>
                    <button
                      type="button"
                      onClick={closeCheckout}
                      className="w-full bg-zinc-950 border border-white/10 hover:border-gold hover:text-gold text-white font-outfit text-xs font-bold uppercase tracking-wide py-3 rounded mt-4"
                    >
                      Return to Store
                    </button>
                  </div>
                )}

              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingCTA />
    </>
  );
}
