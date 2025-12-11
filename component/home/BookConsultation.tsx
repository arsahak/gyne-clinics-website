"use client";

import { motion } from "framer-motion";
import { Clock, Phone, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

const BookConsultation = () => {
  // Simple state to handle form submission simulation
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="book-appointment"
    >
      {/* Background Subtle Pattern */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F4F6F8] to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* 1. LEFT SIDE: Trust & Context */}
          <div className="lg:w-5/12 pt-8">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Begin Your Journey to{" "}
              <span className="text-secondary italic">Better Health</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Whether you need a routine check-up, a second opinion, or
              specialized aesthetic treatment, our team is here to listen. All
              enquiries are treated with strict medical confidentiality.
            </p>

            {/* Trust Badges */}
            <div className="space-y-6">
              <TrustBadge
                icon={<ShieldCheck size={24} />}
                title="100% Confidential"
                text="Your privacy is our utmost priority from the first click."
              />
              <TrustBadge
                icon={<Clock size={24} />}
                title="Quick Response"
                text="Our team aims to respond to all digital enquiries within 24 hours."
              />
              <TrustBadge
                icon={<Phone size={24} />}
                title="Direct Line"
                text="Prefer to speak? Call us directly on 0207-117-6456."
              />
            </div>
          </div>

          {/* 2. RIGHT SIDE: The Form Card */}
          <div className="lg:w-7/12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative"
            >
              {/* Decorative Gold Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-secondary rounded-b-full"></div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary">
                  Request Consultation
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Fill out the details below and we will contact you to arrange
                  a suitable time.
                </p>
              </div>

              {status === "success" ? (
                // Success Message
                <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center">
                  <h4 className="text-xl font-bold mb-2">Thank you!</h4>
                  <p>
                    Your enquiry has been sent. Our team will be in touch
                    shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-bold underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                // The Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Sarah Jones"
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. +44 7700 900000"
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>

                  {/* Service Dropdown (New Addition for better UX) */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
                      Service of Interest
                    </label>
                    <select className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-gray-600">
                      <option>General Gynaecology</option>
                      <option>Menopause / HRT</option>
                      <option>Urogynaecology / Bladder</option>
                      <option>Aesthetic / Cosmetic</option>
                      <option>Fertility</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please tell us briefly how we can help..."
                      className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-secondary text-white font-bold text-lg py-4 rounded-xl hover:bg-[#b08d48] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex justify-center items-center gap-2"
                  >
                    {status === "submitting" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Book Consultation</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    By submitting this form, you agree to our privacy policy.
                    Your data is secure.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Helper for Trust Badges ---
const TrustBadge = ({ icon, title, text }: any) => (
  <div className="flex gap-4 items-start">
    <div className="bg-primary/5 p-3 rounded-full text-secondary shrink-0">
      {icon}
    </div>
    <div>
      <h5 className="font-bold text-primary">{title}</h5>
      <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default BookConsultation;
