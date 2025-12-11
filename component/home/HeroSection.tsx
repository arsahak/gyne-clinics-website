"use client";

import { motion, Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  Droplet,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const VIDEO_ID = "wAntjj-n834";
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&showinfo=0&rel=0&disablekb=1&modestbranding=1`;

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary flex flex-col justify-between pt-20 md:pt-[100px]">
      {/* --- 1. BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2">
          <iframe
            src={embedUrl}
            className="w-full h-full opacity-70"
            title="Ambient Background"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none" }}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/40 to-primary/90 z-10" />

      {/* --- 2. MAIN CENTER CONTENT --- */}
      <div className="relative z-20 container mx-auto px-4 flex-grow flex flex-col justify-center items-center text-center mt-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl flex flex-col items-center"
        >
          {/* Subtle Tag */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-primary/30 backdrop-blur-md text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              Excellence in Care
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6 drop-shadow-xl"
          >
            Reimagining <br className="hidden md:block" />
            <span className="text-secondary italic font-serif">
              Women's Health
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-200 md:text-2xl leading-relaxed max-w-2xl mx-auto font-light drop-shadow-md"
          >
            A private sanctuary dedicated to your complete well-being, comfort,
            and confidence.
          </motion.p>
        </motion.div>
      </div>

      {/* --- 3. THE "DISCOVERY BAR" (REPLACES BUTTONS) --- */}
      {/* This sits at the bottom, guiding users to specific areas elegantly */}
      <div className="relative z-30 w-full border-t border-white/10 bg-primary/60 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Item 1 */}
            <DiscoveryLink
              href="/general"
              title="General Gynaecology"
              subtitle="Wellness & Screening"
              icon={<Activity size={20} />}
            />

            {/* Item 2 */}
            <DiscoveryLink
              href="/urogynaecology"
              title="Urogynaecology"
              subtitle="Bladder & Pelvic Health"
              icon={<Droplet size={20} />}
            />

            {/* Item 3 */}
            <DiscoveryLink
              href="/aesthetic"
              title="Aesthetic Gynaecology"
              subtitle="Rejuvenation & Beauty"
              icon={<Sparkles size={20} />}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Optional Visual Queue) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce md:hidden"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

// --- Helper Component for the Bar ---
const DiscoveryLink = ({ href, title, subtitle, icon }: any) => {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between p-6 hover:bg-white/5 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="text-secondary/80 group-hover:text-secondary transition-colors">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="text-white font-heading font-semibold text-lg group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-xs uppercase tracking-wider group-hover:text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="text-gray-500 group-hover:translate-x-1 group-hover:text-secondary transition-all">
        <ArrowRight size={20} />
      </div>
    </Link>
  );
};

export default HeroSection;
