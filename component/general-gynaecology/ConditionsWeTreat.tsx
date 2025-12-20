"use client";

import { ScrollMotion } from "@/component/motion";
import {
  Baby,
  CalendarClock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

// Categorizing the data from your image into logical groups
const conditions = [
  {
    category: "Pregnancy & Fertility",
    icon: Baby,
    items: [
      "Early Pregnancy & Ectopic Pregnancy",
      "Recurrent Miscarriage",
      "Infertility Investigations & IVF",
      "Family Planning & Contraception (Mirena IUS)",
      "Pregnancy & Childbirth Care",
    ],
  },
  {
    category: "Menstrual & Hormonal",
    icon: CalendarClock,
    items: [
      "Heavy Periods (Menorrhagia)",
      "Painful Periods & Endometriosis",
      "Premenstrual Syndrome (PMS)",
      "Polycystic Ovary Syndrome (PCOS)",
      "Menopause & HRT Management",
    ],
  },
  {
    category: "General Gynecology",
    icon: Stethoscope,
    items: [
      "Fibroids (Diagnosis & Treatment)",
      "Pelvic Pain Management",
      "Vaginal Discharge & Infections",
      "Urinary Tract Infections (UTI)",
      "Ovarian Cysts & Hirsutism",
    ],
  },
  {
    category: "Preventative Screening",
    icon: ShieldCheck,
    items: [
      "Pap Smears (Cervical Screening)",
      "Mammograms (Breast Cancer Screening)",
      "Sexual Health & Infection Checks",
      "Well-Woman Health Assessments",
      "Adolescent Gynaecology",
    ],
  },
  {
    category: "Surgical Procedures",
    icon: Syringe,
    items: [
      "Laparoscopic Hysterectomy",
      "Vaginal Hysterectomy",
      "Sterilization",
      "Fibroid Removal",
      "Minimal Access Surgery",
    ],
  },
  {
    category: "Wellness & Lifestyle",
    icon: Sparkles,
    items: [
      "Exercise & Nutrition Guidance",
      "Sexual Problems & Counseling",
      "Urinary Incontinence Solutions",
      "Hormonal Mood & Depression Support",
      "General Women's Health Advice",
    ],
  },
];

const ConditionsWeTreat = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="treatments">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTIzNDIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollMotion animation="fadeInUp" duration={0.5} className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                  {card.category}
                </h3>
              </div>

              {/* List Items */}
              <ul className="space-y-3">
                {card.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0 group-hover:bg-primary transition-colors" />
                    {item}
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
