"use client";

import { ScrollMotion } from "@/component/motion";
import { BadgeCheck, Award, Shield, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SurgeonSafety = () => {
  const credentials = [
    { icon: BadgeCheck, text: "GMC Registered Specialist" },
    { icon: Award, text: "RCOG Fellow" },
    { icon: Shield, text: "CQC Regulated Clinic" },
    { icon: UserCheck, text: "Fully Insured" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-primary/10 shadow-xl"
        >
          <div className="md:w-1/3">
            <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl relative overflow-hidden border-4 border-white shadow-2xl">
              {/* Place Doctor Image Here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="text-primary" size={48} />
                  </div>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">
                    Dr. Photo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full">
                Trust & Safety
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Safety is our Priority
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Surgical aesthetic procedures are performed by{" "}
              <strong className="text-primary font-semibold">
                Mr. Joe Daniels
              </strong>
              , a Consultant Gynaecologist with over 20 years of experience in
              pelvic floor reconstruction and cosmetic gynaecology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <cred.icon className="text-primary" size={20} />
                  </div>
                  <span className="font-bold text-primary text-sm md:text-base">
                    {cred.text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#1a3a5e] transition-all"
            >
              <UserCheck size={20} />
              Meet the Surgeon
            </Link>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default SurgeonSafety;
