"use client";

import { ScrollMotion } from "@/component/motion";
import {
  Activity,
  ArrowRight,
  Award,
  Bot,
  Droplets,
  Heart,
  Shield,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AIChatbotModal from "@/component/shared/AIChatbotModal";

const Urogynaecology = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const conditions = [
    {
      icon: Droplets,
      title: "Urinary Incontinence",
      desc: "Conservative to surgical solutions for stress and urge incontinence",
      stat: "50% of women affected",
    },
    {
      icon: Shield,
      title: "Pelvic Organ Prolapse",
      desc: "Pessary fitting and reconstructive surgery options",
      stat: "Expert BSUG care",
    },
    {
      icon: Activity,
      title: "Urodynamics Testing",
      desc: "In-house advanced bladder function diagnostics",
      stat: "Same-day results",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-purple-50 opacity-50"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with side badge */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <ScrollMotion animation="fadeInLeft">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <Stethoscope size={24} />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Specialist Care
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                Urogynaecology &<br />
                <span className="text-secondary italic">Pelvic Health</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-xl">
                NICE guideline-compliant treatment for incontinence, prolapse, and bladder dysfunction
              </p>
            </div>
          </ScrollMotion>

          <ScrollMotion animation="fadeInRight">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-blue-500" size={20} />
                <span className="font-bold text-primary">BSUG Accredited</span>
              </div>
              <p className="text-sm text-gray-500">
                Specialist-led pelvic floor care
              </p>
            </div>
          </ScrollMotion>
        </div>

        {/* Horizontal Cards Flow */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {conditions.map((item, idx) => (
            <ScrollMotion key={idx} animation="slideUp" delay={idx * 0.15}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-300 transition-all group relative">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.stat}
                  </span>
                </div>
              </div>
            </ScrollMotion>
          ))}
        </div>

        {/* Bottom: Full-width AI + Image Section */}
        <ScrollMotion animation="fadeInUp">
          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            {/* Left: AI Feature */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-white/20 rounded-2xl">
                  <Bot size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AI Bladder Health Check</h3>
                  <p className="text-sm opacity-90">Free 2-minute assessment</p>
                </div>
              </div>

              <p className="mb-6 text-lg opacity-95">
                Answer a few questions about your symptoms and receive personalized guidance on your pelvic floor health.
              </p>

              <button
                onClick={() => setIsChatbotOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2 w-fit"
              >
                Start Assessment <ArrowRight size={20} />
              </button>
            </div>

            {/* Right: Image with overlay stats */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/home/clinic.jpg"
                alt="Urogynaecology care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Heart className="text-white" size={20} />
                  <span className="text-white font-semibold">Confidential consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="text-white" size={20} />
                  <span className="text-white font-semibold">In-house urodynamics suite</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollMotion>

        {/* Final CTA */}
        <ScrollMotion animation="fadeInUp" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/urogynaecology"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-purple-600 text-white rounded-full font-bold shadow-lg transition-all"
            >
              Explore Urogynaecology Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollMotion>
      </div>

      {/* AI Chatbot Modal */}
      <AIChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        chatbotType="urogynaecology"
      />
    </section>
  );
};

export default Urogynaecology;
