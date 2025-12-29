"use client";
import { ScrollMotion } from "@/component/motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Flower2,
  Heart,
  Shield,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MenopauseSection = () => {
  const symptoms = [
    "Hot Flushes",
    "Night Sweats",
    "Mood Changes",
    "Brain Fog",
    "Sleep Issues",
    "Joint Pain",
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <ScrollMotion animation="fadeInLeft">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Flower2 className="text-purple-600" size={16} />
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">
                  Menopause Specialists
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Navigating Menopause with{" "}
                <span className="text-secondary italic">Confidence</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                British Menopause Society-accredited care combining bio-identical HRT, lifestyle optimization, and preventative health strategies to restore your vitality.
              </p>

              {/* Three Key Solutions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                    <Sun className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Bespoke HRT</h4>
                    <p className="text-sm text-gray-600">
                      Personalized bio-identical hormone therapy optimized to your profile
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <Brain className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Cognitive Support</h4>
                    <p className="text-sm text-gray-600">
                      Treatment for brain fog, memory issues, and mood changes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                    <Heart className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Long-term Health</h4>
                    <p className="text-sm text-gray-600">
                      Bone density, cardiovascular care, and preventative strategies
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/menopause"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-bold shadow-lg transition-all"
              >
                Explore Menopause Care
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollMotion>

          {/* Right Column: Visual + AI Widget */}
          <ScrollMotion animation="fadeInRight">
            <div className="space-y-6">
              {/* Image Card */}
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/home/living-symptom-tracker.jpg"
                  alt="Menopause wellness"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent"></div>

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-2xl font-serif italic mb-2">
                    "I finally got my energy back"
                  </p>
                  <p className="text-sm opacity-90 font-semibold">— Patient Success Story</p>
                </div>
              </div>

              {/* AI Symptom Tracker Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white">
                    <Bot size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">AI Symptom Tracker</h3>
                    <p className="text-sm text-gray-500">Free 2-minute assessment</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Not sure if it's menopause? Track your symptoms with our intelligent assistant
                </p>

                {/* Symptom pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {symptoms.map((symptom, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-purple-50 text-purple-700 px-3 py-2 rounded-full border border-purple-100"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                  <Shield size={18} />
                  Start Confidential Assessment
                </button>
              </div>
            </div>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
};

export default MenopauseSection;
