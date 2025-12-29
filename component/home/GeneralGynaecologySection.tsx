"use client";
import { ScrollMotion } from "@/component/motion";
import {
  ArrowRight,
  Baby,
  Bot,
  CalendarHeart,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AIChatbotModal from "@/component/shared/AIChatbotModal";

const GeneralGynaecologySection = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const services = [
    {
      icon: CalendarHeart,
      title: "Menstrual Health",
      desc: "Expert management of menstrual disorders including heavy bleeding, irregular cycles, and severe PMS/PMDD.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: HeartPulse,
      title: "Pelvic Pain & Fibroids",
      desc: "Advanced diagnostic imaging and minimally invasive treatment for chronic pelvic pain and fibroids.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Microscope,
      title: "Screening & Prevention",
      desc: "Comprehensive cervical screening, HPV vaccination, and sexual health testing.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Baby,
      title: "Contraception & Fertility",
      desc: "Bespoke contraceptive counseling and fertility assessment with diagnostic ultrasound.",
      color: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header */}
        <ScrollMotion animation="fadeInUp">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              <ShieldCheck className="inline w-3 h-3 mr-2" />
              GMC Registered Care
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              General Gynaecology
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive women's health services from routine screening to
              complex disorders
            </p>
          </div>
        </ScrollMotion>

        {/* Split Layout: Services Grid + Feature Box */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Stacked Services (2 columns on large screens) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <ScrollMotion key={idx} animation="slideUp" delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                  <Link
                    href="/general-gynaecology"
                    className="text-sm font-semibold text-secondary flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollMotion>
            ))}
          </div>

          {/* Right: AI Symptom Checker + Image */}
          <div className="lg:col-span-1 space-y-6">
            <ScrollMotion animation="fadeInRight">
              {/* AI Box */}
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Bot size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">AI Symptom Checker</h4>
                    <p className="text-xs opacity-90">Get instant guidance</p>
                  </div>
                </div>
                <p className="text-sm mb-6 opacity-90">
                  Describe your symptoms and receive personalized
                  recommendations in 60 seconds
                </p>
                <button
                  onClick={() => setIsChatbotOpen(true)}
                  className="w-full bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  Start Assessment
                </button>
              </div>

              {/* Quick Image */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/home/clinic.jpg"
                  alt="Gynaecology consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold">CQC Registered Facilities</p>
                    <p className="text-sm opacity-90">
                      Same-day appointments available
                    </p>
                  </div>
                </div>
              </div>
            </ScrollMotion>
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollMotion animation="fadeInUp">
          <div className="text-center">
            <Link
              href="/general-gynaecology"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Explore All Services
              <ArrowRight size={18} />
            </Link>
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
