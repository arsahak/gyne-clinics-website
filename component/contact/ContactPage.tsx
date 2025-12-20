"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { CommonHero } from "../shared";

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
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Gynaecology",
    message: "",
  });

  // 2. State for Validation Errors
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // 3. Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // 4. Validation Logic
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", phone: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 5. Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    // Replace with your actual EmailJS credentials
    const SERVICE_ID = "service_9r35cp1";
    const TEMPLATE_ID = "template_uwl7heu";
    const PUBLIC_KEY = "Fg6wC9UjjYthOcSSS";

    const templateParams = {
      user_name: formData.name,
      user_phone: formData.phone,
      user_email: formData.email,
      selected_service: formData.service,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "General Gynaecology",
          message: "",
        });
      },
      (err) => {
        console.log("FAILED...", err);
        setStatus("error");
        alert("Failed to send. Please try again.");
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] mt-[50px] md:mt-[130px]">
      {/* 1. PAGE HERO */}
      <CommonHero
        title="Contact Us"
        subtitle="We guide women to make informed decisions about their care."
        images={[
          "/assets/home/banner1.svg",
          "/assets/home/banner2.svg",
          "/assets/home/banner3.svg",
        ]}
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* 2. MAIN CONTENT: TEXT & FORM */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* LEFT SIDE: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-5/12 flex flex-col gap-6"
            >
              <h3 className="text-2xl font-heading font-bold text-primary border-l-4 border-secondary pl-4">
                Get in Touch
              </h3>

              <div className="prose prose-sm md:prose-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  To learn more about any of these conditions, to arrange
                  consultation or to make an email or telephone enquiry or an
                  e-consultation, or simply to ask questions, do follow the
                  links.
                </p>
                <p>
                  To help you have readily available information that you can
                  refer to, time and again, we have also reproduced the clinical
                  content of this website in our e-booklet.
                </p>
                <div className="bg-white p-5 rounded-xl border-l-4 border-secondary shadow-sm">
                  <p className="font-medium text-primary m-0">
                    Complete our online enquiry form for an immediate response.
                    Our team is dedicated to answering your questions promptly.
                  </p>
                </div>
                <p>
                  We guide women to make informed decisions about their care
                  across our established clinics in London, Manchester, and
                  beyond.
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE: The Form Card (Matching your Image) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-7/12"
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                {/* Form Header */}
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-[#0E4B65] mb-2">
                    Request Consultation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Fill out the details below and we will contact you to
                    arrange a suitable time.
                  </p>
                </div>

                {status === "success" ? (
                  // SUCCESS STATE
                  <div className="text-center py-10 animate-fade-in bg-green-50 rounded-xl">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      Enquiry Sent!
                    </h4>
                    <p className="text-gray-500 mb-6 px-4">
                      Thank you. We have received your request and will be in
                      touch shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-secondary font-bold underline hover:text-primary transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  // FORM STATE
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-[#0E4B65] uppercase tracking-widest ml-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="e.g. Sarah Jones"
                          className={`w-full bg-[#F8F9FA] border rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all
                            ${
                              errors.name
                                ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:border-[#8D4E85] focus:ring-[#8D4E85]"
                            }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-[#0E4B65] uppercase tracking-widest ml-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          placeholder="e.g. +44 7700 900000"
                          className={`w-full bg-[#F8F9FA] border rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all
                            ${
                              errors.phone
                                ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:border-[#8D4E85] focus:ring-[#8D4E85]"
                            }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-[#0E4B65] uppercase tracking-widest ml-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="e.g. sarah@example.com"
                        className={`w-full bg-[#F8F9FA] border rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all
                          ${
                            errors.email
                              ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:border-[#8D4E85] focus:ring-[#8D4E85]"
                          }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Row 3: Service */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-[#0E4B65] uppercase tracking-widest ml-1">
                        Service of Interest
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:border-[#8D4E85] focus:ring-1 focus:ring-[#8D4E85] transition-all appearance-none cursor-pointer"
                        >
                          <option>General Gynaecology</option>
                          <option>Menopause / HRT</option>
                          <option>Urogynaecology / Bladder</option>
                          <option>Aesthetic / Cosmetic</option>
                          <option>Fertility</option>
                          <option>Other Enquiry</option>
                        </select>
                        {/* Custom arrow icon for cleaner look */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L6 6.5L11 1.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-[#0E4B65] uppercase tracking-widest ml-1">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Please tell us briefly how we can help..."
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8D4E85] focus:ring-1 focus:ring-[#8D4E85] transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-[#8D4E85] text-white font-bold text-lg py-3 rounded-lg hover:bg-[#723d6d] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex justify-center items-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 mt-4"
                    >
                      {status === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          <span>Book Consultation</span>
                          <Send size={18} className="ml-1" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                      By submitting this form, you agree to our privacy policy.
                      Your data is secure.
                    </p>
                  </form>
                )}
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
