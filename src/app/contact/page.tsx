"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Gulshan Branch",
    subject: "Membership Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          branch: "Gulshan Branch",
          subject: "Membership Inquiry",
          message: ""
        });
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/assets/media__1781157310632.jpg"
            alt="Contact Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-outfit text-xs font-bold tracking-[0.25em] uppercase">Get in Touch</span>
          <h1 className="font-outfit text-4xl sm:text-6xl font-black text-white uppercase mt-3">
            CONTACT OUR OFFICE
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Have questions about timings, facilities, or corporate packages? Send us a message or visit an office today.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Col: Contact coordinates */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Connect Instantly</span>
                  <h2 className="font-outfit text-2xl sm:text-3.5xl font-black text-white uppercase mt-1">
                    CONTACT INFORMATION
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  
                  <div className="glass-panel p-5 rounded-lg border border-white/5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-white">Headquarters Address</h4>
                      <p className="text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
                        Main University Road, Block 13-C, Gulshan-e-Iqbal, Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-lg border border-white/5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-white">Call Centre</h4>
                      <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                        Phone: <a href="tel:+923001234567" className="text-zinc-300 hover:text-gold transition-colors">+92 300 1234567</a>
                      </p>
                      <p className="text-zinc-500 text-xs mt-0.5">Corporate landline: +92 21 34567891</p>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-lg border border-white/5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-white">Email Correspondence</h4>
                      <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                        General: <a href="mailto:info@chainofgetsmartgym.com" className="text-zinc-300 hover:text-gold transition-colors">info@chainofgetsmartgym.com</a>
                      </p>
                      <p className="text-zinc-500 text-xs mt-0.5">Complaints: support@chainofgetsmartgym.com</p>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-lg border border-white/5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-white">Business Hours</h4>
                      <p className="text-zinc-400 text-xs mt-1">
                        <strong>Mon - Sat:</strong> 06:00 AM - 11:00 PM
                      </p>
                      <p className="text-zinc-400 text-xs mt-0.5">
                        <strong>Sunday:</strong> 09:00 AM - 06:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Chat on WhatsApp trigger */}
              <a
                href="https://wa.me/923001234567?text=Hi!%20I%20have%20an%20inquiry%20regarding%20Get%20Smart%20Gym."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-outfit text-sm font-bold tracking-wider uppercase py-4 rounded-md text-center flex items-center justify-center gap-2 hover:opacity-95 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                Chat On WhatsApp
              </a>

            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 sm:p-10 rounded-lg border border-white/5 shadow-2xl h-full flex flex-col justify-center">
                
                {submitted ? (
                  <div className="text-center py-12 flex flex-col items-center gap-4 animate-fade-in">
                    <CheckCircle2 className="w-16 h-16 text-gold fill-gold/10 animate-bounce" />
                    <h3 className="font-outfit text-3xl font-black text-white uppercase mt-2">Message Sent!</h3>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Chain of Get Smart Gym. Your message has been sent to our customer care desk. We will respond via email (<span className="text-white font-semibold">{formData.email}</span>) or call you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8 flex flex-col gap-2">
                      <span className="text-gold font-outfit text-xs font-bold tracking-[0.2em] uppercase">Write to Us</span>
                      <h3 className="font-outfit text-xl sm:text-2.5xl font-black text-white uppercase">
                        LEAD ENQUIRY FORM
                      </h3>
                      <p className="text-zinc-500 text-xs">
                        Use this form to submit corporate contracts, membership suggestions, or trainer inquiries.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hanzala Kamran"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gold placeholder:text-zinc-700 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 03001234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gold placeholder:text-zinc-700 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. client@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gold placeholder:text-zinc-700 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Target Branch</label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="Gulshan Branch">Gulshan Branch</option>
                          <option value="Clifton Branch">Clifton Branch</option>
                          <option value="DHA Phase 6 Branch">DHA Phase 6 Branch</option>
                          <option value="Nazimabad Branch">Nazimabad Branch</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="Membership Inquiry">Membership Inquiry</option>
                          <option value="Personal Trainer Inquiry">Personal Trainer Inquiry</option>
                          <option value="Corporate / Family Packages">Corporate / Family Packages</option>
                          <option value="Complaints / Suggestions">Complaints / Suggestions</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Message Details</label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please write details of your enquiry..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-zinc-950 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gold placeholder:text-zinc-700 transition-colors resize-none"
                        />
                      </div>

                      <div className="sm:col-span-2 mt-2">
                        <button
                          type="submit"
                          className="w-full bg-gold-gradient text-black font-outfit text-xs font-bold uppercase tracking-wider py-3.5 rounded glow-gold-hover hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                        >
                          Submit Message
                          <Send className="w-4 h-4" />
                        </button>
                      </div>

                    </form>
                  </>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Styled Google Maps Embed for HQ */}
      <section className="h-96 relative border-t border-white/10 bg-zinc-950">
        <iframe
          title="Get Smart Gym HQ Karachi Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3297621415444!2d67.0858169!3d24.9089201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f21ef6551b9%3A0xa1969a531e21b0e2!2sUniversity%20Rd%2C%20Block%2013%20C%20Gulshan-e-Iqbal%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full grayscale invert opacity-75"
        />
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
