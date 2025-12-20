"use client";

import { ScrollMotion } from "@/component/motion";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need a GP referral to book?",
    answer:
      "No, GyneClinics is a private service. You can book a consultation directly with our specialists without waiting for a GP referral.",
  },
  {
    question: "What happens during a Well Woman Check?",
    answer:
      "Our Well Woman checks are comprehensive assessments including a pelvic exam, blood pressure check, and blood tests tailored to your age and history.",
  },
  {
    question: "How do you treat Uterine Fibroids?",
    answer:
      "Treatment depends on size and symptoms. We offer medical management and surgical options, including minimally invasive Myomectomy and Hysterectomy.",
  },
  {
    question: "Can I get an appointment same-day?",
    answer:
      "Yes, we reserve slots specifically for urgent concerns. Please call us directly or use the online booking system to check real-time availability.",
  },
];

const GeneralFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollMotion animation="fadeInUp" duration={0.5} className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Common Questions
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Everything you need to know before your visit
          </p>
        </ScrollMotion>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollMotion
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.4}
              className={`border rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md ${
                openIndex === index
                  ? "border-primary/30 bg-primary/5 shadow-lg"
                  : "border-gray-200 bg-white hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <span
                  className={`text-base md:text-lg font-bold ${
                    openIndex === index ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full transition-colors ${
                    openIndex === index
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 text-gray-600 leading-relaxed border-t border-primary/10 mx-4 md:mx-6 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralFAQ;
