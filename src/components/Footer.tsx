"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-5">
            <Logo showTagline size="md" />
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">
              Chain of Get Smart Gym is determined to its motto of "Building Healthy Nation" and strives to make gyms with excellent machines, premium ambiance, and professional trainers more affordable, accessible, and dependable for families.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
                aria-label="Facebook Link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
                aria-label="YouTube Link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <polygon points="10 15 15 12 10 9"/>
                </svg>
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp Link"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit text-white font-bold uppercase tracking-wider text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-gold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-gold transition-colors text-sm font-medium">
                  About Us & Story
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-zinc-400 hover:text-gold transition-colors text-sm font-medium">
                  Workout Classes
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-zinc-400 hover:text-gold transition-colors text-sm font-medium">
                  Professional Trainers
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-zinc-400 hover:text-gold transition-colors text-sm font-medium">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-zinc-400 hover:text-gold transition-colors text-sm font-medium">
                  Gym Branches
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-outfit text-white font-bold uppercase tracking-wider text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-gold">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm leading-relaxed">
                  Main Gulshan-e-Iqbal, DHA Phase 6 & Clifton Branches, Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+923001234567" className="text-zinc-400 hover:text-gold transition-colors text-sm">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@getsmartgym.com" className="text-zinc-400 hover:text-gold transition-colors text-sm">
                  info@chainofgetsmartgym.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-outfit text-white font-bold uppercase tracking-wider text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-gold">
              Newsletter
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Subscribe to get latest updates, health tips, and promotional offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-md py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-gold-gradient text-black rounded-md flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Subscribe Button"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-gold text-xs font-semibold animate-fade-in mt-1">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Get Smart Gym. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-zinc-500 text-xs">
            <span className="font-semibold text-gold font-outfit uppercase tracking-widest text-[10px]">
              Building Healthy Nation
            </span>
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
