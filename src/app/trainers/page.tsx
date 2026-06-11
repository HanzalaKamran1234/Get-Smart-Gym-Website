"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const trainers = [
  {
    id: 1,
    name: "Coach Hamza Shah",
    role: "Head Strength Coach",
    specialization: "Hypertrophy & Biomechanics",
    certs: ["ISSA Certified PT", "REPs Level 3 (UK)", "Bio-Mechanics Specialist"],
    experience: "8+ Years",
    image: "/assets/media__1781157310608.jpg",
    bio: "Hamza specializes in posture correction and mechanical muscle loading, helping clients gain lean muscle mass efficiently while avoiding joint injuries.",
    socials: {
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com",
      fb: "https://facebook.com"
    }
  },
  {
    id: 2,
    name: "Coach Sarah Khan",
    role: "Senior Female Trainer",
    specialization: "HIIT & Weight Loss Conditioning",
    certs: ["NASM Certified Trainer", "CrossFit Level 2 Coach", "Cardio Conditioning Spec."],
    experience: "6+ Years",
    image: "/assets/media__1781157310645.jpg",
    bio: "Sarah is a metabolic training expert who designs high-energy circuit and interval programs to maximize fat burning and core strength.",
    socials: {
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com",
      fb: "https://facebook.com"
    }
  },
  {
    id: 3,
    name: "Coach Ali Zaidi",
    role: "Cardio & Endurance Director",
    specialization: "Athletic Conditioning",
    certs: ["REPs Certified (L3)", "Olympic Lifting Specialist", "First Aid & CPR"],
    experience: "7+ Years",
    image: "/assets/media__1781157310618.jpg",
    bio: "Ali trains clients on respiratory endurance, oxygen volume optimization, and sports-performance conditioning to boost overall athletic capacity.",
    socials: {
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com",
      fb: "https://facebook.com"
    }
  },
  {
    id: 4,
    name: "Coach Zara Malik",
    role: "Nutrition & Health Specialist",
    specialization: "Fat Loss & Dietetics",
    certs: ["Degree in Human Nutrition", "ISSA Nutrition Specialist", "Certified Health Coach"],
    experience: "5+ Years",
    image: "/assets/media__1781157310608.jpg",
    bio: "Zara integrates custom macronutrient profiles and caloric targets with functional training to help families build sustainable fat loss outcomes.",
    socials: {
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com",
      fb: "https://facebook.com"
    }
  },
  {
    id: 5,
    name: "Coach Usman Butt",
    role: "Mobility & Recovery Lead",
    specialization: "Postural Correction & Rehab",
    certs: ["Physical Therapy (DPT)", "NASM Corrective Exercise Spec.", "FMS Level 1"],
    experience: "9+ Years",
    image: "/assets/media__1781157310618.jpg",
    bio: "Usman works on movement patterns, restoring joint ranges of motion, and pre-habilitation stretching to optimize athletic recovery.",
    socials: {
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com",
      fb: "https://facebook.com"
    }
  },
  {
    id: 6,
    name: "Coach Bilal Ahmed",
    role: "Cross Training Head",
    specialization: "Olympic Lifting & Power",
    certs: ["CrossFit Level 1", "USAW Weightlifting Coach", "Certified Strength Specialist"],
    experience: "6+ Years",
    image: "/assets/media__1781157310645.jpg",
    bio: "Bilal is an explosive power lifter who focuses on clean, snatch, and deadlift mechanics to unleash core strength and athletic power.",
    socials: {
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com",
      fb: "https://facebook.com"
    }
  }
];

export default function Trainers() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310645.jpg"
            alt="Trainers Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Expert Team</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            CERTIFIED FITNESS COACHES
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Train under the guidance of Karachi's most qualified, certified, and supportive fitness professionals.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((coach) => (
              <div key={coach.id} className="glass-panel rounded-lg overflow-hidden flex flex-col h-full border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-xl group">
                
                {/* Background image covering top */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />
                  
                  {/* Experience Tag */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/75 border border-white/10 text-gold text-xs font-bold uppercase tracking-wider">
                    {coach.experience} Exp
                  </div>

                  {/* Coach Name Overlay */}
                  <div className="absolute bottom-4 left-6">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest">{coach.role}</span>
                    <h3 className="font-outfit text-xl font-black text-white uppercase mt-0.5">
                      {coach.name}
                    </h3>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    
                    {/* Specialization */}
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-semibold">Specialization</span>
                      <span className="text-zinc-200 text-sm font-semibold mt-0.5 block">{coach.specialization}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {coach.bio}
                    </p>

                    {/* Certifications list */}
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-semibold mb-2">Certifications</span>
                      <div className="flex flex-col gap-1.5">
                        {coach.certs.map((cert, index) => (
                          <div key={index} className="flex items-center gap-2 text-zinc-300 text-xs">
                            <Award className="w-4 h-4 text-gold shrink-0" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Social links & contact */}
                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a
                        href={coach.socials.insta}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                        aria-label="Instagram Link"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </a>
                      <a
                        href={coach.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                        aria-label="LinkedIn Link"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect width="4" height="12" x="2" y="9"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </a>
                      <a
                        href={coach.socials.fb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                        aria-label="Facebook Link"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                      </a>
                    </div>

                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-white font-outfit text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      Hire Coach
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Advisory section */}
      <section className="bg-black py-16 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <h3 className="font-outfit text-xl font-bold text-white uppercase tracking-wider">
            Need Personal Guidance?
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            Our personal training programs include full health diagnostics, weekly body composition checks, and custom diet charts. Let us pair you with a trainer that matches your lifestyle.
          </p>
          <div className="mt-2">
            <Link href="/membership">
              <button className="bg-gold-gradient text-black font-outfit text-xs font-bold tracking-wide uppercase px-6 py-3 rounded-md glow-gold-hover hover:scale-105 transition duration-300">
                Inquire For Coach
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
