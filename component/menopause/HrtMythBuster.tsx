"use client";

import { ScrollMotion } from "@/component/motion";
import { Bot, Check, MessageCircleQuestion, Sparkles, X } from "lucide-react";
import Link from "next/link";

const HrtMythBuster = () => {
  const myths = [
    {
      type: "myth",
      icon: X,
      label: "Myth",
      text: "It's too late to start HRT if I'm 60.",
      color: "bg-red-500/20 text-red-300 border-red-500/30",
    },
    {
      type: "fact",
      icon: Check,
      label: "Fact",
      text: "While the 'window of opportunity' is best within 10 years of menopause, low-dose transdermal options can still be considered safely for bone health.",
      color: "bg-green-500/20 text-green-300 border-green-500/30",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden relative">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <ScrollMotion animation="fadeInLeft" duration={0.5}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/30 mb-6">
                <Bot size={14} />
                AI Knowledge Base
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Confused about{" "}
                <span className="text-secondary italic font-serif">HRT Risks?</span>
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                Headlines can be misleading. Use our AI-powered tool to understand
                the latest evidence-based safety data regarding HRT, Breast
                Cancer, and Heart Health specific to your age group.
              </p>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Sparkles size={20} />
                Ask the Expert AI
              </Link>
            </ScrollMotion>
          </div>

          {/* Interactive Visual Element */}
          <div className="lg:w-1/2 w-full">
            <ScrollMotion animation="fadeInRight" duration={0.5} delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                  <MessageCircleQuestion className="text-secondary" size={24} />
                  <h3 className="text-xl md:text-2xl font-bold">
                    Common Myths vs. Facts
                  </h3>
                </div>

                <div className="space-y-6">
                  {myths.map((myth, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 p-4 rounded-xl border ${myth.color} bg-white/5 backdrop-blur-sm`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${myth.color} flex items-center justify-center shrink-0 border`}
                      >
                        <myth.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-white/80 font-medium mb-2 uppercase tracking-wider">
                          {myth.label}
                        </p>
                        <p className="font-semibold text-base md:text-lg leading-relaxed">
                          {myth.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrtMythBuster;
