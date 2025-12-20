"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

const BladderCheck = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Instant preliminary assessment",
    },
    {
      icon: Sparkles,
      text: "Personalized treatment suggestions",
    },
    {
      icon: CheckCircle2,
      text: "Evidence-based recommendations",
    },
  ];

  const incontinenceTypes = [
    {
      emoji: "🤧",
      title: "Stress Incontinence",
      description: "Leaking when coughing, sneezing, or exercising.",
      gradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-900",
    },
    {
      emoji: "🏃‍♀️",
      title: "Urge Incontinence",
      description: "Sudden, intense need to urinate followed by leaking.",
      gradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-900",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-white to-primary/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTIzNDIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <ScrollMotion animation="fadeInLeft" duration={0.5}>
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider rounded-full border border-secondary/20">
                  Quick Assessment
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Not sure which type{" "}
                <span className="text-secondary italic font-serif">
                  you have?
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                Take our 1-minute AI-powered Bladder Health Quiz. Understanding
                your symptoms is the first step toward the right treatment.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                      <benefit.icon className="text-primary" size={20} />
                    </div>
                    <span className="font-medium text-gray-700">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/bladder-check"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
              >
                <span>Start Assessment</span>
                <ArrowRight size={20} />
              </Link>
            </ScrollMotion>
          </div>

          {/* Right Visual Cards */}
          <div className="lg:w-5/12 w-full">
            <div className="space-y-6">
              {incontinenceTypes.map((type, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideLeft"
                  delay={0.3 + index * 0.15}
                  duration={0.4}
                  className={`bg-gradient-to-br ${type.gradient} p-6 md:p-7 rounded-2xl border-2 ${type.borderColor} shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl md:text-5xl bg-white rounded-xl p-3 shadow-sm group-hover:scale-110 transition-transform">
                      {type.emoji}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-bold text-lg md:text-xl ${type.textColor} mb-2 group-hover:text-primary transition-colors`}
                      >
                        {type.title}
                      </h4>
                      <p
                        className={`text-sm md:text-base ${type.textColor}/70 leading-relaxed`}
                      >
                        {type.description}
                      </p>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BladderCheck;
