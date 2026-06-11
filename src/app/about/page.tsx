"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Sparkles, Smile, ArrowRight, Target, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310632.jpg"
            alt="About Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Who We Are</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            OUR STORY & MISSION
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Chain of Get Smart Gym is determined to its motto of "Building Healthy Nation" and strives to make premium fitness accessible to every family in Karachi.
          </p>
        </div>
      </section>

      {/* Company growth & story */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Col: Image */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[500px] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/media__1781157310632.jpg"
                alt="Get Smart Gym Karachi Entrance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Right Col: Details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Our Journey</span>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase">
                FROM A SINGLE FACILITY TO A CITY-WIDE MOVEMENT
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Founded with a vision to revolutionize the fitness industry in Pakistan, **Chain of Get Smart Gym** has grown from a humble single weight training hall into one of Karachi's most prestigious and trusted fitness chains. 
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We observed that premium gym experiences—with imported biomechanical machines, air-conditioned luxury ambiance, and certified personal trainers—were priced out of reach for average middle-class families. We set out to change this paradigm by optimizing operations, selecting high-performance machinery, and offering premium memberships at a fraction of standard luxury gym costs.
              </p>
              
              {/* Highlight box */}
              <div className="glass-panel border-gold/30 p-6 rounded-lg bg-gold/5 mt-2">
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Motto: "Building Healthy Nation"</h3>
                <p className="text-zinc-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  We believe that physical health, strength, and cardiac endurance are the cornerstones of a progressive nation. Our mission is to make active lifestyles accessible and dependable for families, encouraging husbands, wives, and children to train in safe, respectful environments.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#0c0c0e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div className="glass-panel p-8 sm:p-10 rounded-lg flex flex-col gap-5 border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white uppercase tracking-wide">Our Mission</h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                To construct state-of-the-art gymnasiums with high-quality bio-mechanic equipment, clean and luxurious environments, and expert certified training. We strive to make this standard affordable, reliable, and accessible for households in Karachi, Pakistan.
              </p>
            </div>

            {/* Vision Card */}
            <div className="glass-panel p-8 sm:p-10 rounded-lg flex flex-col gap-5 border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white uppercase tracking-wide">Our Vision</h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                To build a healthier, stronger, and more disease-resilient nation. We envision a branch of Get Smart Gym in every neighborhood of Karachi, ensuring that professional training is always within reach for fitness enthusiasts and families alike.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Built On Trust</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase mt-2">
              WHY FAMILIES TRUST GET SMART GYM
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              We stand apart because we prioritize safety, hygiene, and family comfort above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="glass-panel glass-panel-hover p-8 rounded-lg flex flex-col gap-4 text-center items-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white uppercase">High Hygiene Standards</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                We clean and sanitize all training decks, machines, and lockers hourly. Proper air circulation and ventilation are guaranteed.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover p-8 rounded-lg flex flex-col gap-4 text-center items-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-2">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white uppercase">Ladies & Family Slots</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Providing dedicated schedules and secure training slots for female fitness enthusiasts and families under professional supervision.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover p-8 rounded-lg flex flex-col gap-4 text-center items-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white uppercase">Premium Gym Ambiance</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Luxury lighting systems, custom motivating soundscapes, and fully air-conditioned halls that keep you focused on your gains.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover p-8 rounded-lg flex flex-col gap-4 text-center items-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-2">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white uppercase">Dependable Support</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                No hidden fees, no dynamic pricing. Our pricing structures are transparent, and our staff is always ready to assist you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-black py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase">
            EXPERIENCE THE GET SMART STANDARD
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
            Want to see our machines and locker spaces first? Walk in to any of our locations in Karachi for a guided branch tour.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link href="/branches">
              <button className="bg-zinc-950 border border-white/10 hover:border-gold hover:text-gold text-white font-outfit text-sm font-bold tracking-wide uppercase px-8 py-3.5 rounded-md transition duration-300">
                Find Nearest Branch
              </button>
            </Link>
            <Link href="/membership">
              <button className="bg-gold-gradient text-black font-outfit text-sm font-bold tracking-wide uppercase px-8 py-3.5 rounded-md glow-gold-hover hover:scale-105 transition duration-300 flex items-center gap-2">
                Join Today
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
