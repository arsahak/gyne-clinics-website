"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// --- Color Palette Reference ---
// Bg: Primary-500 (Teal)
// Text: White / Primary-50
// Accent: Secondary (Purple) or Gold (#C5A059)

const Footer = () => {
  // Function to scroll back to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4">
        {/* --- MAIN GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. BRAND & ABOUT */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-3xl font-serif font-bold tracking-wide"
            >
              Gyne<span className="text-secondary">Clinics</span>
            </Link>
            <p className="text-primary-50 text-sm leading-relaxed mt-4">
              Leading the way in Women's Health, combining expert Gynaecology,
              Urogynaecology, and Aesthetic solutions in a private, trusted
              environment.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon href="#" icon={<Youtube size={20} />} />
              <SocialIcon href="#" icon={<Instagram size={20} />} />
              <SocialIcon href="#" icon={<Linkedin size={20} />} />
              <SocialIcon href="#" icon={<Facebook size={20} />} />
            </div>
          </div>

          {/* 2. CLINICAL CONDITIONS (General & Uro) */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">
              Clinical Services
            </h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <FooterLink href="/general/screening">
                Health Screening
              </FooterLink>
              <FooterLink href="/general/menopause">
                Menopause Clinic
              </FooterLink>
              <FooterLink href="/uro/incontinence">
                Incontinence Solutions
              </FooterLink>
              <FooterLink href="/uro/bladder">Bladder Health</FooterLink>
              <FooterLink href="/general/fertility">
                Fertility Services
              </FooterLink>
            </ul>
          </div>

          {/* 3. AESTHETICS & BOOKING */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">
              Aesthetic & Booking
            </h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <FooterLink href="/aesthetic/rejuvenation">
                Intimate Rejuvenation
              </FooterLink>
              <FooterLink href="/aesthetic/labiaplasty">Labiaplasty</FooterLink>
              <FooterLink href="/aesthetic/non-surgical">
                Non-Surgical Lifts
              </FooterLink>
              <div className="h-2"></div> {/* Spacer */}
              <FooterLink href="/book-online" highlight>
                📅 Book Appointment
              </FooterLink>
              <FooterLink href="/contact" highlight>
                📞 Contact Us
              </FooterLink>
            </ul>
          </div>

          {/* 4. CONTACT & NEWSLETTER */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3 text-sm text-primary-100">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-white" />
                  <a
                    href="mailto:info@gyneclinics.com"
                    className="hover:text-white transition"
                  >
                    info@gyneclinics.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-white mt-1" />
                  <div className="flex flex-col">
                    <a
                      href="tel:02071176456"
                      className="hover:text-white transition"
                    >
                      0207-117-6456
                    </a>
                    <a
                      href="tel:01135315007"
                      className="hover:text-white transition"
                    >
                      0113-531-5007
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium text-sm mb-2">
                Subscribe for updates
              </h4>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-primary-400/30 text-white placeholder-primary-200 px-4 py-2 rounded text-sm focus:outline-none focus:border-white transition-colors"
                />
                <button className="bg-secondary hover:bg-secondary-600 text-white text-sm font-semibold py-2 px-4 rounded transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- DISCLAIMER SECTION (Medical Compliance) --- */}
        <div className="border-t border-primary-700/50 pt-8 pb-8">
          <h4 className="text-primary-200 text-xs font-bold uppercase tracking-wider mb-2">
            Medical Disclaimer
          </h4>
          <p className="text-primary-200/80 text-xs leading-relaxed text-justify">
            Every effort has been made to ensure that the details and factual
            matter on this website are as accurate as possible. However,
            GyneClinics accepts no responsibility for decisions or treatment
            based upon information contained therein. Information on this site
            is not intended to replace professional medical advice, diagnosis,
            or treatment. Always seek the advice of your physician or other
            qualified health provider with any questions you may have regarding
            a medical condition.
          </p>
        </div>

        {/* --- COPYRIGHT BAR --- */}
        <div className="border-t border-primary-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-200 text-xs">
            © Copyright {new Date().getFullYear()} GyneClinics. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 text-xs text-primary-200">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>

          <p className="text-primary-200 text-xs">
            Design & Developed by{" "}
            <Link
              href="https://arsahak.com"
              className="hover:text-white transition"
            >
              arsahak
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- HELPER COMPONENTS ---

const FooterLink = ({
  href,
  children,
  highlight = false,
}: {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
}) => (
  <li>
    <Link href={href} className="group flex items-center gap-2 w-fit">
      <motion.span
        className={`block h-1.5 w-1.5 rounded-full ${
          highlight ? "bg-white" : "bg-primary-300 group-hover:bg-white"
        }`}
        whileHover={{ scale: 1.5 }}
      />
      <span
        className={`${
          highlight ? "text-white font-medium" : "text-primary-100"
        } group-hover:text-white transition-colors`}
      >
        {children}
      </span>
    </Link>
  </li>
);

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </Link>
);

export default Footer;
