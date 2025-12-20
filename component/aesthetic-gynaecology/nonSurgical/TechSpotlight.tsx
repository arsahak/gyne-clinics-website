"use client";

import { ScrollMotion } from "@/component/motion";
import { CheckCircle2, Shield, Zap } from "lucide-react";

const TechSpotlight = () => {
  const features = [
    { icon: Shield, text: "FDA Cleared Technology" },
    { icon: CheckCircle2, text: "Safe for all skin types" },
    { icon: Zap, text: "Sterile, single-use probes" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <ScrollMotion animation="fadeInLeft" duration={0.5}>
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-bold tracking-wider uppercase text-xs rounded-full border border-white/30">
                  Technology
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Powered by{" "}
                <span className="text-secondary italic font-serif">
                  CO2RE® Intima
                </span>
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                We use the gold-standard CO2 laser technology. Unlike older
                methods, CO2RE Intima delivers controlled energy to the vaginal
                tissue to stimulate deep collagen remodeling with minimal
                discomfort.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                      <feature.icon className="text-secondary" size={20} />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollMotion>
          </div>

          <div className="lg:w-1/2">
            <ScrollMotion animation="scaleIn" duration={0.5} delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-2xl">
                <div className="aspect-square relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="text-secondary" size={48} />
                    </div>
                    <span className="text-white/50 font-mono text-xs uppercase tracking-widest">
                      Laser Device Visual
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm uppercase tracking-widest text-secondary mb-2 font-bold">
                    Clinical Grade
                  </p>
                  <p className="font-bold text-xl">The Science of Rejuvenation</p>
                </div>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpotlight;
