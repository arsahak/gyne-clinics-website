"use client";
import { ScrollMotion } from "@/component/motion";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Clock,
  Gem,
  Scissors,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const aestheticData = {
  nonSurgical: [
    {
      title: "Laser Rejuvenation",
      desc: "FDA-approved CO2 laser therapy for vaginal tightening and tissue regeneration",
      time: "15 mins",
      recovery: "No downtime",
    },
    {
      title: "O-Shot (PRP)",
      desc: "Platelet-Rich Plasma therapy to enhance sensitivity and natural lubrication",
      time: "30 mins",
      recovery: "Immediate return",
    },
    {
      title: "Intimate Fillers",
      desc: "Medical-grade hyaluronic acid for labial augmentation and G-spot enhancement",
      time: "20 mins",
      recovery: "Minimal swelling",
    },
  ],
  surgical: [
    {
      title: "Labiaplasty",
      desc: "Precision surgical reshaping of labia minora/majora using advanced techniques",
      time: "1-2 hours",
      recovery: "1-2 weeks",
    },
    {
      title: "Vaginoplasty",
      desc: "Surgical reconstruction and tightening of vaginal canal for enhanced function",
      time: "2-3 hours",
      recovery: "4-6 weeks",
    },
    {
      title: "Mons Pubis Liposuction",
      desc: "Targeted fat removal to create a flatter, more contoured pubic profile",
      time: "1 hour",
      recovery: "3-5 days",
    },
  ],
};

const AestheticSection = () => {
  const [activeMode, setActiveMode] = useState<"nonSurgical" | "surgical">("nonSurgical");
  const treatments = aestheticData[activeMode];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Header */}
        <ScrollMotion animation="fadeInUp">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
              <Gem className="text-secondary" size={16} />
              <span className="text-xs font-bold text-secondary uppercase tracking-wide">
                Aesthetic Gynaecology
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Intimate <span className="text-secondary italic">Wellness</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              From advanced laser rejuvenation to precision surgical reconstruction
            </p>

            {/* Toggle Switch - Centered & Prominent */}
            <div className="inline-flex bg-gray-100 p-2 rounded-full shadow-inner">
              <motion.div className="relative flex">
                <button
                  onClick={() => setActiveMode("nonSurgical")}
                  className={`relative px-8 py-3 rounded-full font-bold text-sm transition-all z-10 ${
                    activeMode === "nonSurgical"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Zap className="inline w-4 h-4 mr-2" />
                  Non-Surgical
                </button>
                <button
                  onClick={() => setActiveMode("surgical")}
                  className={`relative px-8 py-3 rounded-full font-bold text-sm transition-all z-10 ${
                    activeMode === "surgical"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Scissors className="inline w-4 h-4 mr-2" />
                  Surgical
                </button>

                {/* Moving background */}
                <motion.div
                  className="absolute top-0 h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg"
                  animate={{
                    left: activeMode === "nonSurgical" ? "0" : "50%",
                    width: "50%",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
            </div>
          </div>
        </ScrollMotion>

        {/* Treatment Cards - Staggered Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {treatments.map((treatment, idx) => (
                <ScrollMotion key={idx} animation="slideUp" delay={idx * 0.1}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-t-4 border-secondary">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                        {activeMode === "nonSurgical" ? (
                          <Sparkles className="text-secondary group-hover:text-white" size={24} />
                        ) : (
                          <Scissors className="text-secondary group-hover:text-white" size={24} />
                        )}
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <div className="flex items-center gap-1 justify-end mb-1">
                          <Clock size={12} />
                          {treatment.time}
                        </div>
                        <span className="font-semibold text-blue-600">{treatment.recovery}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">{treatment.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{treatment.desc}</p>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* AI Assessment Banner */}
        <ScrollMotion animation="fadeInUp">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center text-white">
                  <Bot size={40} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  AI Aesthetic Assessment
                </h3>
                <p className="text-gray-600 mb-4">
                  Not sure which treatment is right for you? Take our confidential 3-minute assessment for personalized recommendations
                </p>
                <button className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2">
                  Start Free Assessment <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollMotion>

        {/* CTA Buttons */}
        <ScrollMotion animation="fadeInUp" delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/aesthetic-gynaecology"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-primary text-white rounded-full font-bold shadow-lg transition-all"
            >
              Explore All Treatments
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all"
            >
              View Before & After Gallery
              <Gem size={18} />
            </Link>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default AestheticSection;
