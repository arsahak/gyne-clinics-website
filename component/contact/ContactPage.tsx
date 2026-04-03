"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Building2,
  CheckCircle,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { CommonHero } from "../shared";

// --- Clinic Locations ---
const LOCATIONS = [
  {
    city: "London",
    address: "10, Harley Street,\nLondon W1G 9PF",
    whatsapp: "07538 295504",
    phone: "+44 7554 228100, 07538 295504",
    email: "info@gyneclinics.com",
  },
  {
    city: "Leeds",
    address: "Leeds Private Hospital\nRed Hall Lane\nLeeds. LS17 8NB",
    whatsapp: "07538 295504",
    phone: "+44 7554 228100, 07538 295504",
    email: "info@gyneclinics.com",
  },
  {
    city: "Manchester",
    address:
      "Manchester Private Hospital\nNew Court, Regent Place,\nWindsor Street, Salford\nManchester. M5 4HB",
    whatsapp: "07538 295504",
    phone: "+44 7554 228100, 07538 295504",
    email: "info@gyneclinics.com",
  },
];

// --- Collaboration Partners ---
const COLLABORATIONS = [
  {
    name: "One Health Group",
    url: "https://www.onehealth.co.uk/",
  },
  {
    name: "Nuffield Health Leeds",
    url: "https://www.nuffieldhealth.com/hospitals",
  },
  {
    name: "Yorkshire Clinic",
    url: "https://www.ramsayhealth.co.uk/hospitals/the-yorkshire-clinic",
  },
  {
    name: "Harley Health Village",
    url: "https://www.harleyhealthvillage.com/",
  },
  {
    name: "Centre for Surgery",
    url: "https://centreforsurgery.com/",
  },
  {
    name: "Kinvara Hospital",
    url: "https://kinvarahospital.co.uk/",
  },
  {
    name: "Claremont Hospital",
    url: "https://www.spirehealthcare.com/spire-claremont-hospital/",
  },
  {
    name: "Thornbury Hospital",
    url: "https://www.circlehealthgroup.co.uk/hospitals/thornbury-hospital",
  },
  {
    name: "Pall Mall Medical",
    url: "https://www.pallmallmedical.co.uk/",
  },
  {
    name: "Airedale NHS Trust",
    url: "https://www.airedale-trust.nhs.uk/",
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
    >,
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
      },
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
              Our Clinics
            </h2>
            <p className="text-gray-500 mb-2">
              <strong className="text-primary">Strictly By Appointment</strong>
            </p>
            <p className="text-gray-500 text-sm">
              We use various Clinics and Surgical Centres, depending on your
              location and clinical requirements and treatment pathway.
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
                    <span className="whitespace-pre-line">{loc.address}</span>
                  </p>
                  {/* WhatsApp hidden — number temporarily unavailable
                  <p className="flex items-center gap-3">
                    <span className="w-4 block">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </span>
                    <a
                      href={`https://wa.me/44${loc.whatsapp.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      WhatsApp: {loc.whatsapp}
                    </a>
                  </p>
                  */}
                  <p className="flex items-center gap-3">
                    <span className="w-4 block">
                      <Phone size={14} className="text-gray-400" />
                    </span>
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
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

      {/* 4. COLLABORATION PARTNERS */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full mb-4">
              Trusted Partners
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
              In Collaboration With
            </h2>
            <p className="text-gray-500 text-sm">
              We work with leading healthcare providers across the UK
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {COLLABORATIONS.map((partner, idx) => (
              <motion.a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white hover:bg-primary/5 p-4 md:p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center gap-2"
              >
                <Building2
                  size={20}
                  className="text-primary group-hover:text-secondary transition-colors"
                />
                <p className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors leading-tight">
                  {partner.name}
                </p>
                <ExternalLink
                  size={12}
                  className="text-gray-400 group-hover:text-secondary transition-colors"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
