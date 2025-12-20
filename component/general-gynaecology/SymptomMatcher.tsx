"use client";

import { ScrollMotion } from "@/component/motion";
import { Search, Sparkles } from "lucide-react";

const SymptomMatcher = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-white">
              <div className="flex items-center gap-2 mb-4 text-secondary font-bold uppercase tracking-widest text-sm">
                <Sparkles size={16} />
                AI Health Assistant
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Not sure what you need?
              </h2>
              <p className="text-white/80 leading-relaxed">
                Describe your symptoms and our Smart Assistant will guide you to
                the right specialist or service immediately.
              </p>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. I have lower back pain and irregular periods..."
                  className="w-full h-14 md:h-16 pl-6 pr-14 rounded-xl bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-secondary/50 shadow-lg text-base md:text-lg"
                />
                <button className="absolute right-2 top-2 h-10 w-10 md:h-12 md:w-12 bg-secondary text-white rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-colors">
                  <Search size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
              <p className="text-white/60 text-xs mt-3 ml-2">
                *Privacy assured. Your search is not stored.
              </p>
            </div>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default SymptomMatcher;
