"use client";

import { ScrollMotion } from "@/component/motion";
import { Battery, Brain, Clock } from "lucide-react";

const symptoms = [
  {
    icon: Clock,
    label: "Perimenopause",
    desc: "Transitional phase characterized by irregular menstrual cycles and fluctuating hormone levels.",
  },
  {
    icon: Battery,
    label: "Sleep Disturbance",
    desc: "Insomnia, night sweats, and chronic fatigue resistant to conventional sleep hygiene measures.",
  },
  {
    icon: Brain,
    label: "Cognitive Dysfunction",
    desc: "Memory impairment, reduced concentration, and executive function difficulties ('brain fog').",
  },
];

const MenopauseIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold tracking-wider uppercase text-xs rounded-full">
              Understanding Menopause
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            It's not just{" "}
            <span className="text-secondary italic font-serif">
              "Hot Flushes"
            </span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Menopausal transition presents with over 30 documented symptoms affecting vasomotor, urogenital, psychological, and metabolic systems. While symptom severity varies significantly between individuals, up to 75% of women experience impairment to quality of life. Our British Menopause Society-certified specialists conduct comprehensive hormonal assessment and provide{" "}
            <strong className="text-primary font-semibold">holistic, individualized care</strong>
            {" "}—integrating bioidentical HRT, cardiovascular risk stratification, bone health optimization, and psychological support to restore wellbeing throughout the menopausal transition and beyond.
          </p>
        </ScrollMotion>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {symptoms.map((item, index) => (
            <ScrollMotion
              key={index}
              animation="slideUp"
              delay={index * 0.1}
              duration={0.4}
              className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center text-secondary shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3 group-hover:text-secondary transition-colors">
                {item.label}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenopauseIntro;
