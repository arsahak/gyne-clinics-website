"use client";

import { ScrollMotion } from "@/component/motion";
import { CheckCircle2, Clock, Heart, TrendingUp } from "lucide-react";

const steps = [
  {
    day: "Day 1",
    title: "Rest & Recovery",
    text: "Go home the same day. Strict bed rest is recommended.",
    icon: Heart,
  },
  {
    day: "Day 3-5",
    title: "Light Activity",
    text: "Can move around the house. Most swelling peaks here.",
    icon: Clock,
  },
  {
    day: "Day 7-10",
    title: "Return to Work",
    text: "Desk-based work is usually fine. Stitches are dissolvable.",
    icon: CheckCircle2,
  },
  {
    day: "Week 6",
    title: "Full Recovery",
    text: "Return to gym, exercise, and sexual activity.",
    icon: TrendingUp,
  },
];

const RecoveryTimeline = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion animation="fadeInUp" duration={0.5} className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-bold tracking-wider uppercase text-xs rounded-full border border-white/30">
              Recovery Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Recovery & Aftercare
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            We support you at every stage of the healing process.
          </p>
        </ScrollMotion>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <ScrollMotion
                key={index}
                animation="slideUp"
                delay={index * 0.1}
                duration={0.4}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white hover:text-primary transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <step.icon size={20} />
                  </div>
                  <div className="px-3 py-1 bg-secondary/30 text-white text-xs font-bold rounded-full group-hover:bg-primary">
                    {step.day}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-white/80 group-hover:text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </ScrollMotion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryTimeline;
