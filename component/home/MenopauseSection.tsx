import { ScrollMotion } from "@/component/motion";
import {
  Brain,
  Flower2, // Energy/Vitality
  Heart,
  MessageSquare, // Visual for natural/growth
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MenopauseSection = () => {
  const solutions = [
    {
      icon: Sun,
      title: "Bespoke HRT",
      desc: "Bio-identical Hormone Replacement Therapy tailored to your unique blood profile. We create custom prescriptions (compounded) or standard regulated body-identical options.",
      link: "/services/hrt",
    },
    {
      icon: Brain,
      title: "Mood & Brain Fog",
      desc: "Regain your mental clarity. We treat the psychological impacts of menopause, including anxiety, memory lapses, and sleep disturbances.",
      link: "/services/menopause-mental-health",
    },
    {
      icon: Heart,
      title: "Bone & Heart Health",
      desc: "Estrogen protects your future. Our 'Life After Menopause' plans focus on preventing osteoporosis and maintaining cardiovascular strength.",
      link: "/services/healthy-aging",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden relative">
      {/* Decorative Background: Giant Soft Flower/Sun Shape */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* 1. LEFT CONTENT: The "Empathy" Side */}
          <div className="lg:w-1/2">
            <ScrollMotion animation="fadeInLeft">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4 border border-purple-100">
                <Flower2 size={14} /> Menopause Hub
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Navigating Change with <br />
                <span className="text-secondary italic font-serif">
                  Grace & Science
                </span>
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Menopause isn't just about hot flushes; it's a total body
                transition. Whether you prefer natural lifestyle adjustments or
                advanced Hormone Replacement Therapy (HRT), we design a plan
                that helps you feel like <em>yourself</em> again.
              </p>

              {/* The "Solutions" Stack */}
              <div className="space-y-6">
                {solutions.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-lg text-sm"
                >
                  Book Menopause Consultation
                </Link>
              </div>
            </ScrollMotion>
          </div>

          {/* 2. RIGHT CONTENT: The "AI & Tech" Feature */}
          <div className="lg:w-1/2 w-full">
            <ScrollMotion animation="scaleIn" delay={0.2}>
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
                  <Image
                    src="/assets/home/living-symptom-tracker.jpg" // Image of a happy, mature woman outdoors or smiling
                    alt="Living well with menopause"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay Gradient for Text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>

                  {/* Bottom Text on Image */}
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <p className="font-serif italic text-xl mb-2 text-secondary">
                      "I finally got my energy back."
                    </p>
                    <p className="text-sm opacity-80 font-bold tracking-wide uppercase">
                      Patient Success Story
                    </p>
                  </div>
                </div>

                {/* THE "AI FEATURE" CARD (Floating) */}
                <div className="absolute -top-6 -right-6 md:-left-12 md:top-12 md:right-auto bg-white p-6 rounded-2xl shadow-xl border border-purple-100 max-w-[280px] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg animate-pulse">
                      <MessageSquare size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">
                      AI Symptom Tracker
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    Not sure if it's menopause? Chat with our smart assistant to
                    build your symptom profile before your visit.
                  </p>

                  {/* Mini "Symptom Tags" Visual */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1 rounded-md">
                      Hot Flushes
                    </span>
                    <span className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1 rounded-md">
                      Anxiety
                    </span>
                    <span className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1 rounded-md">
                      Insomnia
                    </span>
                  </div>

                  <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg transition-colors">
                    Start Assessment
                  </button>
                </div>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenopauseSection;
