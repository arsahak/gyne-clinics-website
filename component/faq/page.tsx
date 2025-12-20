"use client";

import { ScrollMotion } from "@/component/motion";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Search } from "lucide-react";
import { useState, useMemo } from "react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // General Questions
  {
    category: "General",
    question: "Do I need a GP referral to book an appointment?",
    answer:
      "No, GyneClinics is a private service. You can book a consultation directly with our specialists without waiting for a GP referral. We offer flexible scheduling to accommodate your needs.",
  },
  {
    category: "General",
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid ID, any previous medical records or test results, a list of current medications, and your insurance information if applicable. It's also helpful to write down any questions or concerns you'd like to discuss.",
  },
  {
    category: "General",
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website, call us directly at 0207-117-6456, or use our contact form. Our team will help you find the most convenient time and location.",
  },
  {
    category: "General",
    question: "Can I get a same-day appointment?",
    answer:
      "We do our best to accommodate urgent requests. Same-day appointments are subject to availability. Please call our office to check availability for urgent consultations.",
  },
  {
    category: "General",
    question: "What are your clinic hours?",
    answer:
      "Our clinics operate Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. Some locations may have extended hours - please check with your specific clinic location.",
  },
  {
    category: "General",
    question: "Do you accept insurance?",
    answer:
      "We accept most major private health insurance providers. Please contact us with your insurance details before your appointment so we can verify coverage and explain any out-of-pocket costs.",
  },
  
  // Aesthetic Gynaecology
  {
    category: "Aesthetic Gynaecology",
    question: "Does laser treatment hurt?",
    answer:
      "Most women report little to no pain. You may feel a slight heating sensation or vibration during the procedure, but it is generally very well tolerated without anaesthetic. The treatment is designed to be comfortable with minimal discomfort.",
  },
  {
    category: "Aesthetic Gynaecology",
    question: "How many sessions do I need for laser treatment?",
    answer:
      "For optimal results, we typically recommend a course of 3 treatments spaced 4-6 weeks apart. However, many patients notice an improvement after just one session. Your specialist will create a personalized treatment plan based on your needs.",
  },
  {
    category: "Aesthetic Gynaecology",
    question: "Is PRP (O-Shot) safe?",
    answer:
      "Yes, extremely safe. Because PRP uses your own blood plasma, there is virtually no risk of allergic reaction or rejection. The procedure is minimally invasive and performed by our experienced specialists.",
  },
  {
    category: "Aesthetic Gynaecology",
    question: "What is the recovery time for aesthetic procedures?",
    answer:
      "Most non-surgical aesthetic procedures have minimal to no downtime. You can typically return to normal activities immediately. For surgical procedures, recovery time varies but our team will provide detailed aftercare instructions.",
  },
  
  // General Gynaecology
  {
    category: "General Gynaecology",
    question: "What happens during a Well Woman Check?",
    answer:
      "Our Well Woman checks are comprehensive assessments including a pelvic exam, blood pressure check, and blood tests tailored to your age and history. We also discuss your health concerns, family history, and provide personalized health recommendations.",
  },
  {
    category: "General Gynaecology",
    question: "How do you treat Uterine Fibroids?",
    answer:
      "Treatment depends on size and symptoms. We offer medical management and surgical options, including minimally invasive Myomectomy and Hysterectomy. Your specialist will discuss all options and help you choose the best approach for your situation.",
  },
  {
    category: "General Gynaecology",
    question: "What is included in a routine gynaecological exam?",
    answer:
      "A routine exam typically includes a pelvic examination, Pap smear (if due), breast examination, discussion of your menstrual cycle, contraception, and any concerns you may have. We also review your overall health and lifestyle factors.",
  },
  
  // Menopause
  {
    category: "Menopause",
    question: "What are the symptoms of menopause?",
    answer:
      "Common symptoms include hot flashes, night sweats, mood changes, sleep disturbances, vaginal dryness, and changes in menstrual cycles. However, symptoms vary greatly between women. Our specialists can help manage these symptoms effectively.",
  },
  {
    category: "Menopause",
    question: "Is HRT (Hormone Replacement Therapy) safe?",
    answer:
      "HRT can be safe and effective when prescribed appropriately. Our specialists will assess your individual risk factors, medical history, and symptoms to determine if HRT is right for you. We offer various forms of HRT and will monitor your progress closely.",
  },
  
  // Urogynaecology
  {
    category: "Urogynaecology",
    question: "What causes urinary incontinence?",
    answer:
      "Urinary incontinence can be caused by various factors including childbirth, menopause, aging, obesity, and certain medical conditions. Our urogynaecology specialists can diagnose the specific cause and recommend appropriate treatment options.",
  },
  {
    category: "Urogynaecology",
    question: "What treatments are available for bladder problems?",
    answer:
      "We offer a range of treatments including pelvic floor exercises, medications, minimally invasive procedures, and surgical options. Treatment is tailored to your specific condition and preferences. Many conditions can be managed effectively with non-surgical approaches.",
  },
  
  // Payment & Billing
  {
    category: "Payment & Billing",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and bank transfers. Payment is typically required at the time of service unless prior arrangements have been made with your insurance provider.",
  },
  {
    category: "Payment & Billing",
    question: "Do you offer payment plans?",
    answer:
      "We understand that medical care can be a significant investment. Please speak with our billing department about available payment options and financing plans that may be available for certain procedures.",
  },
];

const categories = ["All", "General", "Aesthetic Gynaecology", "General Gynaecology", "Menopause", "Urogynaecology", "Payment & Billing"];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Search and Filter Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollMotion animation="fadeInUp" duration={0.5} className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>
          </ScrollMotion>

          {/* Category Filter */}
          <ScrollMotion animation="fadeInUp" duration={0.5} delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollMotion>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg">
              Find answers to common questions about our services and treatments
            </p>
          </ScrollMotion>

          {filteredFAQs.length === 0 ? (
            <ScrollMotion animation="fadeInUp" duration={0.5}>
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No questions found matching your search. Please try different keywords or select another category.
                </p>
              </div>
            </ScrollMotion>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <ScrollMotion
                  key={`${faq.category}-${index}`}
                  animation="fadeInUp"
                  delay={index * 0.05}
                  duration={0.4}
                  className={`border rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md ${
                    openIndex === index
                      ? "border-primary/30 bg-primary/5 shadow-lg"
                      : "border-gray-200 bg-white hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex-1 pr-4">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <span
                        className={`text-lg font-bold block ${
                          openIndex === index ? "text-primary" : "text-gray-700"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`p-2 rounded-full transition-colors flex-shrink-0 ${
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
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-primary/10 mx-6 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ScrollMotion>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
