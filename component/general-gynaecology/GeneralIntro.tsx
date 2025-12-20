"use client";

import { ScrollMotion } from "@/component/motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Stethoscope,
    title: "Rapid Diagnosis",
    desc: "Same-day scans and tests to give you answers quickly.",
  },
  {
    icon: Activity,
    title: "Advanced Technology",
    desc: "State-of-the-art ultrasound and diagnostic equipment.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    desc: "Treatment plans tailored to your lifestyle and future goals.",
  },
];

const servicesList = [
  "General Gynaecological Concerns",
  "GyneCosmetics & Gyne-Sculpture",
  "Well-Woman Assessment & Screening",
  "Free Online Consultation (One-off)",
];

const GeneralIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- TOP SECTION: CONTENT & IMAGE --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <ScrollMotion animation="fadeInLeft" duration={0.5}>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">
                About Our Clinic
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Comprehensive Care for <br />
                <span className="text-secondary">Women's Health</span>
              </h2>

              <div className="text-gray-600 text-lg leading-relaxed space-y-6 mb-8">
                <p>
                  Welcome to <strong>GyneClinics</strong>. We are dedicated to
                  providing useful information and expert care for your general
                  gynaecological concerns. Our facility incorporates specialized
                  services including GyneCosmetics and Gyne-Sculpture, alongside
                  accessible self-help resources.
                </p>

                {/* Highlight Box for the Free Consultation USP */}
                <div className="bg-blue-50/50 border-l-4 border-secondary p-4 rounded-r-lg">
                  <p className="text-base text-gray-700">
                    <span className="font-bold text-primary">
                      Need quick advice?
                    </span>{" "}
                    We offer a<strong> free online consultation</strong>{" "}
                    facility before booking an appointment. Submit your query,
                    and we will normally respond within 72 hours.
                  </p>
                </div>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {servicesList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-[#1a3a5e] transition-all shadow-lg hover:shadow-xl group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollMotion>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <ScrollMotion animation="scaleIn" duration={0.5} delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                {/* Replace with your actual image */}
                <Image
                  src="/assets/home/clinic.jpg"
                  alt="Doctor explaining results to patient"
                  fill
                  className="object-cover"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md shadow-xl p-5 rounded-xl max-w-[220px] border border-white/50 group-hover:scale-105 transition-transform duration-300">
                  <p className="text-primary font-bold text-3xl mb-1">15+</p>
                  <p className="text-gray-600 text-sm leading-tight font-medium">
                    Years of specialized experience in women's health
                  </p>
                </div>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralIntro;
