"use client";
import { ScrollMotion } from "@/component/motion";
import AIChatbotModal from "@/component/shared/AIChatbotModal";
import { generalGynaecologyServices } from "@/data/generalGynaecologyServices";
import { ArrowRight, Bot, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GeneralGynaecologySection = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollMotion animation="fadeInUp">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              <ShieldCheck className="inline w-3 h-3 mr-2" />
              GMC & RCOG Registered Care
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              General Gynaecology
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive women&apos;s health services from routine screening
              to complex disorders. Expert care for all stages of your life.
            </p>
          </div>
        </ScrollMotion>

        {/* All Services Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {generalGynaecologyServices.map((service, idx) => (
            <ScrollMotion
              key={idx}
              animation="slideUp"
              delay={idx * 0.05}
              duration={0.4}
            >
              <Link href={`/general-gynaecology/${service.slug}`}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-primary/20 h-full flex flex-col hover:-translate-y-1">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </ScrollMotion>
          ))}
        </div>

        {/* Feature Boxes Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* AI Symptom Checker */}
          <ScrollMotion animation="fadeInLeft" delay={0.2}>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-xl relative overflow-hidden h-full min-h-[320px] flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Bot size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">AI Symptom Checker</h4>
                    <p className="text-sm opacity-90">Get instant guidance</p>
                  </div>
                </div>
                <p className="text-sm mb-6 opacity-95 leading-relaxed flex-grow">
                  Describe your symptoms and receive personalized
                  recommendations from our AI assistant in 60 seconds
                </p>
                <button
                  onClick={() => setIsChatbotOpen(true)}
                  className="w-full bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Sparkles size={18} />
                  Start Assessment
                </button>
              </div>
            </div>
          </ScrollMotion>

          {/* CQC Image Box */}
          <ScrollMotion animation="fadeInRight" delay={0.2}>
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/assets/home/clinic.jpg"
                alt="Gynaecology consultation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end p-6 md:p-8">
                <div className="text-white">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-3">
                    CQC Registered
                  </div>
                  <p className="font-bold text-xl mb-2">
                    State-of-the-Art Facilities
                  </p>
                  <p className="text-sm opacity-90">
                    Same-day appointments • Evening & weekend clinics available
                  </p>
                </div>
              </div>
            </div>
          </ScrollMotion>
        </div>

        {/* Bottom CTA */}
        <ScrollMotion animation="fadeInUp" delay={0.3}>
          <div className="text-center">
            <Link
              href="/general-gynaecology"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              View All Services & Conditions
              <ArrowRight size={20} />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              12 specialized services covering every aspect of women&apos;s
              health
            </p>
          </div>
        </ScrollMotion>
      </div>

      {/* AI Chatbot Modal */}
      <AIChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        chatbotType="general"
      />
    </section>
  );
};

export default GeneralGynaecologySection;
