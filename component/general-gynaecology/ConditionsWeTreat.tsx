"use client";

import { ScrollMotion } from "@/component/motion";
import {
  Baby,
  CalendarClock,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Link from "next/link";

// Categorizing the data with links to service pages
const conditions = [
  {
    category: "Pregnancy & Fertility",
    icon: Baby,
    description: "Supporting your journey from conception to motherhood.",
    items: [
      {
        name: "Infertility & IVF",
        link: "/general-gynaecology/contraception-fertility",
      },
      {
        name: "Family Planning & Contraception",
        link: "/general-gynaecology/contraception-fertility",
      },
      {
        name: "Post-Pregnancy Problems",
        link: "/general-gynaecology/post-pregnancy-problems",
      },
      {
        name: "Gynaecological Masses",
        link: "/general-gynaecology/gynaecological-masses",
      },
    ],
  },
  {
    category: "Menstrual & Hormonal",
    icon: CalendarClock,
    description: "Expert care for period problems and hormonal concerns.",
    items: [
      {
        name: "Heavy & Irregular Periods",
        link: "/general-gynaecology/menstrual-health",
      },
      {
        name: "Painful Periods & Endometriosis",
        link: "/general-gynaecology/menstrual-health",
      },
      { name: "PMS & PMDD", link: "/general-gynaecology/menstrual-health" },
      { name: "Menopause & HRT", link: "/menopause" },
    ],
  },
  {
    category: "Pelvic Pain & Masses",
    icon: Stethoscope,
    description: "Comprehensive diagnosis and treatment solutions.",
    items: [
      {
        name: "Fibroids & Treatment Options",
        link: "/general-gynaecology/pelvic-pain-fibroids",
      },
      {
        name: "Pelvic Pain Management",
        link: "/general-gynaecology/pelvic-pain-fibroids",
      },
      {
        name: "Ovarian Cysts & Swellings",
        link: "/general-gynaecology/gynaecological-masses",
      },
      {
        name: "Chronic Pelvic Pain",
        link: "/general-gynaecology/pelvic-pain-fibroids",
      },
    ],
  },
  {
    category: "Preventative Care",
    icon: ShieldCheck,
    description: "Regular screening for your peace of mind.",
    items: [
      {
        name: "Cervical Screening & Colposcopy",
        link: "/general-gynaecology/screening-prevention",
      },
      {
        name: "STI & Sexual Health Screening",
        link: "/general-gynaecology/screening-prevention",
      },
      {
        name: "Well-Woman Health Checks",
        link: "/general-gynaecology/screening-prevention",
      },
      {
        name: "HPV Vaccination",
        link: "/general-gynaecology/screening-prevention",
      },
    ],
  },
  {
    category: "Intimate Health",
    icon: Sparkles,
    description: "Sensitive care for private concerns.",
    items: [
      {
        name: "Sexual Difficulties & Counseling",
        link: "/general-gynaecology/sexual-health-difficulties",
      },
      {
        name: "Vulva & Vaginal Conditions",
        link: "/general-gynaecology/vulva-vaginal-conditions",
      },
      {
        name: "Painful Intercourse",
        link: "/general-gynaecology/sexual-health-difficulties",
      },
      {
        name: "Recurrent Infections",
        link: "/general-gynaecology/vulva-vaginal-conditions",
      },
    ],
  },
  {
    category: "Surgical Solutions",
    icon: Syringe,
    description: "Advanced minimally invasive procedures.",
    items: [
      {
        name: "Laparoscopic Surgery",
        link: "/general-gynaecology/pelvic-pain-fibroids",
      },
      {
        name: "Hysteroscopic Procedures",
        link: "/general-gynaecology/menstrual-health",
      },
      { name: "Aesthetic Gynaecology", link: "/aesthetic-gynaecology" },
      { name: "Prolapse Surgery", link: "/urogynaecology" },
    ],
  },
];

const ConditionsWeTreat = () => {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      id="treatments"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTIzNDIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Conditions We Treat
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We offer comprehensive care covering all aspects of women's health,
            from adolescence through to menopause and beyond.
          </p>
        </ScrollMotion>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {conditions.map((card, index) => (
            <ScrollMotion
              key={index}
              animation="slideUp"
              delay={index * 0.1}
              duration={0.4}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                  {card.category}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-4">{card.description}</p>

              {/* List Items with Links */}
              <ul className="space-y-2">
                {card.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="flex items-center justify-between gap-2 text-gray-600 text-sm md:text-base leading-relaxed hover:text-primary transition-colors group/item p-2 rounded-lg hover:bg-primary/5"
                    >
                      <span className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0 group-hover/item:bg-primary transition-colors" />
                        {item.name}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-gray-300 group-hover/item:text-secondary group-hover/item:translate-x-1 transition-all shrink-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsWeTreat;
