"use client";
import { ScrollMotion } from "@/component/motion";
import {
  ArrowRight, // Screening
  Baby,
  CalendarHeart,
  Clock, // Fertility/Contraception
  HeartPulse, // Menstrual
  Microscope,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const GeneralGynaecologySection = () => {
  const services = [
    {
      icon: CalendarHeart,
      title: "Menstrual Health",
      desc: "Heavy periods, irregular cycles, and PMS management.",
      tags: ["PCOS", "Endometriosis", "Hormone Balance"],
      link: "/services/menstrual-health",
    },
    {
      icon: HeartPulse,
      title: "Pelvic Pain & Fibroids",
      desc: "Investigation of pelvic pain and structural issues.",
      tags: ["Fibroids", "Ovarian Cysts", "Pelvic Inflammatory Disease"],
      link: "/services/pelvic-pain",
    },
    {
      icon: Microscope,
      title: "Screening & Prevention",
      desc: "Rapid diagnostics for peace of mind.",
      tags: ["Smear Tests", "HPV Vaccination", "Sexual Health (STI)"],
      link: "/services/screening",
    },
    {
      icon: Baby,
      title: "Contraception & Fertility",
      desc: "Family planning tailored to your lifestyle.",
      tags: ["Coil Fitting", "Implants", "Fertility Checks"],
      link: "/services/family-planning",
    },
  ];

  return (
    <section className="py-20 bg-primary/5 relative">
      <div className="container mx-auto px-4">
        {/* 1. Header & AI Search Visual */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollMotion animation="fadeInDown">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              Comprehensive Care
            </h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
              General Gynaecology & <br />
              <span className="text-secondary italic font-serif">
                Everyday Wellness
              </span>
            </h2>

            {/* The "AI Search" Element - Visual Hook */}
            <div className="relative max-w-xl mx-auto mt-8 group">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:bg-secondary/30 transition-all duration-500"></div>
              <div className="relative bg-white rounded-full shadow-lg border border-gray-100 flex items-center p-2 pr-4">
                <div className="p-3 bg-primary/5 rounded-full text-primary">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Type a symptom (e.g. 'heavy periods')..."
                  className="flex-1 bg-transparent border-none outline-none px-4 text-gray-600 placeholder:text-gray-400"
                  readOnly // Read only for design demo, or make functional later
                />
                <button className="bg-primary hover:bg-secondary text-white p-2.5 rounded-full transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
                <Sparkles size={12} className="text-secondary" />
                <span>AI-Assisted Triage Available</span>
              </div>
            </div>
          </ScrollMotion>
        </div>

        {/* 2. The Smart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <ScrollMotion
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
              className="h-full"
            >
              <Link href={item.link} className="block h-full group">
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden">
                  {/* Hover Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <item.icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  {/* Mini Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider font-semibold bg-gray-50 text-gray-500 px-2 py-1 rounded-md border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="flex items-center text-sm font-bold text-primary group-hover:translate-x-2 transition-transform">
                    View Details{" "}
                    <ArrowRight size={16} className="ml-2 text-secondary" />
                  </div>
                </div>
              </Link>
            </ScrollMotion>
          ))}
        </div>

        {/* 3. Same Day Badge (Trust Signal) */}
        <ScrollMotion animation="fadeInUp" delay={0.4}>
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm text-sm text-gray-600">
              <Clock size={18} className="text-secondary" />
              <span>
                <strong>Same-Day Appointments</strong> available for urgent
                concerns.
              </span>
            </div>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default GeneralGynaecologySection;
