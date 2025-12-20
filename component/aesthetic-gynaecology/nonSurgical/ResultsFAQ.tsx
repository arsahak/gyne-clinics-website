"use client";

import { ScrollMotion } from "@/component/motion";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Does the laser treatment hurt?",
    a: "Most women report little to no pain. You may feel a slight heating sensation or vibration during the procedure, but it is generally very well tolerated without anaesthetic.",
  },
  {
    q: "How many sessions do I need?",
    a: "For optimal results, we typically recommend a course of 3 treatments spaced 4-6 weeks apart. However, many patients notice an improvement after just one session.",
  },
  {
    q: "Is PRP (O-Shot) safe?",
    a: "Yes, extremely safe. Because PRP uses your own blood plasma, there is virtually no risk of allergic reaction or rejection.",
  },
  {
    q: "Can I have sex after the treatment?",
    a: "For laser treatments, we recommend waiting 3-5 days to allow the tissue to heal. For PRP injections, you can usually resume sexual activity the same day.",
  },
];

const ResultsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="text-center mb-12 md:mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold tracking-wider uppercase text-xs rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Common Questions
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </ScrollMotion>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <ScrollMotion
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.4}
              className={`border rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md ${
                openIndex === index
                  ? "border-secondary/30 bg-secondary/5 shadow-lg"
                  : "border-gray-200 bg-white hover:border-secondary/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-bold ${
                    openIndex === index ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`p-2 rounded-full transition-colors ${
                    openIndex === index
                      ? "bg-rose-500 text-white"
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
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-rose-200/50 mx-6 mt-2">
                      {faq.a}
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

export default ResultsFAQ;
