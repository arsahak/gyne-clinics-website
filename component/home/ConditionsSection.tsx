"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Baby,
  CheckCircle2,
  HeartPulse,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";

const ConditionsSection = () => {
  // We organize the long list from your image into 4 logical categories for better UX
  const categories = [
    {
      title: "Hormonal & Menopause",
      icon: <Activity size={24} />,
      description: "Managing life's changes with expert care.",
      items: [
        "Menopause & HRT",
        "Perimenopause Symptoms",
        "PMS & PMDD",
        "Hormonal Depression",
        "Hirsutism",
        "Osteoporosis Prevention",
      ],
    },
    {
      title: "Pregnancy & Fertility",
      icon: <Baby size={24} />,
      description: "Support for starting and growing your family.",
      items: [
        "Infertility & IVF Support",
        "Family Planning / Contraception",
        "Early Pregnancy Problems",
        "Recurrent Miscarriage",
        "Pregnancy & Childbirth",
        "Post-Natal Care",
      ],
    },
    {
      title: "Gynaecological Conditions",
      icon: <HeartPulse size={24} />,
      description: "Diagnosis and treatment for specific conditions.",
      items: [
        "Endometriosis",
        "Fibroids",
        "Polycystic Ovary Syndrome (PCOS)",
        "Pelvic Pain",
        "Ovarian Cysts",
        "Heavy or Painful Periods",
      ],
    },
    {
      title: "General & Surgical",
      icon: <ShieldPlus size={24} />,
      description: "Comprehensive screening and surgical solutions.",
      items: [
        "Pap Smears & Screening",
        "Hysterectomy (Keyhole/Open)",
        "Urinary Incontinence",
        "Infections & Sexual Health",
        "Adolescent Gynaecology",
        "Sexual Problems",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* 1. Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
              Conditions We Treat
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Expert Care for Every Stage
            </h2>
            <p className="text-gray-500 text-lg">
              From routine health checks to complex surgical procedures, our
              consultants provide world-class care for a complete range of
              women's health issues.
            </p>
          </div>

          <Link
            href="/book-appointment"
            className="hidden md:flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl"
          >
            <span>Book Consultation</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* 2. The Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-[#F8F9FA] rounded-3xl p-8 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-500 transition-colors">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* The List Items (Transformed into a clean grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-gray-300 group-hover:text-secondary shrink-0 transition-colors"
                    />
                    <span className="text-gray-600 font-medium text-sm group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-Only CTA (Since header button hides on mobile) */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold w-full justify-center shadow-lg"
          >
            <span>Book Consultation</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
