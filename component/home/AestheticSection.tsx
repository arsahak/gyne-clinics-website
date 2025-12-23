"use client";
import { ScrollMotion } from "@/component/motion";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Gem,
  Scissors,
  Sparkles, // CHANGED: Replaced 'Scalpel' with 'Scissors' to fix build error
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// 1. DATA SPLIT (Surgical vs Non-Surgical)
const aestheticData = {
  nonSurgical: {
    label: "Non-Surgical",
    subLabel: "Non-Invasive & Laser",
    icon: Zap,
    description:
      "Rejuvenate with zero downtime. Our 'lunchtime treatments' use advanced laser and PRP technology to restore function and appearance instantly.",
    treatments: [
      {
        title: "Laser Rejuvenation",
        desc: "The 'Juliet' Laser treatment for tightness, dryness, and mild incontinence.",
        downtime: "No Downtime",
        tags: ["Pain-Free", "15 Mins"],
      },
      {
        title: "O-Shot (PRP)",
        desc: "Platelet Rich Plasma therapy to boost sensitivity and tissue health.",
        downtime: "Immediate Return",
        tags: ["Natural", "Regenerative"],
      },
      {
        title: "Intimate Fillers",
        desc: "Hyaluronic acid injections for aesthetic plumping and hydration.",
        downtime: "Minimal Swelling",
        tags: ["Instant Result", "Sculpting"],
      },
      {
        title: "Whitening & Peels",
        desc: "Specialized chemical and laser protocols for skin lightening.",
        downtime: "No Downtime",
        tags: ["Brightening", "Safe"],
      },
    ],
  },
  surgical: {
    label: "Surgical",
    subLabel: "Permanent Sculpture",
    icon: Scissors, // CHANGED: Updated usage here
    description:
      "Permanent results for body contouring. Our expert surgeons specialize in functional and aesthetic restructuring for life-long confidence.",
    treatments: [
      {
        title: "Labiaplasty",
        desc: "Reshaping and reducing the size of the labia minora for comfort.",
        downtime: "1-2 Weeks",
        tags: ["Permanent", "Precision"],
      },
      {
        title: "Vaginoplasty",
        desc: "Surgical tightening of the vaginal canal to restore muscle tone.",
        downtime: "4-6 Weeks",
        tags: ["Restorative", "Functional"],
      },
      {
        title: "Hoodectomy",
        desc: "Reduction of the clitoral hood to improve aesthetics and sensation.",
        downtime: "1 Week",
        tags: ["Sensitivity", "Refinement"],
      },
      {
        title: "Liposuction (Mons)",
        desc: "Targeted fat removal from the pubic mound for a flatter profile.",
        downtime: "3-5 Days",
        tags: ["Contour", "Shape"],
      },
    ],
  },
};

const AestheticSection = () => {
  const [activeMode, setActiveMode] = useState<"nonSurgical" | "surgical">(
    "nonSurgical"
  );
  const activeData = aestheticData[activeMode];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor: Elegant Curves */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 1. Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollMotion animation="fadeInDown">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
              <Gem size={14} /> GynaeCosmetics
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
              Aesthetic{" "}
              <span className="text-secondary italic font-serif">
                Gynaecology
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              Choosing between rapid rejuvenation and permanent restructuring.
              Toggle below to explore our specialized approaches.
            </p>
          </ScrollMotion>
        </div>

        {/* 2. THE TOGGLE SWITCH (The "Beauty Switch") */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-full inline-flex relative shadow-inner">
            {/* The Moving Background Pill */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 bg-white rounded-full shadow-md z-0"
              initial={false}
              animate={{
                left: activeMode === "nonSurgical" ? "6px" : "50%",
                width: "calc(50% - 9px)",
                x: activeMode === "nonSurgical" ? 0 : 3,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Buttons */}
            {["nonSurgical", "surgical"].map((mode) => (
              <button
                key={mode}
                onClick={() =>
                  setActiveMode(mode as "nonSurgical" | "surgical")
                }
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 min-w-[160px] flex items-center justify-center gap-2 ${
                  activeMode === mode
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {/* CHANGED: Updated usage here */}
                {mode === "nonSurgical" ? (
                  <Zap size={16} />
                ) : (
                  <Scissors size={16} />
                )}
                {mode === "nonSurgical" ? "Non-Surgical" : "Surgical"}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Dynamic Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Section Intro */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
                {activeData.label} Solutions
                {activeMode === "surgical" && (
                  <span className="bg-red-50 text-red-500 text-[10px] px-2 py-1 rounded border border-red-100 uppercase">
                    Hospital Based
                  </span>
                )}
                {activeMode === "nonSurgical" && (
                  <span className="bg-green-50 text-green-600 text-[10px] px-2 py-1 rounded border border-green-100 uppercase">
                    Clinic Based
                  </span>
                )}
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                {activeData.description}
              </p>
            </div>

            {/* Treatment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeData.treatments.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 flex flex-col"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-secondary/5 text-secondary rounded-xl group-hover:bg-secondary group-hover:text-white transition-colors">
                      {/* CHANGED: Updated usage here */}
                      {activeMode === "nonSurgical" ? (
                        <Sparkles size={20} />
                      ) : (
                        <Scissors size={20} />
                      )}
                    </div>
                    {/* Downtime Badge */}
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                      <Clock size={10} />
                      {item.downtime}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 mb-6">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-secondary bg-secondary/5 px-2 py-1 rounded border border-secondary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    href="/contact"
                    className="mt-auto flex items-center text-sm font-bold text-gray-400 group-hover:text-primary transition-colors"
                  >
                    Consult{" "}
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom Gallery Call-to-Action */}
            <div className="mt-12 flex justify-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-secondary/20 hover:bg-secondary transition-all"
              >
                <span>View Before & After Gallery</span>
                <div className="bg-white/20 rounded-full p-1">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AestheticSection;
