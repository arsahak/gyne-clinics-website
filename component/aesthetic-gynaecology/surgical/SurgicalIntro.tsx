"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRightLeft, CheckCircle2, Clock, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const SurgicalIntro = () => {
  const surgicalBenefits = [
    { icon: Shield, text: "Permanent results" },
    { icon: Sparkles, text: "Corrects structure/muscles" },
    { icon: CheckCircle2, text: "One-time procedure" },
    { icon: Clock, text: "1-2 weeks recovery" },
  ];

  const nonSurgicalLimits = [
    "Temporary/Maintenance",
    "Surface tightening only",
    "Multiple sessions needed",
    "Zero downtime",
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <ScrollMotion animation="fadeInLeft" duration={0.5}>
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full">
                  Why Surgical?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Why Choose a{" "}
                <span className="text-secondary italic font-serif">
                  Surgical Approach?
                </span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                <p>
                  While non-surgical treatments are excellent for rejuvenation,
                  they cannot correct significant structural changes. Surgical
                  Aesthetic Gynaecology is designed for women seeking a{" "}
                  <strong className="text-primary font-semibold">
                    permanent solution
                  </strong>{" "}
                  to physical discomfort or aesthetic concerns.
                </p>
                <p>
                  Whether it is reducing excess tissue that causes irritation
                  (Labioplasty) or tightening muscles after childbirth
                  (Vaginoplasty), these procedures offer immediate, lasting
                  results that non-invasive methods cannot achieve.
                </p>
              </div>

              <Link
                href="/aesthetic-gynaecology/non-surgical"
                className="inline-flex items-center gap-3 p-4 bg-secondary/10 border border-secondary/20 rounded-xl hover:bg-secondary/20 transition-all group"
              >
                <ArrowRightLeft className="text-secondary" size={20} />
                <div>
                  <p className="font-bold text-primary text-sm">
                    Looking for non-invasive options?
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-secondary transition-colors">
                    Switch to Non-Surgical →
                  </p>
                </div>
              </Link>
            </ScrollMotion>
          </div>

          {/* Comparison Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollMotion animation="scaleIn" duration={0.5} delay={0.2}>
              <div className="p-6 bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="text-secondary" size={24} />
                  <h3 className="font-bold text-xl">Surgical</h3>
                </div>
                <ul className="space-y-3">
                  {surgicalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <benefit.icon size={16} className="text-secondary shrink-0" />
                      <span className="text-white/90">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollMotion>

            <ScrollMotion animation="scaleIn" duration={0.5} delay={0.3}>
              <div className="p-6 bg-gray-50 text-gray-500 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Non-Surgical</h3>
                <ul className="space-y-3">
                  {nonSurgicalLimits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgicalIntro;
