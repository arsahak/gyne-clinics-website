"use client";

import { motion } from "framer-motion";
import { Calendar, Send } from "lucide-react";
import { useState } from "react";

// --- Mock Data: Locations (kept for the bottom section as per previous pattern) ---
import { Mail, MapPin, Phone } from "lucide-react";

// --- Mock Data: Locations ---
const LOCATIONS = [
  {
    city: "London (HQ)",
    address: "123 Oxford Street, London, W1D 1LT",
    phone: "+44 20 7123 4567",
    email: "london@gynestore.com",
  },
  {
    city: "Manchester",
    address: "45 Deansgate, Manchester, M3 2AY",
    phone: "+44 161 987 6543",
    email: "manchester@gynestore.com",
  },
  {
    city: "Birmingham",
    address: "88 Bullring, Birmingham, B5 4BU",
    phone: "+44 121 555 0199",
    email: "bham@gynestore.com",
  },
  {
    city: "Edinburgh",
    address: "10 Princes Street, Edinburgh, EH2 2AN",
    phone: "+44 131 444 8888",
    email: "scotland@gynestore.com",
  },
  {
    city: "Cardiff",
    address: "22 St Mary St, Cardiff, CF10 1AA",
    phone: "+44 29 2000 1111",
    email: "wales@gynestore.com",
  },
];

const ContactPage = () => {
  // State for radio button selection
  const [contactMethod, setContactMethod] = useState("Phone Call");

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* 1. PAGE HERO */}
      <section className="bg-white border-b border-gray-100 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
              Patient Enquiries
            </h4>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-gray-500 text-sm md:text-lg">
              We guide women to make informed decisions about their care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT: TEXT & FORM */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* LEFT SIDE: Content from Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-5/12 flex flex-col gap-6"
            >
              <h3 className="text-2xl font-heading font-bold text-primary border-l-4 border-secondary pl-4">
                Contact Us
              </h3>

              <div className="prose prose-sm md:prose-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  To learn more about any of these conditions, to arrange
                  consultation or to make an email or telephone enquiry or an
                  e-consultation, or simply to ask questions, do follow the
                  links, as shown.
                </p>
                <p>
                  To help you have readily available information that you can
                  refer to, time and again, we have also reproduced the clinical
                  content of this website, in an e-booklet called{" "}
                  <span className="text-secondary font-bold">
                    “GyneClinics Patients’ Handbook of Gynaecology”
                  </span>
                  .
                </p>
                <div className="bg-white p-4 rounded-xl border border-l-4 border-gray-100 border-l-secondary shadow-sm">
                  <p className="font-medium text-primary m-0">
                    Complete our online enquiry form for an immediate response.
                    Receive prompt expert answers to your questions.
                  </p>
                </div>
                <p>
                  We guide women to make informed decisions about their care. We
                  private care within our established practicing private
                  clinics, hospital units or medical centres in London,
                  Manchester, Leeds, Harrogate and other West, North and East
                  Yorkshire towns.
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Specific Form Fields */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-7/12"
            >
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
                <div className="mb-8 border-b border-gray-100 pb-4">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    Your Details
                  </h3>
                  <p className="text-gray-500">
                    Please let us know how to get back to you
                  </p>
                </div>

                <form className="space-y-5">
                  {/* Your Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                    />
                  </div>

                  {/* Telephone */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                    />
                  </div>

                  {/* Your Email */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary">
                      Your email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                    />
                  </div>

                  {/* County & DOB Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-primary">
                        County
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5 relative">
                      <label className="text-sm font-bold text-primary">
                        DOB
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all appearance-none"
                          placeholder="mm/dd/yyyy"
                        />
                        <Calendar
                          size={18}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Method of Contact (Radio) */}
                  <div className="space-y-2 pt-2">
                    <label className="text-sm font-bold text-primary">
                      Preferred method of contact
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {["Phone Call", "Email", "Text Message"].map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              contactMethod === method
                                ? "border-secondary bg-white"
                                : "border-gray-300 bg-gray-50 group-hover:border-secondary"
                            }`}
                          >
                            {contactMethod === method && (
                              <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                            )}
                          </div>
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={contactMethod === method}
                            onChange={() => setContactMethod(method)}
                            className="hidden"
                          />
                          <span
                            className={`text-sm ${
                              contactMethod === method
                                ? "text-secondary font-bold"
                                : "text-gray-600"
                            }`}
                          >
                            {method}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Your Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary">
                      Your message (optional)
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#1a3a5e] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 mt-2">
                    <Send size={18} /> Submit Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM: OFFICE LOCATIONS */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
              Our Offices
            </h2>
            <p className="text-gray-500">
              Visit one of our regional hubs or drop us a letter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
            {LOCATIONS.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#F8F9FA] hover:bg-white p-6 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{loc.city}</h3>
                </div>

                <address className="not-italic space-y-3 text-sm text-gray-500">
                  <p className="flex items-start gap-3">
                    <span className="mt-1 w-4 block">
                      <MapPin size={14} className="text-gray-400" />
                    </span>
                    {loc.address}
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-4 block">
                      <Phone size={14} className="text-gray-400" />
                    </span>
                    <a
                      href={`tel:${loc.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-4 block">
                      <Mail size={14} className="text-gray-400" />
                    </span>
                    <a
                      href={`mailto:${loc.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {loc.email}
                    </a>
                  </p>
                </address>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
