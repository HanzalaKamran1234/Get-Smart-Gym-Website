"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Dumbbell, 
  Users, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Clock, 
  Check, 
  Flame,
  Star,
  MapPin,
  Calendar
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import AnimatedCounter from "@/components/AnimatedCounter";

// Hero Images
const heroSlides = [
  {
    image: "/assets/media__1781157310608.jpg",
    title: "REDEFINE YOUR FIT LIMITS",
    subtitle: "Affordable luxury fitness for you & your family."
  },
  {
    image: "/assets/media__1781157310618.jpg",
    title: "STATE-OF-THE-ART EQUIPMENT",
    subtitle: "Train with premium biomechanical machines."
  },
  {
    image: "/assets/media__1781157310632.jpg",
    title: "BUILDING HEALTHY NATION",
    subtitle: "A fitness community that values trust & wellness."
  }
];

// Classes Data
const featuredClasses = [
  {
    id: 1,
    title: "Strength & Hypertrophy",
    desc: "Target muscle growth and master biomechanics using premium free-weights and plates.",
    duration: "60 mins",
    intensity: "High",
    trainer: "Coach Hamza",
    image: "/assets/media__1781157310608.jpg",
    slug: "strength-training"
  },
  {
    id: 2,
    title: "High-Intensity Interval Training (HIIT)",
    desc: "Burn maximum calories in minimal time with full-throttle metabolic circuits.",
    duration: "45 mins",
    intensity: "Extreme",
    trainer: "Coach Sarah",
    image: "/assets/media__1781157310645.jpg",
    slug: "hiit"
  },
  {
    id: 3,
    title: "Cardio Endurance & Core",
    desc: "Boost lung capacity and sculpt your core on our world-class cardio decks.",
    duration: "50 mins",
    intensity: "Medium",
    trainer: "Coach Ali",
    image: "/assets/media__1781157310618.jpg",
    slug: "cardio-training"
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Kamran Shah",
    role: "Businessman & Father",
    text: "Chain of Get Smart Gym has completely changed how my family stays active. Having a separate, highly professional family environment combined with gold-standard machines at such an affordable price is a blessing in Karachi.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Ayesha Rehman",
    role: "Clinical Nutritionist",
    text: "I highly recommend Get Smart Gym to my clients. The ambiance is exceptionally hygienic, the personal trainers are certified and knowledgeable, and their equipment helps prevent posture-related training injuries.",
    rating: 5
  },
  {
    id: 3,
    name: "Zainab Yusuf",
    role: "Powerlifter",
    text: "The free-weight arena and dumbbells range here are phenomenal. If you are serious about strength training and hypertrophy, the collection of heavy dumbbells and squat racks here will blow your mind.",
    rating: 5
  }
];

// Mock Instagram Posts
const instaPosts = [
  { id: 1, image: "/assets/media__1781157310608.jpg" },
  { id: 2, image: "/assets/media__1781157310645.jpg" },
  { id: 3, image: "/assets/media__1781157310618.jpg" },
  { id: 4, image: "/assets/media__1781157310632.jpg" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Auto-play Hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Images Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt="Get Smart Gym Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Golden Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-[#050507]/40 to-transparent" />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full glass-panel border-gold/30 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-outfit text-xs font-bold tracking-[0.25em] text-gold uppercase">
                Building Healthy Nation
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-outfit text-4xl sm:text-6xl lg:text-7.5xl font-black text-white leading-tight uppercase"
            >
              {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i} className={i === 1 || i === 2 ? "text-gold-gradient block sm:inline" : ""}>
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-zinc-300 text-lg sm:text-xl font-medium max-w-xl"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-4 w-full sm:w-auto"
            >
              <Link href="/membership" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gold-gradient text-black font-outfit text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-md glow-gold-hover hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/classes" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white font-outfit text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-md transition duration-300 flex items-center justify-center gap-2">
                  Explore Classes
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats Slider Overlay (Desktop) */}
        <div className="absolute bottom-12 left-0 right-0 z-20 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`text-left p-4 rounded-lg border transition-all duration-300 ${
                    currentSlide === idx
                      ? "glass-panel border-gold shadow-lg"
                      : "bg-black/40 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold font-outfit ${currentSlide === idx ? "text-gold" : "text-zinc-500"}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-sm font-bold font-outfit uppercase tracking-wider ${currentSlide === idx ? "text-white" : "text-zinc-400"}`}>
                      {slide.title.replace("YOUR ", "")}
                    </span>
                  </div>
                  <div className={`h-[2px] w-full mt-3 rounded-full ${currentSlide === idx ? "bg-gold" : "bg-zinc-800"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Banner */}
      <section className="bg-[#0c0c0e] border-y border-white/5 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <AnimatedCounter end={15000} suffix="+" className="font-outfit text-4xl sm:text-5xl font-black text-gold-gradient" />
              <p className="text-zinc-400 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">Active Members</p>
            </div>
            
            <div className="flex flex-col items-center">
              <AnimatedCounter end={10} suffix="+" className="font-outfit text-4xl sm:text-5xl font-black text-gold-gradient" />
              <p className="text-zinc-400 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">Karachi Branches</p>
            </div>

            <div className="flex flex-col items-center">
              <AnimatedCounter end={50} suffix="+" className="font-outfit text-4xl sm:text-5xl font-black text-gold-gradient" />
              <p className="text-zinc-400 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">Certified Trainers</p>
            </div>

            <div className="flex flex-col items-center">
              <AnimatedCounter end={8000} suffix="+" className="font-outfit text-4xl sm:text-5xl font-black text-gold-gradient" />
              <p className="text-zinc-400 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">Happy Families</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Premium Fitness Standard</span>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase mt-2">
                WHAT SETS GET SMART GYM APART
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
              We combine elite biomechanical machines, premium fitness environments, and professional personal coaches, making them affordable and reliable for families.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Grid of features */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="glass-panel glass-panel-hover p-6 rounded-lg flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Advanced Biomechanics</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Train safely and efficiently with premium certified machines designed to target muscle fibers directly and reduce joint load.
                </p>
              </div>

              <div className="glass-panel glass-panel-hover p-6 rounded-lg flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Certified Coaches</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Our professional coaches are internationally certified, offering structured nutrition and training programs tailored to your goals.
                </p>
              </div>

              <div className="glass-panel glass-panel-hover p-6 rounded-lg flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Affordable Luxury</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Experience a million-dollar gym ambiance, high-end locker facilities, and premium interiors at accessible monthly rates.
                </p>
              </div>

              <div className="glass-panel glass-panel-hover p-6 rounded-lg flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Family Oriented</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Dedicated time slots and inclusive workout options that provide a safe, respectful, and motivating environment for your family.
                </p>
              </div>

            </div>

            {/* Showcase Image */}
            <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/media__1781157310645.jpg"
                alt="Get Smart Gym Dumbbell Rack"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
              
              {/* Motto Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel border-gold/30 rounded-lg">
                <p className="text-xs font-semibold text-gold tracking-widest uppercase">Our Core philosophy</p>
                <h4 className="font-outfit text-white font-bold text-lg uppercase mt-1">"Building Healthy Nation"</h4>
                <p className="text-zinc-400 text-xs mt-1">We believe premium health and strength is a fundamental right for every family in Pakistan.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-24 bg-[#0c0c0e] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Structured Training Programs</span>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase mt-2">
                POPULAR WORKOUT CLASSES
              </h2>
            </div>
            <Link href="/classes">
              <button className="text-gold hover:text-white font-outfit text-sm font-bold tracking-wide uppercase flex items-center gap-2 group transition-colors">
                View All Classes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredClasses.map((item) => (
              <div key={item.id} className="glass-panel rounded-lg overflow-hidden flex flex-col h-full border border-white/5 hover:border-gold/30 transition-all duration-300 group shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] to-transparent" />
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-gold text-xs font-bold uppercase tracking-wider">
                    {item.intensity} Intensity
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-white uppercase group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold" />
                      {item.duration}
                    </span>
                    <span>{item.trainer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-24 bg-[#050507] relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Premium Spaces</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase mt-2">
              WORLD-CLASS GYM FACILITIES
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Step into a premium workout space engineered for focus, hygiene, and peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="relative h-80 rounded-lg overflow-hidden border border-white/10 group shadow-lg">
              <Image
                src="/assets/media__1781157310608.jpg"
                alt="Strength Arena"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Strength Arena</h3>
                <p className="text-zinc-400 text-xs mt-1">Olympic squat racks, heavy dumbells up to 100lbs, and plate-loaded plate machines.</p>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden border border-white/10 group shadow-lg">
              <Image
                src="/assets/media__1781157310618.jpg"
                alt="Cardio Deck"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Cardio Zone</h3>
                <p className="text-zinc-400 text-xs mt-1">Equipped with touch-screen treadmills, stationary exercise bikes, and stepmills.</p>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden border border-white/10 group shadow-lg">
              <Image
                src="/assets/media__1781157310632.jpg"
                alt="Sauna Room"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Steam & Sauna</h3>
                <p className="text-zinc-400 text-xs mt-1">Separate luxury steam baths and traditional saunas for post-workout recovery.</p>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden border border-white/10 group shadow-lg">
              <Image
                src="/assets/media__1781157310645.jpg"
                alt="Locker & Shower"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-outfit text-lg font-bold text-white uppercase">Locker Rooms</h3>
                <p className="text-zinc-400 text-xs mt-1">Biometric lockers, clean hot shower facilities, and premium vanity spaces.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0c0c0e] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Testimonials</span>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase">
                WHAT OUR FAMILIES SAY
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mt-2">
                We are proud to serve over 15,000 active members in Karachi. Read how Get Smart Gym is helping them accomplish their fitness milestones safely and affordably.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 text-white flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 text-white flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                {/* Decorative background quotes */}
                <span className="absolute -top-12 -left-6 font-outfit text-gold/10 font-bold text-[120px] leading-none pointer-events-none select-none">
                  “
                </span>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIdx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel p-8 sm:p-10 rounded-lg flex flex-col gap-6 shadow-xl relative z-10"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>

                    <p className="text-zinc-300 text-base sm:text-lg italic leading-relaxed">
                      "{testimonials[testimonialIdx].text}"
                    </p>

                    <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-outfit text-white font-bold uppercase tracking-wider text-base">
                          {testimonials[testimonialIdx].name}
                        </h4>
                        <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-0.5">
                          {testimonials[testimonialIdx].role}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 font-bold text-sm">
                        {testimonials[testimonialIdx].name.charAt(0)}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-24 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Join Our Community</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase">
              FOLLOW US ON INSTAGRAM
            </h2>
            <p className="text-zinc-400 text-sm">
              Use our hashtag <span className="text-gold font-bold">#GetSmartGym</span> and get featured in our grid!
            </p>
            <div className="mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold text-white font-outfit text-sm font-bold tracking-wide uppercase px-6 py-2.5 rounded-md transition duration-300"
              >
                @getsmartgym.official
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instaPosts.map((post) => (
              <div key={post.id} className="relative h-64 md:h-72 rounded-lg overflow-hidden border border-white/10 group shadow-md">
                <Image
                  src={post.image}
                  alt="Get Smart Gym Social Shot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <span className="font-outfit text-sm font-bold text-gold uppercase tracking-wider">
                    View Post
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section className="relative py-24 overflow-hidden bg-black text-center">
        {/* Background Image tint */}
        <div className="absolute inset-0 w-full h-full opacity-35">
          <Image
            src="/assets/media__1781157310632.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gold/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
          <span className="text-gold font-outfit text-sm font-bold tracking-[0.25em] uppercase">Ready to Start?</span>
          <h2 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase leading-tight">
            BECOME A PART OF THE <span className="text-gold-gradient">FIT NATION</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Take the first step toward a healthier lifestyle. Visit one of our branches today for a free assessment and guided facilities tour.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/membership" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gold-gradient text-black font-outfit text-base font-bold tracking-wide uppercase px-10 py-4 rounded-md glow-gold-hover hover:scale-105 transition duration-300">
                Choose Membership
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white font-outfit text-base font-bold tracking-wide uppercase px-10 py-4 rounded-md transition duration-300">
                Contact Office
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
