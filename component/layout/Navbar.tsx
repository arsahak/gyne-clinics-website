"use client";

import { userSignOut } from "@/app/actions/auth";
import { useCart } from "@/context/CartContext";
import SearchModal from "@/component/shared/SearchModal";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Instagram,
  Linkedin,
  LogIn,
  LogOut,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// --- Mock User State (Replace this with your actual Auth Logic/Context later) ---
const MOCK_USER_LOGGED_IN = false; // Toggle this to true to see the "Signed In" view
const MOCK_USER_NAME = "Jane Doe"; // Replace with real user name

// --- Navigation Data Structure ---
const navLinks = [
  {
    title: "General Gynaecology",
    href: "/general-gynaecology",
    // subItems: [
    //   { name: "Health Checks & Screening", href: "/general/screening" },
    //   { name: "Menopause Management", href: "/general/menopause" },
    //   { name: "Fertility Services", href: "/general/fertility" },
    // ],
  },
  {
    title: "Urogynaecology",
    href: "/urogynaecology",
    // subItems: [
    //   { name: "Bladder Health", href: "/uro/bladder" },
    //   { name: "Incontinence Solutions", href: "/uro/incontinence" },
    //   { name: "Pelvic Floor Therapy", href: "/uro/pelvic-floor" },
    // ],
  },
  {
    title: "Menopause",
    href: "/menopause",
    // subItems: [
    //   { name: "Intimate Rejuvenation", href: "/aesthetic/rejuvenation" },
    //   { name: "Labiaplasty", href: "/aesthetic/labiaplasty" },
    //   { name: "Non-Surgical Lifts", href: "/aesthetic/non-surgical" },
    // ],
  },
  {
    title: "Aesthetic Gynaecology",
    href: "/aesthetic-gynaecology",
    subItems: [
      { name: "Surgical", href: "/aesthetic-gynaecology/surgical" },
      { name: "Non-Surgical", href: "/aesthetic-gynaecology/non-surgical" },
    ],
  },
];

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Desktop Nav Dropdown
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // User Profile Dropdown
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  // Helper function to check if a route is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cmd/Ctrl+K keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 w-full z-50 duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* 1. TOP BAR (Socials + Contact) */}
      <motion.div
        initial={{ height: 40, opacity: 1 }}
        animate={{ height: scrolled ? 0 : 40, opacity: scrolled ? 0 : 1 }}
        className="bg-primary-500 text-white text-xs overflow-hidden"
      >
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          {/* WhatsApp hidden — number temporarily unavailable
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/447538295504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors text-xs md:text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>07538 295504</span>
            </a>
          </div>
          */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@gyneclinics?si=7H7Z50gLhaAZB-yX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-secondary transition-colors"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://www.instagram.com/mygyneclinics?igsh=MWR0aXpxZ2xneXV6Nw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-secondary transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/gyneclinicsltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-secondary transition-colors"
            >
              <Linkedin size={16} />
            </a>

            {/* CART ICON - TOP BAR */}
            {/* <Link href="/cart" className="relative ml-4">
              <button
                className="relative p-1.5 hover:text-secondary transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={16} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                )}
              </button>
            </Link> */}

            {/* AUTH SECTION - MOVED TO TOP BAR */}
            {/* <div className="ml-2 pl-4 border-l border-primary-400 flex items-center gap-4">
              {!isLoggedIn ? (
                <Link
                  href="/sign-in"
                  className="hover:text-secondary transition-colors text-xs md:text-sm"
                >
                  Sign In
                </Link>
              ) : (
                <Link
                  href="/dashboard"
                  className="hover:text-secondary transition-colors text-xs md:text-sm"
                >
                  Dashboard
                </Link>
              )}
            </div> */}
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-primary-500 shrink-0"
          >
            <Image
              src="/assets/logo/gyneclinics-logo.webp"
              alt="GyneClinics"
              width={500}
              height={300}
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION - CENTERED */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navLinks?.map((link, index) => {
              const hasSubItems = link.subItems && link.subItems.length > 0;
              const isMainActive = !hasSubItems && isActiveRoute(link.href);
              const isSubItemActive =
                hasSubItems &&
                link.subItems?.some((sub) => isActiveRoute(sub.href));
              const isActive = isMainActive || isSubItemActive;

              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hasSubItems ? (
                    // Main item with subItems - not clickable
                    <button
                      className={`flex items-center gap-1 font-medium py-2 cursor-pointer ${
                        isActive
                          ? "text-secondary"
                          : "text-primary-500 hover:text-secondary"
                      }`}
                    >
                      {link.title}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          hoveredIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    // Main item without subItems - clickable
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 font-medium py-2 ${
                        isActive
                          ? "text-secondary"
                          : "text-primary-500 hover:text-secondary"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}

                  {/* Submenu Dropdown - Only show if subItems exist */}
                  <AnimatePresence>
                    {hoveredIndex === index &&
                      link.subItems &&
                      link.subItems.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-md border-t-4 border-secondary overflow-hidden"
                        >
                          <div className="py-2">
                            {link.subItems.map((sub, i) => {
                              const isSubActive = isActiveRoute(sub.href);
                              return (
                                <Link
                                  key={i}
                                  href={sub.href}
                                  className={`block px-4 py-3 text-sm transition-colors ${
                                    isSubActive
                                      ? "bg-[#FAF9F6] text-secondary font-medium"
                                      : "text-gray-700 hover:bg-[#FAF9F6] hover:text-secondary"
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE ACTIONS (Separator + CTA) */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
          
          

            {/* SEARCH BUTTON */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors p-2 hover:bg-gray-50 rounded-full"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* CTA BUTTON */}
            <Link href="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-secondary-600 transition-colors"
              >
                <Calendar size={18} />
                <span>Book Consultation</span>
              </motion.button>
            </Link>
          </div>

          {/* MOBILE ACTIONS (Cart + Menu Toggle) */}
          <div className="lg:hidden flex items-center gap-4">
            {/* MOBILE CART ICON */}
            <Link href="/cart" className="relative">
              <button
                className="relative p-2 text-[#0A2342]"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                )}
              </button>
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="text-[#0A2342]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
            <div className="flex flex-col p-4 space-y-6">
              {/* Links */}
              {navLinks.map((link, index) => {
                const hasSubItems = link.subItems && link.subItems.length > 0;
                const isMainActive = !hasSubItems && isActiveRoute(link.href);
                const isSubItemActive =
                  hasSubItems &&
                  link.subItems?.some((sub) => isActiveRoute(sub.href));

                return (
                  <div key={index} className="space-y-2">
                    <span
                      className={`block font-bold uppercase text-xs tracking-wider border-b border-gray-100 pb-1 ${
                        isMainActive || isSubItemActive
                          ? "text-secondary"
                          : "text-gray-600"
                      }`}
                    >
                      {link.title}
                    </span>
                    {hasSubItems ? (
                      link.subItems.map((sub, i) => {
                        const isSubActive = isActiveRoute(sub.href);
                        return (
                          <Link
                            key={i}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`block pl-2 font-medium py-1.5 text-sm ${
                              isSubActive
                                ? "text-secondary"
                                : "text-primary-500"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block pl-2 font-medium py-1.5 text-sm ${
                          isMainActive ? "text-secondary" : "text-primary-500"
                        }`}
                      >
                        View {link.title}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* Mobile Cart Link */}
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-between gap-2 border border-gray-200 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} className="text-primary-500" />
                  <span className="text-primary-700 font-medium">
                    Shopping Cart
                  </span>
                </div>
                {cartItemCount > 0 && (
                  <span className="bg-secondary text-white text-xs font-bold rounded-full px-2 py-1 min-w-[24px] text-center">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Auth & CTA Section */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                {/* Mobile Sign In / Sign Out */}
                {!isLoggedIn ? (
                  <Link
                    href="/sign-in"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 border border-primary-500 text-primary-500 py-2.5 rounded-md font-medium"
                  >
                    <LogIn size={18} /> Sign In
                  </Link>
                ) : (
                  <div className="space-y-2">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center gap-2 px-4 py-2 text-primary-700 font-medium bg-gray-50 rounded-md"
                    >
                      <User size={18} /> My Dashboard
                    </Link>
                    <button
                      onClick={async () => {
                        await userSignOut();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 border border-red-200 text-red-600 py-2 rounded-md font-medium text-sm hover:bg-red-50"
                    >
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                )}

                <Link
                  href="/book-appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-3 rounded-md font-bold shadow-md"
                >
                  <Calendar size={18} /> Book Consultation Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

    {/* Search Modal — rendered outside header so it overlays entire page */}
    <SearchModal
      isOpen={isSearchOpen}
      onClose={() => setIsSearchOpen(false)}
    />
    </>
  );
};

export default Navbar;
