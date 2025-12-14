"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    // Updated Background: distinct dark slate for a premium look
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* --- MAIN GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. BRAND & ABOUT */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-3xl font-serif font-bold tracking-wide flex items-center gap-1"
            >
              Gyne<span className="text-teal-400">Clinics</span>
            </Link>
            <p className="text-white-400 text-sm leading-relaxed max-w-xs">
              Leading the way in Women&apos;s Health. We combine expert
              Gynaecology, Urogynaecology, and Aesthetic solutions in a private,
              trusted environment.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon href="#" icon={<Youtube size={18} />} />
              <SocialIcon href="#" icon={<Instagram size={18} />} />
              <SocialIcon href="#" icon={<Linkedin size={18} />} />
              <SocialIcon href="#" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* 2. CLINICAL CONDITIONS */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6 relative inline-block">
              Clinical Services
              {/* Decorative underline */}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
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
            <h3 className="text-white font-serif font-semibold text-lg mb-6 relative inline-block">
              Aesthetic & Booking
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <FooterLink href="/aesthetic/rejuvenation">
                Intimate Rejuvenation
              </FooterLink>
              <FooterLink href="/aesthetic/labiaplasty">Labiaplasty</FooterLink>
              <FooterLink href="/aesthetic/non-surgical">
                Non-Surgical Lifts
              </FooterLink>
              <div className="h-4"></div> {/* Spacer */}
              {/* Highlighted Links */}
              <li className="pt-2">
                <Link
                  href="/book-online"
                  className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors group"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-white hover:text-teal-300 font-medium transition-colors group"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. CONTACT & NEWSLETTER */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6 relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-teal-500 rounded-full"></span>
              </h3>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-slate-800 text-white group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <Mail size={16} />
                  </div>
                  <a
                    href="mailto:info@gyneclinics.com"
                    className="hover:text-white transition"
                  >
                    info@gyneclinics.com
                  </a>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-full bg-slate-800 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors mt-1">
                    <Phone size={16} />
                  </div>
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
            <div className="pt-2">
              <h4 className="text-white font-medium text-sm mb-3">
                Subscribe for updates
              </h4>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-md text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
                <button className="w-full bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold py-3 px-4 rounded-md transition-all shadow-lg shadow-teal-900/20">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- DISCLAIMER SECTION --- */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <h4 className="text-slate-300 text-sm font-bold uppercase tracking-widest mb-3">
            Medical Disclaimer
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed text-justify max-w-4xl">
            Every effort has been made to ensure that the details and factual
            matter on this website are as accurate as possible. However,
            GyneClinics accepts no responsibility for decisions or treatment
            based upon information contained therein. Information on this site
            is not intended to replace professional medical advice.
          </p>
        </div>

        {/* --- COPYRIGHT BAR --- */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-sm">
            © {new Date().getFullYear()} GyneClinics. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-300 font-medium">
            <Link href="/privacy" className="hover:text-teal-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-400 transition">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-teal-400 transition">
              Sitemap
            </Link>
          </div>

          <p className="text-slate-300 text-sm">
            Design & Developed by{" "}
            <Link
              href="https://arsahak.com"
              className="text-slate-400 hover:text-white transition"
            >
              AR Sahak
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
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link href={href} className="group flex items-center gap-2 w-fit">
      <motion.span
        className="block h-1.5 w-1.5 rounded-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors"
        whileHover={{ scale: 1.2 }}
      />
      <span className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
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
    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-teal-500 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-700 hover:border-teal-500"
  >
    {icon}
  </Link>
);

export default Footer;
