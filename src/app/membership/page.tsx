"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X, ShieldCheck, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const plans = [
  {
    name: "Monthly Basic",
    price: "3,500",
    period: "month",
    desc: "Perfect for quick workouts and standard strength training.",
    features: [
      "Access to Strength Arena",
      "Standard Locker Access",
      "Bio-metric Verification",
      "Free Wifi",
      "Basic Trainer Support"
    ],
    nonFeatures: [
      "Access to Cardio Zone",
      "Steam & Sauna Access",
      "Monthly Body Composition",
      "Guest Passes",
      "Free Locker Rental"
    ],
    popular: false,
    cta: "Inquire Basic"
  },
  {
    name: "Quarterly Standard",
    price: "9,000",
    period: "3 months",
    desc: "Ideal for steady progress with weight and cardiac training.",
    features: [
      "Access to Strength Arena",
      "Access to Cardio Zone",
      "Standard Locker Access",
      "Bio-metric Verification",
      "Free Wifi",
      "2 Trainer Fitness Assessments",
      "Monthly Body Composition"
    ],
    nonFeatures: [
      "Steam & Sauna Access",
      "Guest Passes",
      "Free Locker Rental"
    ],
    popular: false,
    cta: "Inquire Standard"
  },
  {
    name: "Half Yearly Premium",
    price: "16,000",
    period: "6 months",
    desc: "Comprehensive fitness regimen with recovery benefits.",
    features: [
      "Access to Strength Arena",
      "Access to Cardio Zone",
      "Standard Locker Access",
      "Bio-metric Verification",
      "Free Wifi",
      "4 Trainer Fitness Assessments",
      "Monthly Body Composition",
      "Steam & Sauna Access",
      "2 Monthly Guest Passes"
    ],
    nonFeatures: [
      "Free Dedicated Locker Rental"
    ],
    popular: false,
    cta: "Inquire Premium"
  },
  {
    name: "Yearly Elite",
    price: "28,000",
    period: "year",
    desc: "Unbeatable value. Ultimate access and family perks.",
    features: [
      "Access to Strength Arena",
      "Access to Cardio Zone",
      "Standard Locker Access",
      "Bio-metric Verification",
      "Free Wifi",
      "Unlimited Fitness Assessments",
      "Weekly Body Composition",
      "Steam & Sauna Access",
      "5 Monthly Guest Passes",
      "Free Dedicated Locker Rental",
      "10% Discount on Online Store"
    ],
    nonFeatures: [],
    popular: true,
    cta: "Inquire Elite"
  }
];

const compareTable = [
  { feature: "Strength Arena Access", basic: true, standard: true, premium: true, elite: true },
  { feature: "Cardio Zone Access", basic: false, standard: true, premium: true, elite: true },
  { feature: "Bio-metric Gym Access", basic: true, standard: true, premium: true, elite: true },
  { feature: "Standard Lockers / Showers", basic: true, standard: true, premium: true, elite: true },
  { feature: "Steam & Sauna Access", basic: false, basicNote: "PKR 500/session", standard: false, standardNote: "PKR 300/session", premium: true, elite: true },
  { feature: "Trainer Fitness Assessments", basic: false, standard: "2 Assessments", premium: "4 Assessments", elite: "Unlimited" },
  { feature: "Body Composition Analysis", basic: false, standard: "Monthly", premium: "Monthly", elite: "Weekly" },
  { feature: "Guest Passes (Monthly)", basic: 0, standard: 0, premium: 2, elite: 5 },
  { feature: "Dedicated Locker Rental", basic: false, standard: false, premium: false, elite: true },
  { feature: "Store Product Discount", basic: "None", standard: "None", premium: "5% Off", elite: "10% Off" },
];

export default function Membership() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Gulshan Branch",
    plan: "Yearly Elite",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          branch: "Gulshan Branch",
          plan: "Yearly Elite",
          message: ""
        });
      }, 5000);
    }
  };

  const selectPlanForInquiry = (planName: string) => {
    setFormData((prev) => ({ ...prev, plan: planName }));
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310618.jpg"
            alt="Membership Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Join the Nation</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            MEMBERSHIP PLANS
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Choose a plan that matches your schedule and objectives. We make fitness high-quality, professional, and affordable.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-panel rounded-lg p-8 flex flex-col justify-between border relative transition-all duration-300 shadow-xl ${
                  plan.popular
                    ? "border-gold bg-gold/[0.03] scale-105 md:scale-105 z-10 shadow-gold/5"
                    : "border-white/5 hover:border-white/20 hover:scale-[1.02]"
                }`}
              >
                {/* Popular Banner */}
                {plan.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gold-gradient text-black text-[10px] font-outfit font-black tracking-widest uppercase py-1 px-4 rounded-full shadow-lg">
                    Best Value
                  </div>
                )}

                <div>
                  <h3 className="font-outfit text-xl font-bold text-white uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed min-h-8">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline">
                    <span className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">PKR</span>
                    <span className="font-outfit text-4xl sm:text-5xl font-black text-white ml-1.5">
                      {plan.price}
                    </span>
                    <span className="text-zinc-500 text-xs lowercase ml-1.5">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="mt-8 flex flex-col gap-3.5">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {plan.nonFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-zinc-500 line-through decoration-zinc-700">
                        <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => selectPlanForInquiry(plan.name)}
                    className={`w-full font-outfit text-xs sm:text-sm font-bold tracking-wider uppercase py-3 rounded-md transition duration-300 cursor-pointer ${
                      plan.popular
                        ? "bg-gold-gradient text-black glow-gold-hover hover:opacity-95"
                        : "bg-zinc-900 border border-white/10 text-white hover:border-gold hover:text-gold"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#0c0c0e] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Deep Comparison</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white uppercase mt-2">
              COMPARE MEMBERSHIP PERKS
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Review access scopes, guest allowances, and discounts across all four membership plans.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-white/5 glass-panel">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-950/60 border-b border-white/5 font-outfit font-bold uppercase tracking-wider text-white">
                  <th className="p-5">Feature</th>
                  <th className="p-5 text-center">Basic</th>
                  <th className="p-5 text-center">Standard</th>
                  <th className="p-5 text-center">Premium</th>
                  <th className="p-5 text-center text-gold">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-medium text-zinc-300">
                {compareTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 font-semibold text-white">{row.feature}</td>
                    
                    {/* Basic */}
                    <td className="p-5 text-center">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? <Check className="w-5 h-5 text-gold mx-auto" /> : (
                          row.basicNote ? <span className="text-zinc-500 text-xs italic">{row.basicNote}</span> : <X className="w-5 h-5 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs">{row.basic}</span>
                      )}
                    </td>

                    {/* Standard */}
                    <td className="p-5 text-center">
                      {typeof row.standard === "boolean" ? (
                        row.standard ? <Check className="w-5 h-5 text-gold mx-auto" /> : (
                          row.standardNote ? <span className="text-zinc-500 text-xs italic">{row.standardNote}</span> : <X className="w-5 h-5 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs">{row.standard}</span>
                      )}
                    </td>

                    {/* Premium */}
                    <td className="p-5 text-center">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? <Check className="w-5 h-5 text-gold mx-auto" /> : <X className="w-5 h-5 text-zinc-600 mx-auto" />
                      ) : (
                        <span className="text-xs">{row.premium}</span>
                      )}
                    </td>

                    {/* Elite */}
                    <td className="p-5 text-center text-gold font-bold">
                      {typeof row.elite === "boolean" ? (
                        row.elite ? <Check className="w-5 h-5 text-gold mx-auto" /> : <X className="w-5 h-5 text-zinc-600 mx-auto" />
                      ) : (
                        <span className="text-xs">{row.elite}</span>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Online Inquiry Form */}
      <section id="inquiry-form" className="py-24 bg-[#050507] relative scroll-mt-20">
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="glass-panel p-8 sm:p-12 rounded-lg border border-white/5 shadow-2xl relative overflow-hidden">
            
            {/* Form Success State */}
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-gold fill-gold/10" />
                <h3 className="font-outfit text-3xl font-black text-white uppercase tracking-wide mt-2">
                  Inquiry Received!
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in Get Smart Gym. Our membership coordinator will contact you at <span className="text-gold font-bold">{formData.phone}</span> within 24 hours to schedule your biometric verification and gym tour.
                </p>
                <div className="w-full bg-zinc-800/40 border border-white/5 p-4 rounded text-left mt-6 text-xs text-zinc-400">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Selected Plan:</strong> {formData.plan}</p>
                  <p><strong>Preferred Branch:</strong> {formData.branch}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8 flex flex-col gap-2">
                  <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Start Today</span>
                  <h2 className="font-outfit text-2xl sm:text-4xl font-black text-white uppercase">
                    ONLINE MEMBERSHIP INQUIRY
                  </h2>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Submit your details below, and our team will get in touch to set up your membership.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hanzala Kamran"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 03001234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Preferred Branch */}
                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Preferred Branch</label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Gulshan Branch">Gulshan Branch (Karachi)</option>
                      <option value="Clifton Branch">Clifton Branch (Karachi)</option>
                      <option value="DHA Phase 6 Branch">DHA Phase 6 Branch (Karachi)</option>
                      <option value="Nazimabad Branch">Nazimabad Branch (Karachi)</option>
                    </select>
                  </div>

                  {/* Selected Plan */}
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Selected Plan</label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Monthly Basic">Monthly Basic — PKR 3,500/mo</option>
                      <option value="Quarterly Standard">Quarterly Standard — PKR 9,000/3-mo</option>
                      <option value="Half Yearly Premium">Half Yearly Premium — PKR 16,000/6-mo</option>
                      <option value="Yearly Elite">Yearly Elite — PKR 28,000/yr</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Additional Message (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Share details about your fitness background, health targets, or preferred slots."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold placeholder:text-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2 mt-4">
                    <button
                      type="submit"
                      className="w-full bg-gold-gradient text-black font-outfit text-sm font-bold tracking-wider uppercase py-4 rounded glow-gold-hover hover:opacity-95 transition-all flex items-center justify-center gap-2"
                    >
                      Submit Member Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              </>
            )}

          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
