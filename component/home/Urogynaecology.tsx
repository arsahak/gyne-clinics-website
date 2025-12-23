"use client";

import { ScrollMotion } from "@/component/motion"; // Assuming this is your path
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity, // For Prolapse/Support
  ArrowRight,
  ChevronDown, // For Diagnostics
  Droplets, // For Incontinence
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Urogynaecology = () => {
  const [activeTab, setActiveTab] = useState(0);

  // 1. Data Structure organized for Clarity
  const treatments = [
    {
      id: 1,
      title: "Urinary Incontinence",
      icon: Droplets,
      shortDesc: "Solutions for leaking & bladder control.",
      content:
        "We treat Stress Incontinence (leaking when coughing) and Urge Incontinence (overactive bladder) using non-invasive physio, medication, or precise surgical slings.",
      link: "/services/incontinence",
    },
    {
      id: 2,
      title: "Prolapse Management",
      icon: ShieldCheck,
      shortDesc: "Restoring pelvic floor support.",
      content:
        "Feel confident again. We offer expert pessary fittings for immediate relief and reconstructive surgery to repair pelvic organ prolapse.",
      link: "/services/prolapse",
    },
    {
      id: 3,
      title: "Urodynamics & Diagnostics",
      icon: Activity,
      shortDesc: "Advanced in-house bladder testing.",
      content:
        "Our clinic features a state-of-the-art Urodynamics suite. We measure bladder function precisely to ensure you get the *right* treatment the first time.",
      link: "/services/diagnostics",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT COLUMN: Visuals (Image + Floating Badge) */}
          {/* Swapped to Left to alternate rhythm from your Welcome Section */}
          <div className="lg:w-1/2 relative order-1">
            <ScrollMotion
              animation="scaleIn"
              duration={0.5}
              className="relative z-10"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white w-full aspect-[4/5] md:aspect-square">
                <Image
                  src="/assets/home/clinic.jpg" // Replace with image of doctor talking to patient or calming medical visual
                  alt="Urogynaecology Consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Floating Badge (Brand Pattern) */}
              <div className="absolute -bottom-8 -right-6 bg-white p-5 rounded-xl shadow-xl border-l-4 border-secondary max-w-[240px] hidden md:block">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                      <Stethoscope size={20} />
                    </div>
                    <span className="font-bold text-primary text-sm leading-tight">
                      In-House <br /> Diagnostics
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 pl-1">
                    Complete Urodynamic testing available on-site.
                  </p>
                </div>
              </div>
            </ScrollMotion>

            {/* Decorative Blobs */}
            <div className="absolute top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* RIGHT COLUMN: Content & Interactive Accordion */}
          <div className="lg:w-1/2 order-2">
            <ScrollMotion animation="fadeInRight" duration={0.5}>
              {/* Brand Header Style */}
              <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
                Restoring Confidence
              </h4>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Urogynaecology & <br />
                <span className="text-secondary italic font-serif">
                  Bladder Health
                </span>
              </h2>

              <div className="prose prose-lg text-gray-500 mb-8">
                <p>
                  Bladder issues are common, but they shouldn't control your
                  life. We combine compassionate care with advanced technology
                  to diagnose and treat incontinence and prolapse effectively.
                </p>
              </div>

              {/* Interactive List (Styled like your Features Grid but collapsible) */}
              <div className="flex flex-col gap-4 mb-8">
                {treatments.map((item, index) => (
                  <div
                    key={item.id}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      activeTab === index
                        ? "bg-white border-secondary/30 shadow-lg"
                        : "bg-white border-transparent hover:border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => setActiveTab(index)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-2 rounded-lg shrink-0 transition-colors ${
                            activeTab === index
                              ? "bg-primary text-white"
                              : "bg-primary/5 text-primary"
                          }`}
                        >
                          <item.icon size={22} />
                        </div>
                        <div>
                          <h5
                            className={`font-bold text-sm ${
                              activeTab === index
                                ? "text-primary"
                                : "text-gray-700"
                            }`}
                          >
                            {item.title}
                          </h5>
                          {activeTab !== index && (
                            <p className="text-xs text-gray-400 mt-0.5">
                              {item.shortDesc}
                            </p>
                          )}
                        </div>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform duration-300 ${
                          activeTab === index ? "rotate-180 text-secondary" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeTab === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 pl-[4.5rem]">
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                              {item.content}
                            </p>
                            <Link
                              href={item.link}
                              className="inline-flex items-center text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-wide"
                            >
                              Learn More{" "}
                              <ArrowRight size={14} className="ml-2" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-[#1a3a5e] transition-all shadow-lg hover:shadow-xl text-sm"
              >
                Book a Private Consultation
              </Link>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urogynaecology;
