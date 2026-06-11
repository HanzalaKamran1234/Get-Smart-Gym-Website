"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ShieldCheck, Heart, Map, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const branches = [
  {
    id: "gulshan",
    name: "Gulshan Branch",
    address: "Main University Road, Block 13-C, Gulshan-e-Iqbal, Karachi",
    phone: "+92 21 34567891",
    timings: {
      weekdays: "06:00 AM - 11:00 PM",
      sunday: "09:00 AM - 06:00 PM"
    },
    facilities: [
      "Plate Loaded Area",
      "Cardio Deck",
      "Steam & Sauna Bath",
      "Biometric Lockers",
      "Dedicated Ladies Slot (11 AM - 3 PM)",
      "In-House Nutritionist"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3297621415444!2d67.0858169!3d24.9089201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f21ef6551b9%3A0xa1969a531e21b0e2!2sUniversity%20Rd%2C%20Block%2013%20C%20Gulshan-e-Iqbal%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
    image: "/assets/media__1781157310632.jpg"
  },
  {
    id: "clifton",
    name: "Clifton Branch",
    address: "Main Khayaban-e-Saadi, Block 5, Clifton (Near Boat Basin), Karachi",
    phone: "+92 21 35876541",
    timings: {
      weekdays: "06:00 AM - 11:00 PM",
      sunday: "09:00 AM - 06:00 PM"
    },
    facilities: [
      "Olympic Squat Racks",
      "Cardio Interval Zone",
      "Luxury Steam Bath",
      "Keyless Locker System",
      "Ladies Only Gym Section",
      "Valet Parking Available"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1432168953185!2d67.0315481!3d24.8247653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd99a0a2df3%3A0xe21262d98dc21b3f!2sClifton%20Block%205%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000001!5m2!1sen!2spk",
    image: "/assets/media__1781157310608.jpg"
  },
  {
    id: "dha",
    name: "DHA Phase 6 Branch",
    address: "Main Khayaban-e-Ittehad, Phase 6, DHA, Karachi",
    phone: "+92 21 35243121",
    timings: {
      weekdays: "06:00 AM - 11:00 PM",
      sunday: "09:00 AM - 06:00 PM"
    },
    facilities: [
      "Heavy Dumbell Range (up to 100 lbs)",
      "Premium Cardio Deck",
      "Traditional Finnish Sauna",
      "Premium Biometric Lockers",
      "Crossfit Circuit Arena",
      "Premium Juice Bar"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.905621415444!2d67.0628169!3d24.8089201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c5eef6551b9%3A0x62969a531e21b0e2!2sKhayaban-e-Ittehad%20Rd%2C%20Phase%206%20D.H.A.%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000002!5m2!1sen!2spk",
    image: "/assets/media__1781157310618.jpg"
  },
  {
    id: "nazimabad",
    name: "Nazimabad Branch",
    address: "Main Nawab Siddique Ali Khan Road, Block 3, Nazimabad, Karachi",
    phone: "+92 21 36612345",
    timings: {
      weekdays: "06:00 AM - 11:00 PM",
      sunday: "09:00 AM - 06:00 PM"
    },
    facilities: [
      "Plate Loaded Powerlifting Rack",
      "Treadmill Interval Deck",
      "Steam Recovery Room",
      "Shower & Changing Rooms",
      "Ladies Slot Available (12 PM - 3 PM)",
      "Affordable Family Packages"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0125432121345!2d67.0289121!3d24.919245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5651b9df23%3A0xd1969a531e21b0e2!2sBlock%203%20Nazimabad%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000003!5m2!1sen!2spk",
    image: "/assets/media__1781157310645.jpg"
  }
];

export default function Branches() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310632.jpg"
            alt="Branches Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Gym Locations</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            KARACHI BRANCHES
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Find a branch near you and start training with elite biomechanical machines and certified coaches.
          </p>
        </div>
      </section>

      {/* Map and Info split panel */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Branch Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-4 max-w-3xl mx-auto scrollbar-none">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBranch(b)}
                className={`px-6 py-2.5 rounded-md font-outfit text-xs sm:text-sm font-semibold uppercase tracking-wider border transition-all duration-200 shrink-0 cursor-pointer ${
                  activeBranch.id === b.id
                    ? "bg-gold-gradient text-black border-gold glow-gold"
                    : "bg-zinc-900 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Details & Map Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-lg border border-white/5 shadow-2xl gap-8">
              
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Active Branch</span>
                  <h2 className="font-outfit text-2xl sm:text-3xl font-black text-white uppercase mt-1">
                    {activeBranch.name}
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-zinc-300">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed">{activeBranch.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-300">
                    <Phone className="w-5 h-5 text-gold shrink-0" />
                    <a href={`tel:${activeBranch.phone.replace(/\s+/g, "")}`} className="text-xs sm:text-sm hover:text-gold transition-colors">
                      {activeBranch.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-zinc-300">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm flex flex-col">
                      <span><strong>Mon - Sat:</strong> {activeBranch.timings.weekdays}</span>
                      <span className="mt-1"><strong>Sunday:</strong> {activeBranch.timings.sunday}</span>
                    </div>
                  </div>
                </div>

                {/* Available Facilities list */}
                <div className="border-t border-white/5 pt-6">
                  <h3 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-gold" /> Branch Facilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeBranch.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                        <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/923001234567?text=Hi!%20I'd%20like%20to%20visit%20your%20Gulshan%20Branch."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold-gradient text-black font-outfit text-sm font-bold tracking-wider uppercase py-3.5 rounded-md text-center glow-gold-hover hover:opacity-95 transition-all"
              >
                Inquire For This Branch
              </a>

            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[450px] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <iframe
                title={`${activeBranch.name} Map Embed`}
                src={activeBranch.mapUrl}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale invert opacity-80"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="bg-black py-20 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <h2 className="font-outfit text-2xl sm:text-3xl font-black text-white uppercase">
            VISIT AN INFRASTRUCTURE NEAR YOU
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
            All branches are fully air-conditioned, feature modern bio-mechanic machines, and offer separate locker and shower structures. Walk in for a trial today.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
