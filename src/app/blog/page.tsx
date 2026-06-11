"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, User, Calendar, BookOpen, X, Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Exercises for Hypertrophy",
    category: "Fitness",
    date: "June 08, 2026",
    author: "Coach Hamza Shah",
    readTime: "6 mins read",
    image: "/assets/media__1781157310608.jpg",
    summary: "Discover how progressive overload, biomechanics, and correct posture build lean muscle fibers efficiently while preventing injuries.",
    content: `Building muscle mass (hypertrophy) requires more than just picking up heavy weights. It requires a systematic approach to biomechanics, mechanical loading, and progressive overload. Here are the 5 essential movements that target major muscle fibers and form the core of a premium strength program:

1. **Barbell Back Squats:** The undisputed king of leg development. Focus on hitting parallel depth while keeping your spine neutral to load the quadriceps and glutes.
2. **Romanian Deadlifts (RDLs):** Excellent for loading the posterior chain. Push your hips back and maintain a slight knee bend to isolate the hamstrings and lower glutes.
3. **Incline Dumbbell Press:** Targets the clavicular head of the pectoralis major. The incline angle (30-45 degrees) optimizes muscle fiber stretch.
4. **Weighted Pull-ups / Lat Pulldowns:** Essential for widening the latissimus dorsi. Pull with your elbows rather than your hands to isolate the upper back.
5. **Overhead Dumbbell Press:** For complete shoulder hypertrophy. Ensure you press in the scapular plane (slightly forward) to protect the rotator cuffs.

Always track your lifts. Increase the load or reps weekly by 2.5% to maintain progressive overload.`
  },
  {
    id: 2,
    title: "Top 5 Clean Carbs for Pre-Workout Fuel",
    category: "Nutrition",
    date: "June 05, 2026",
    author: "Coach Zara Malik",
    readTime: "5 mins read",
    image: "/assets/media__1781157310645.jpg",
    summary: "Fuel your heavy compound sessions with high-quality glycogen sources that prevent mid-workout fatigue.",
    content: `When training at a high intensity—such as plyometric circuits, heavy powerlifting, or compound hypertrophy—your body relies primarily on glycogen (stored carbohydrates) as its energy source. Consuming fast-digesting, clean carbs pre-workout prevents energy crashes. Here are the top 5 clean carbs to fuel your gains:

1. **Rolled Oats:** Rich in beta-glucan (a soluble fiber) that releases glucose slowly into your bloodstream, providing sustained energy. Consume 90 minutes before training.
2. **Bananas:** Nature's pre-workout. Packed with simple digestible carbs and potassium to maintain nerve function and prevent cramping. Eat 30 minutes before lifting.
3. **Sweet Potatoes:** An excellent source of complex carbs and beta-carotene. Perfect for sustaining energy through long leg days. Consume 2 hours before training.
4. **White Rice with Chicken:** Easy to digest and quickly stored as muscle glycogen. Ideal for bodybuilders training within a 1-hour window post-meal.
5. **Dates:** Extremely fast-digesting natural sugars. Pop 2-3 dates 15 minutes before hitting the gym floor for a clean energy kick.

Avoid fats and heavy fibers directly before a workout, as they slow down digestion and divert blood flow away from active muscles to the gut.`
  },
  {
    id: 3,
    title: "Biometric Security & Locker Upgrade",
    category: "Announcements",
    date: "May 29, 2026",
    author: "Gym Management",
    readTime: "3 mins read",
    image: "/assets/media__1781157310632.jpg",
    summary: "Get Smart Gym is upgrading all biometric entry systems and locker keys across Karachi to ensure top-tier safety.",
    content: `To uphold our promise of a safe, dependable, and premium fitness environment for families, the Chain of Get Smart Gym is pleased to announce a comprehensive facility security upgrade across all Karachi branches.

Starting next week, our technical team will install:
* **Advanced Biometric Scanners:** Upgraded facial and fingerprint verification systems at the main entrance to ensure only registered members gain entry.
* **Keyless Digital Lockers:** Replacing traditional keys with pin-code locker handles in all male and female changing rooms.
* **Enhanced Surveillance:** Additional security cameras in common corridors and parking bays.

These upgrades represent our commitment to making premium gym ambiance more dependable and safe for your family members. Please visit the reception desk during your next session to re-register your fingerprint if prompted.`
  },
  {
    id: 4,
    title: "Member Transformation: Kamran's Journey",
    category: "Success Stories",
    date: "May 22, 2026",
    author: "Editor Team",
    readTime: "8 mins read",
    image: "/assets/media__1781157310618.jpg",
    summary: "How a local Karachi businessman lost 18kg and restored his heart health in 9 months under professional guidance.",
    content: `Kamran Shah, a 42-year-old entrepreneur from Gulshan-e-Iqbal, Karachi, was facing severe fatigue, elevated cholesterol, and a sedentary lifestyle. Under the professional guidance of Head Coach Hamza at Get Smart Gym, Kamran embarked on a structured 9-month transformation journey.

**The Strategy:**
* **Training:** 3 days of progressive strength training targeting compound lifts, and 2 days of low-intensity cardio conditioning.
* **Diet:** A clean calorie-deficit menu structured by Coach Zara, swapping processed carbs for whole foods and lean proteins.
* **Consistency:** Utilizing biometric logs to ensure Kamran never missed a weekly check-in.

**The Results:**
* **Weight Loss:** Dropped from 98kg to 80kg (-18kg).
* **Body Fat:** Decreased from 32% to 19%.
* **Health Metrics:** Cholesterol returned to normal ranges, and cardiovascular stamina increased three-fold.

"Get Smart Gym made this possible because it was affordable, safe, and highly professional," Kamran shares. "I now have the energy to manage my business and play with my children without feeling short of breath."`
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [readingPost, setReadingPost] = useState<typeof blogPosts[0] | null>(null);

  const categories = ["All", "Fitness", "Nutrition", "Announcements", "Success Stories"];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310618.jpg"
            alt="Blog Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Latest Updates</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            NEWS & FITNESS BLOG
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Get professional training tips, nutrition advice, gym announcements, and member success stories.
          </p>
        </div>
      </section>

      {/* Main Blog Catalog */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Controls: Category Switcher and Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-white/5">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 scrollbar-none">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mr-2 flex items-center gap-1.5 shrink-0">
                <Filter className="w-4 h-4 text-gold" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-md font-outfit text-xs font-semibold uppercase tracking-wider border transition-colors shrink-0 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-gold-gradient text-black border-gold"
                      : "bg-zinc-900 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded py-3 pl-4 pr-10 text-xs text-white focus:outline-none focus:border-gold placeholder:text-zinc-600 transition-colors"
              />
              <Search className="w-4 h-4 text-zinc-500 absolute right-3 top-3.5" />
            </div>

          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="glass-panel rounded-lg overflow-hidden flex flex-col sm:flex-row border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-xl group">
                
                {/* Image Section */}
                <div className="relative h-48 sm:h-auto sm:w-48 shrink-0 overflow-hidden bg-zinc-950">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-gold">
                      <span>{post.category}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <span className="text-zinc-500">{post.date}</span>
                    </div>

                    <h3 className="font-outfit text-lg font-bold text-white uppercase group-hover:text-gold transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {post.summary}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <User className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span className="line-clamp-1">{post.author.split(" ")[1] || post.author}</span>
                    </div>

                    <button
                      onClick={() => setReadingPost(post)}
                      className="text-gold hover:text-white font-outfit text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Read Article
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Reader Modal overlay */}
      <AnimatePresence>
        {readingPost && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingPost(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full max-h-[85vh] bg-[#0c0c0e] border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl z-51 flex flex-col gap-6 overflow-y-auto scrollbar-thin"
            >
              {/* Close */}
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-zinc-900 border border-white/10 hover:border-gold text-white flex items-center justify-center rounded-full transition-colors z-55"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Cover Image */}
              <div className="relative h-60 w-full rounded overflow-hidden bg-zinc-950 border border-white/5 shrink-0 mt-4 sm:mt-0">
                <Image src={readingPost.image} alt={readingPost.title} fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-gold">
                    <span>{readingPost.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-zinc-300">{readingPost.date}</span>
                  </div>
                  <h2 className="font-outfit text-xl sm:text-3xl font-black text-white uppercase tracking-wider mt-2">
                    {readingPost.title}
                  </h2>
                </div>
              </div>

              {/* Meta details & body text */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6 text-xs text-zinc-500 uppercase tracking-widest font-semibold border-b border-white/5 pb-3">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-gold" />
                    Author: {readingPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold" />
                    {readingPost.readTime}
                  </span>
                </div>

                <div className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium">
                  {readingPost.content}
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex justify-end">
                <button
                  onClick={() => setReadingPost(null)}
                  className="bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold text-white font-outfit text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded transition duration-200"
                >
                  Close Reader
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingCTA />
    </>
  );
}
