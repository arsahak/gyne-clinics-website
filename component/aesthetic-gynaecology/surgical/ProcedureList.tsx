"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, Calendar, Clock, ShieldCheck, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const procedures = [
  {
    title: "Labioplasty (Labial Reduction)",
    desc: "A procedure to reduce the size of the labia minora (inner lips) to alleviate discomfort during exercise or intercourse, and improve aesthetic appearance.",
    details: [
      "Local or General Anaesthetic",
      "Duration: 60-90 mins",
      "Return to work: 3-5 days",
    ],
    image: "/assets/aesthetic/labioplasty-art.jpg", // Use abstract line art or tasteful medical illustration
  },
  {
    title: "Vaginoplasty (Vaginal Tightening)",
    desc: "Surgical tightening of the vaginal canal and perineal muscles, often performed to reverse laxity caused by childbirth or aging.",
    details: [
      "General Anaesthetic",
      "Duration: 1-2 hours",
      "Return to work: 1 week",
    ],
    image: "/assets/aesthetic/vaginoplasty-art.jpg",
  },
  {
    title: "Hoodectomy (Clitoral Hood Reduction)",
    desc: "Removal of excess skin around the clitoris to improve sensitivity and balance the aesthetic appearance of the vulva.",
    details: [
      "Local Anaesthetic",
      "Duration: 45 mins",
      "Often combined with Labioplasty",
    ],
    image: "/assets/aesthetic/hoodectomy-art.jpg",
  },
];

const ProcedureList = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTIzNDIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion animation="fadeInUp" duration={0.5} className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full">
              Our Procedures
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Surgical Procedures
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Performed by Mr. Joe Daniels and our specialist team.
          </p>
        </ScrollMotion>

        <div className="space-y-8 md:space-y-12">
          {procedures.map((proc, index) => (
            <ScrollMotion
              key={index}
              animation="slideUp"
              delay={index * 0.15}
              duration={0.4}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row group"
            >
              {/* Image/Art Section */}
              <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 relative min-h-[250px] md:min-h-[300px] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="text-primary" size={40} />
                    </div>
                    <span className="text-sm uppercase tracking-widest font-bold text-primary/60">
                      Medical Illustration
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {proc.title}
                </h3>
                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  {proc.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8 border-t border-gray-100 pt-6">
                  {proc.details.map((detail, i) => {
                    const icons = [Clock, User, Calendar];
                    const Icon = icons[i] || ShieldCheck;
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        <Icon size={18} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-700">
                          {detail}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-[#1a3a5e] transition-all shadow-lg hover:shadow-xl"
                  >
                    <Calendar size={16} />
                    Consultation Request
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-full font-bold text-sm hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                    <ArrowRight size={16} />
                    Download Factsheet
                  </button>
                </div>
              </div>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcedureList;
