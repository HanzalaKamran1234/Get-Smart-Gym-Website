"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Floating Actions Panel */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 text-white flex items-center justify-center hover:bg-zinc-800 hover:border-gold hover:text-gold transition-all duration-300 shadow-xl cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Chat Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          href="https://wa.me/923001234567?text=Hi!%20I%20am%20interested%20in%20joining%20Get%20Smart%20Gym.%20Please%20provide%20membership%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 shadow-2xl transition-transform duration-300 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </motion.a>
      </div>

      {/* Mobile Floating Sticky CTA Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden glass-panel border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+923001234567"
          className="flex-1 bg-zinc-900 border border-white/10 text-white font-outfit text-sm font-bold tracking-wide uppercase py-3 rounded-md flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-gold" />
          Call Gym
        </a>
        <a
          href="https://wa.me/923001234567?text=Hi!%20I%20am%20interested%20in%20joining%20Get%20Smart%20Gym.%20Please%20provide%20membership%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white font-outfit text-sm font-bold tracking-wide uppercase py-3 rounded-md flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-white stroke-none" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
