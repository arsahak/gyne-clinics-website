"use client";

import { ScrollMotion } from "@/component/motion";
import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Stethoscope,
    title: "Rapid Diagnosis",
    desc: "Same-day ultrasound scans and comprehensive diagnostic testing for immediate clinical clarity.",
    gradient: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: Activity,
    title: "Advanced Technology",
    desc: "State-of-the-art 4D ultrasound, colposcopy, and minimally invasive surgical equipment.",
    gradient: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    desc: "Bespoke treatment plans tailored to your lifestyle, health goals, and reproductive aspirations.",
    gradient: "from-rose-500/10 to-rose-500/5",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
  },
];

const trustBadges = [
  {
    icon: Shield,
    value: "CQC",
    label: "Registered",
    color: "text-primary",
  },
  {
    icon: Award,
    value: "GMC",
    label: "Certified",
    color: "text-secondary",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Patients",
    color: "text-blue-600",
  },
  {
    icon: Clock,
    value: "72hrs",
    label: "Response",
    color: "text-purple-600",
  },
];

const servicesList = [
  "Comprehensive Gynaecological Assessment",
  "Aesthetic Gynaecology & Intimate Wellness",
  "Advanced Cervical & Sexual Health Screening",
  "Complimentary Initial Online Consultation",
];

const GeneralIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden relative">
      {/* Enhanced Background Design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <ScrollMotion animation="fadeInDown" duration={0.5}>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Clinical Excellence
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight max-w-4xl mx-auto">
              Comprehensive Care for <br />
              <span className="text-secondary italic font-serif">Women's Health</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Welcome to <strong className="text-primary">GyneClinics</strong>, where consultant-led gynaecological care meets clinical excellence. Our GMC-registered specialists provide comprehensive assessment and treatment for the full spectrum of women's health conditions.
            </p>
          </div>
        </ScrollMotion>

        {/* Trust Badges */}
        <ScrollMotion animation="fadeInUp" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-full bg-gray-50 flex items-center justify-center ${badge.color} group-hover:scale-110 transition-transform`}>
                  <badge.icon size={20} />
                </div>
                <p className="text-xl md:text-2xl font-bold text-primary mb-1">{badge.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{badge.label}</p>
              </div>
            ))}
          </div>
        </ScrollMotion>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollMotion
              key={index}
              animation="slideUp"
              delay={index * 0.1 + 0.3}
              duration={0.4}
            >
              <div className={`relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden`}>
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className={`relative w-14 h-14 ${feature.iconBg} ${feature.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </ScrollMotion>
          ))}
        </div>

        {/* Main Content Card */}
        <ScrollMotion animation="fadeInUp" delay={0.5}>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <Image
                    src="/assets/home/clinic.jpg"
                    alt="Expert gynaecological consultation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Stats Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-secondary to-secondary/90 text-white p-6 rounded-2xl shadow-2xl max-w-[200px] group-hover:scale-105 transition-transform duration-300">
                    <p className="text-4xl font-bold mb-1">15+</p>
                    <p className="text-sm leading-tight font-medium opacity-90">
                      Years of Specialized Women's Health Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Evidence-Based Medicine Meets Compassionate Care
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  Our CQC-registered facilities combine cutting-edge diagnostic technology with patient-centered care. From routine screening to complex gynaecological disorders, we deliver comprehensive assessment and treatment pathways guided by the latest clinical evidence.
                </p>

                {/* Highlight Box */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-secondary p-6 rounded-r-xl mb-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="text-secondary w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary text-lg mb-2">
                        Complimentary Online Consultation
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Access expert clinical guidance through our secure portal. Submit your health inquiry and receive a consultant response within 72 hours to help you make informed decisions about your care pathway.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Checklist */}
                <div className="space-y-3 mb-8">
                  {servicesList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
                        <CheckCircle2 className="text-secondary w-3 h-3 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
                  >
                    Book Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default GeneralIntro;
