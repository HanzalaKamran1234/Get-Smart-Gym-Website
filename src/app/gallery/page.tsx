"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { Filter, Eye, X, ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const galleryItems = [
  {
    id: 1,
    title: "Weight Training Benches Arena",
    category: "Gym Interior",
    desc: "Our premium hypertrophy zone with red floors and fully adjustable benches.",
    image: "/assets/media__1781157310608.jpg"
  },
  {
    id: 2,
    title: "Hammer Strength Machine Row",
    category: "Equipment",
    desc: "State-of-the-art chest and shoulder press biomechanical machines.",
    image: "/assets/media__1781157310618.jpg"
  },
  {
    id: 3,
    title: "Gulshan Branch Glass Entrance",
    category: "Branches",
    desc: "The pristine, welcoming entrance of our premium health club in Gulshan.",
    image: "/assets/media__1781157310632.jpg"
  },
  {
    id: 4,
    title: "Complete Dumbbell Rack Setup",
    category: "Equipment",
    desc: "Pro dumbbells ranging from 5 lbs up to 100 lbs for progressive training.",
    image: "/assets/media__1781157310645.jpg"
  },
  {
    id: 5,
    title: "Main Free Weights Lifting Arena",
    category: "Gym Interior",
    desc: "Hypertrophy training benches surrounded by mirrors to maintain perfect form.",
    image: "/assets/media__1781157310608.jpg"
  },
  {
    id: 6,
    title: "Imported Biomechanical Machinery",
    category: "Equipment",
    desc: "Adjustable cable stations and plate loaded leg presses for safe lifting.",
    image: "/assets/media__1781157310618.jpg"
  },
  {
    id: 7,
    title: "Clifton Location Reception Desk",
    category: "Branches",
    desc: "Where our fitness consultants greet members for biometric check-in.",
    image: "/assets/media__1781157310632.jpg"
  },
  {
    id: 8,
    title: "Heavy Dumbbell Row Section",
    category: "Equipment",
    desc: "Rubber-capped high durability plates for professional powerlifters.",
    image: "/assets/media__1781157310645.jpg"
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ["All", "Gym Interior", "Equipment", "Branches"];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310608.jpg"
            alt="Gallery Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Visual Tour</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            GYM MEDIA GALLERY
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Take a virtual tour of our premium cardio zones, heavy weightlifting arenas, locker facilities, and branch entrances.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Filters */}
          <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-none">
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mr-2 flex items-center gap-1.5 shrink-0">
              <Filter className="w-4 h-4 text-gold" /> Filter:
            </span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full font-outfit text-xs sm:text-sm font-semibold uppercase tracking-wider border transition-all duration-200 shrink-0 cursor-pointer ${
                  activeFilter === f
                    ? "bg-gold-gradient text-black border-gold glow-gold"
                    : "bg-zinc-900 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative h-64 rounded-lg overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-lg cursor-pointer bg-zinc-950"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Action Overlays */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-12 h-12 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <span className="text-gold text-[9px] font-bold uppercase tracking-widest block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-outfit text-sm font-bold text-white uppercase tracking-wider line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 bg-zinc-900 border border-white/10 hover:border-gold text-white flex items-center justify-center rounded-full transition-colors z-55"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-6 w-12 h-12 bg-zinc-900/60 border border-white/10 hover:border-gold text-white flex items-center justify-center rounded-full transition-colors z-55"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 w-12 h-12 bg-zinc-900/60 border border-white/10 hover:border-gold text-white flex items-center justify-center rounded-full transition-colors z-55"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div
              className="relative max-w-5xl w-full h-[60vh] sm:h-[70vh] flex flex-col justify-center items-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption details below the photo */}
              <div className="text-center max-w-xl mt-6 px-4">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h2 className="font-outfit text-lg sm:text-xl font-bold text-white uppercase tracking-wider mt-1">
                  {filteredItems[lightboxIndex].title}
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2">
                  {filteredItems[lightboxIndex].desc}
                </p>
                <div className="text-zinc-500 text-xs mt-3 font-semibold">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Video Showcase */}
      <section className="py-24 bg-[#0c0c0e] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Video Hub</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase">
              YOUTUBE VIDEO SHOWCASE
            </h2>
            <p className="text-zinc-400 text-sm">
              Watch branch tours, elite workout tutorials, and nutritional guide videos from our certified coaching panel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video Card 1 */}
            <div className="glass-panel rounded-lg overflow-hidden border border-white/5 group shadow-lg flex flex-col justify-between">
              <div className="relative h-48 bg-zinc-950 flex items-center justify-center cursor-pointer">
                <Image
                  src="/assets/media__1781157310632.jpg"
                  alt="Gym Tour Video Thumbnail"
                  fill
                  className="object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute w-14 h-14 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                  <Play className="w-5 h-5 fill-black stroke-none ml-0.5" />
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded bg-black/75 text-zinc-300 text-[10px] font-bold">
                  5:12
                </div>
              </div>
              <div className="p-5">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest font-semibold">Gym Tour</span>
                <h3 className="font-outfit text-sm font-bold text-white uppercase mt-1 tracking-wider leading-snug">
                  Get Smart Gym Karachi - Premium Infrastructure Tour
                </h3>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                  Join us for a complete walkthrough of our heavy weights arena, locker layouts, and steam bath areas.
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="glass-panel rounded-lg overflow-hidden border border-white/5 group shadow-lg flex flex-col justify-between">
              <div className="relative h-48 bg-zinc-950 flex items-center justify-center cursor-pointer">
                <Image
                  src="/assets/media__1781157310608.jpg"
                  alt="Lifting Form Video Thumbnail"
                  fill
                  className="object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute w-14 h-14 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                  <Play className="w-5 h-5 fill-black stroke-none ml-0.5" />
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded bg-black/75 text-zinc-300 text-[10px] font-bold">
                  8:45
                </div>
              </div>
              <div className="p-5">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest font-semibold">Fitness Tips</span>
                <h3 className="font-outfit text-sm font-bold text-white uppercase mt-1 tracking-wider leading-snug">
                  How to Squat for Quad Hypertrophy (By Coach Hamza)
                </h3>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                  Learn how foot spacing, knee path, and spinal angles maximize muscle fiber loading and protect knees.
                </p>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="glass-panel rounded-lg overflow-hidden border border-white/5 group shadow-lg flex flex-col justify-between">
              <div className="relative h-48 bg-zinc-950 flex items-center justify-center cursor-pointer">
                <Image
                  src="/assets/media__1781157310618.jpg"
                  alt="Cardio Video Thumbnail"
                  fill
                  className="object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute w-14 h-14 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                  <Play className="w-5 h-5 fill-black stroke-none ml-0.5" />
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded bg-black/75 text-zinc-300 text-[10px] font-bold">
                  6:30
                </div>
              </div>
              <div className="p-5">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest font-semibold">Workout Tips</span>
                <h3 className="font-outfit text-sm font-bold text-white uppercase mt-1 tracking-wider leading-snug">
                  Cardio Pacing & Breathing Mechanics (By Coach Ali)
                </h3>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                  A detailed lesson on managing oxygen volume and pacing intervals to boost metabolic stamina.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
