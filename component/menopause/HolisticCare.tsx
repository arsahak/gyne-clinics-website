"use client";

import { ScrollMotion } from "@/component/motion";
import { Dumbbell, Heart, Leaf, Utensils } from "lucide-react";
import Image from "next/image";

const HolisticCare = () => {
  const holisticItems = [
    {
      icon: Utensils,
      text: "Nutrition for metabolic health & weight control",
    },
    {
      icon: Dumbbell,
      text: "Strength training for bone density",
    },
    {
      icon: Heart,
      text: "Stress reduction techniques",
    },
    {
      icon: Leaf,
      text: "Supplements that actually work (Evidence-based)",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-secondary/5 via-white to-primary/5 rounded-[3rem] p-8 md:p-12 overflow-hidden border border-secondary/10 shadow-xl"
        >
          <div className="lg:w-1/2 relative min-h-[300px] lg:h-full w-full">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/beyond-the-prescription.jpg"
                alt="Nutrition and Yoga"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold tracking-wider uppercase text-xs rounded-full">
                Holistic Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Beyond the{" "}
              <span className="text-secondary italic font-serif">
                Prescription
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Hormones are just one piece of the puzzle. Our{" "}
              <strong className="text-primary font-semibold">
                Menopause 360
              </strong>{" "}
              plans include guidance on:
            </p>
            <ul className="space-y-4">
              {holisticItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-secondary/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="text-secondary" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium text-base md:text-lg pt-1.5">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default HolisticCare;
