"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Instagram,
  Linkedin,
  Menu,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// --- Color Palette Reference (Tailwind Config is better, but using arbitrary values for copy-paste ease) ---
// Primary: #0A2342 (Deep Blue)
// Secondary: #C5A059 (Muted Gold)
// Bg: #FAFAFA (Off White)

// --- Navigation Data Structure ---
const navLinks = [
  {
    title: "General Gynaecology",
    href: "/general",
    subItems: [
      { name: "Health Checks & Screening", href: "/general/screening" },
      { name: "Menopause Management", href: "/general/menopause" },
      { name: "Fertility Services", href: "/general/fertility" },
    ],
  },
  {
    title: "Urogynaecology",
    href: "/urogynaecology",
    subItems: [
      { name: "Bladder Health", href: "/uro/bladder" },
      { name: "Incontinence Solutions", href: "/uro/incontinence" },
      { name: "Pelvic Floor Therapy", href: "/uro/pelvic-floor" },
    ],
  },
  {
    title: "Aesthetic Gynaecology",
    href: "/aesthetic",
    subItems: [
      { name: "Intimate Rejuvenation", href: "/aesthetic/rejuvenation" },
      { name: "Labiaplasty", href: "/aesthetic/labiaplasty" },
      { name: "Non-Surgical Lifts", href: "/aesthetic/non-surgical" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Desktop Dropdown State
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* 1. TOP BAR (Socials + Contact) - Hides on scroll to save space */}
      <motion.div
        initial={{ height: 40, opacity: 1 }}
        animate={{ height: scrolled ? 0 : 40, opacity: scrolled ? 0 : 1 }}
        className="bg-[#0A2342] text-white text-xs overflow-hidden"
      >
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Replace with real phone number */}
            <a
              href="tel:+123456789"
              className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
            >
              <Phone size={14} /> <span>+880 1234 567 890</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-[#C5A059] transition-colors"
            >
              <Youtube size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#C5A059] transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#C5A059] transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-[#0A2342]"
          >
            Gyne<span className="text-[#C5A059]">Clinics</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[#0A2342] font-medium hover:text-[#C5A059] transition-colors py-2"
                >
                  {link.title}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      hoveredIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-md border-t-4 border-[#C5A059] overflow-hidden"
                    >
                      <div className="py-2">
                        {link.subItems.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#FAF9F6] hover:text-[#C5A059] transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden lg:block">
            <Link href="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#C5A059] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-[#b08d48] transition-colors"
              >
                <Calendar size={18} />
                <span>Book Consultation</span>
              </motion.button>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-[#0A2342]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link, index) => (
                <div key={index} className="space-y-2">
                  <span className="block text-[#C5A059] font-bold uppercase text-xs tracking-wider">
                    {link.title}
                  </span>
                  {link.subItems.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="block pl-4 text-[#0A2342] font-medium py-1"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ))}
              <hr className="border-gray-100" />
              <Link
                href="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#0A2342] text-white py-3 rounded-md font-bold"
              >
                Book Consultation Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
