"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, Award, Flame, Filter, CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

// Classes Data
const classesList = [
  {
    id: 1,
    title: "Strength & Hypertrophy",
    category: "Strength",
    desc: "Focus on progressive overload, proper lifting form, and target-muscle hypertrophy using premium machinery.",
    duration: "60 mins",
    difficulty: "Advanced",
    trainer: "Coach Hamza",
    image: "/assets/media__1781157310608.jpg",
  },
  {
    id: 2,
    title: "Cardio Endurance & Core",
    category: "Cardio",
    desc: "Boost lung volume and cardiac capacity with structured treadmill routines and high-performance bike intervals.",
    duration: "45 mins",
    difficulty: "Beginner",
    trainer: "Coach Ali",
    image: "/assets/media__1781157310618.jpg",
  },
  {
    id: 3,
    title: "High-Intensity Interval Training (HIIT)",
    category: "HIIT",
    desc: "Unleash metabolic conditioning with rapid circuits, plyometrics, and heart-rate tracking workouts.",
    duration: "45 mins",
    difficulty: "Advanced",
    trainer: "Coach Sarah",
    image: "/assets/media__1781157310645.jpg",
  },
  {
    id: 4,
    title: "Weight Loss Circuit",
    category: "Weight Loss",
    desc: "A calorie-burning circuit class mixing light compound lifting, core conditioning, and active recoveries.",
    duration: "50 mins",
    difficulty: "Intermediate",
    trainer: "Coach Zara",
    image: "/assets/media__1781157310608.jpg",
  },
  {
    id: 5,
    title: "Functional & Mobility",
    category: "Functional",
    desc: "Improve dynamic stability, core strength, joint mobility, and athletic movement patterns for daily life.",
    duration: "55 mins",
    difficulty: "Beginner",
    trainer: "Coach Usman",
    image: "/assets/media__1781157310618.jpg",
  },
  {
    id: 6,
    title: "Cross Training Arena",
    category: "Cross Training",
    desc: "Combine weightlifting, gymnastics, and high-intensity cardio in a challenging sandbox circuit.",
    duration: "60 mins",
    difficulty: "Advanced",
    trainer: "Coach Bilal",
    image: "/assets/media__1781157310645.jpg",
  },
  {
    id: 7,
    title: "Elite Personal Training",
    category: "Personal Training",
    desc: "1-on-1 private instruction tailored to your body composition goals, postural analysis, and customized nutrition.",
    duration: "60 mins",
    difficulty: "All Levels",
    trainer: "Senior Coach Team",
    image: "/assets/media__1781157310632.jpg",
  },
  {
    id: 8,
    title: "Group Conditioning Sessions",
    category: "Group Sessions",
    desc: "Experience training together with high energy music, cooperative circuits, and friendly competitions.",
    duration: "50 mins",
    difficulty: "Intermediate",
    trainer: "Coach Sarah",
    image: "/assets/media__1781157310608.jpg",
  }
];

// Timetable Data
const weeklySchedule = {
  Monday: [
    { time: "07:00 AM - 08:00 AM", name: "HIIT", trainer: "Coach Sarah", room: "Studio A" },
    { time: "09:00 AM - 10:00 AM", name: "Strength & Hypertrophy", trainer: "Coach Hamza", room: "Main Gym Floor" },
    { time: "04:30 PM - 05:30 PM", name: "Cardio Endurance", trainer: "Coach Ali", room: "Cardio Arena" },
    { time: "06:30 PM - 07:30 PM", name: "Weight Loss Circuit", trainer: "Coach Zara", room: "Studio B" },
    { time: "08:00 PM - 09:00 PM", name: "Cross Training", trainer: "Coach Bilal", room: "Combat Room" }
  ],
  Tuesday: [
    { time: "07:00 AM - 08:00 AM", name: "Functional Fitness", trainer: "Coach Usman", room: "Studio B" },
    { time: "09:00 AM - 10:00 AM", name: "Cardio Endurance", trainer: "Coach Ali", room: "Cardio Arena" },
    { time: "05:00 PM - 06:00 PM", name: "HIIT", trainer: "Coach Sarah", room: "Studio A" },
    { time: "06:30 PM - 07:30 PM", name: "Strength & Hypertrophy", trainer: "Coach Hamza", room: "Main Gym Floor" },
    { time: "08:00 PM - 09:00 PM", name: "Group Conditioning", trainer: "Coach Sarah", room: "Studio A" }
  ],
  Wednesday: [
    { time: "07:00 AM - 08:00 AM", name: "HIIT", trainer: "Coach Sarah", room: "Studio A" },
    { time: "09:00 AM - 10:00 AM", name: "Strength & Hypertrophy", trainer: "Coach Hamza", room: "Main Gym Floor" },
    { time: "04:30 PM - 05:30 PM", name: "Weight Loss Circuit", trainer: "Coach Zara", room: "Studio B" },
    { time: "06:30 PM - 07:30 PM", name: "Functional Fitness", trainer: "Coach Usman", room: "Studio B" },
    { time: "08:00 PM - 09:00 PM", name: "Cross Training", trainer: "Coach Bilal", room: "Combat Room" }
  ],
  Thursday: [
    { time: "07:00 AM - 08:00 AM", name: "Cardio Endurance", trainer: "Coach Ali", room: "Cardio Arena" },
    { time: "09:00 AM - 10:00 AM", name: "Functional Fitness", trainer: "Coach Usman", room: "Studio B" },
    { time: "05:00 PM - 06:00 PM", name: "HIIT", trainer: "Coach Sarah", room: "Studio A" },
    { time: "06:30 PM - 07:30 PM", name: "Strength & Hypertrophy", trainer: "Coach Hamza", room: "Main Gym Floor" },
    { time: "08:00 PM - 09:00 PM", name: "Group Conditioning", trainer: "Coach Sarah", room: "Studio A" }
  ],
  Friday: [
    { time: "07:00 AM - 08:00 AM", name: "HIIT", trainer: "Coach Sarah", room: "Studio A" },
    { time: "09:00 AM - 10:00 AM", name: "Strength & Hypertrophy", trainer: "Coach Hamza", room: "Main Gym Floor" },
    { time: "04:30 PM - 05:30 PM", name: "Cardio Endurance", trainer: "Coach Ali", room: "Cardio Arena" },
    { time: "06:30 PM - 07:30 PM", name: "Weight Loss Circuit", trainer: "Coach Zara", room: "Studio B" },
    { time: "08:00 PM - 09:00 PM", name: "Cross Training", trainer: "Coach Bilal", room: "Combat Room" }
  ],
  Saturday: [
    { time: "09:00 AM - 10:00 AM", name: "Strength & Hypertrophy", trainer: "Coach Hamza", room: "Main Gym Floor" },
    { time: "11:00 AM - 12:00 PM", name: "Functional Fitness", trainer: "Coach Usman", room: "Studio B" },
    { time: "04:00 PM - 05:00 PM", name: "Group Conditioning", trainer: "Coach Sarah", room: "Studio A" },
    { time: "06:00 PM - 07:00 PM", name: "HIIT", trainer: "Coach Sarah", room: "Studio A" }
  ],
  Sunday: [
    { time: "10:00 AM - 11:00 AM", name: "Cardio Zone Run", trainer: "Coach Ali", room: "Cardio Arena" },
    { time: "12:00 PM - 01:00 PM", name: "Weight Loss Circuit", trainer: "Coach Zara", room: "Studio B" }
  ]
};

type DayName = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export default function Classes() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDay, setActiveDay] = useState<DayName>("Monday");

  // Get unique categories list
  const categories = ["All", "Strength", "Cardio", "HIIT", "Weight Loss", "Functional", "Cross Training", "Personal Training", "Group Sessions"];

  // Filter classes list
  const filteredClasses = activeCategory === "All"
    ? classesList
    : classesList.filter(item => item.category === activeCategory);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner": return "text-green-400 border-green-500/30 bg-green-500/10";
      case "Intermediate": return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      case "Advanced": return "text-orange-400 border-orange-500/30 bg-orange-500/10";
      default: return "text-gold border-gold/30 bg-gold/10";
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
            alt="Classes Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Training Programs</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            WORKOUT CLASSES & TIMETABLE
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Find the perfect workout class engineered for your skill level, targets, and schedule.
          </p>
        </div>
      </section>

      {/* Class Programs Catalog */}
      <section className="py-24 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-800">
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mr-2 flex items-center gap-1.5 shrink-0">
              <Filter className="w-4 h-4 text-gold" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-md font-outfit text-xs sm:text-sm font-semibold uppercase tracking-wider border transition-all duration-200 shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gold-gradient text-black border-gold"
                    : "bg-zinc-950 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredClasses.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="glass-panel glass-panel-hover rounded-lg overflow-hidden flex flex-col h-full border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-md group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050507] to-transparent" />
                    
                    {/* Difficulty Badge */}
                    <div className={`absolute top-4 right-4 px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <span className="text-gold text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                      <h3 className="font-outfit text-lg font-bold text-white uppercase group-hover:text-gold transition-colors mt-1">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-gold" />
                        {item.trainer.split(" ")[1] || item.trainer}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Interactive Schedule Timetable */}
      <section className="py-24 bg-[#0c0c0e] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-1.5">
              <CalendarCheck className="w-4 h-4 text-gold" /> Weekly Calendar
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase">
              WEEKLY CLASS TIMETABLE
            </h2>
            <p className="text-zinc-400 text-sm">
              Select a day of the week to view scheduled classes, active locations, and coaches.
            </p>
          </div>

          {/* Days Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-4 max-w-4xl mx-auto scrollbar-none">
            {Object.keys(weeklySchedule).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day as DayName)}
                className={`px-6 py-2.5 rounded-full font-outfit text-xs sm:text-sm font-semibold uppercase tracking-wider border transition-all duration-200 shrink-0 cursor-pointer ${
                  activeDay === day
                    ? "bg-gold-gradient text-black border-gold glow-gold"
                    : "bg-zinc-900 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                {weeklySchedule[activeDay].map((slot, index) => (
                  <div
                    key={index}
                    className="glass-panel p-5 rounded-lg border border-white/5 hover:border-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300"
                  >
                    {/* Time */}
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
                      <span className="font-outfit text-sm sm:text-base font-bold text-white tracking-wide">
                        {slot.time}
                      </span>
                    </div>

                    {/* Class Name */}
                    <div className="flex-1 sm:pl-8">
                      <h3 className="font-outfit text-base sm:text-lg font-black text-gold uppercase tracking-wider">
                        {slot.name}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-0.5">{slot.room}</p>
                    </div>

                    {/* Trainer & Join Action */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-none border-white/5 pt-3 sm:pt-0">
                      <div className="text-right sm:text-right">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Coach</span>
                        <span className="text-zinc-300 text-xs sm:text-sm font-semibold">{slot.trainer}</span>
                      </div>
                      <Link href="/membership">
                        <button className="bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold text-white font-outfit text-xs font-bold tracking-wider uppercase px-4 py-2 rounded transition duration-200">
                          Book Slot
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Safety Note banner */}
      <section className="bg-black py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <h3 className="font-outfit text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
            Important Schedule Note
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed">
            * Class schedules are subject to minor updates on national holidays. We recommend arriving 10 minutes prior to your booked slot to complete posture warm-ups. Biometric entry is mandatory at all Karachi branches.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
