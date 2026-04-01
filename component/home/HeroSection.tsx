"use client";

import { motion, Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  Droplet,
  Play,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const VIDEO_ID = "Bg1n1LxBk90";
const videoEmbedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=0`;

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-emerald-900 flex flex-col justify-between pt-20 md:pt-[100px]">
      {/* ── Layer 1: YouTube background video ── */}
      {isMounted && (
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          <iframe
            src={videoEmbedUrl}
            title="GyneClinics Background Video"
            allow="autoplay; encrypted-media"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "calc(max(100vw, 177.78vh))",
              height: "calc(max(100vh, 56.25vw))",
              transform: "translate(-50%, -50%)",
              border: "none",
              pointerEvents: "none",
              opacity: 0.65,
            }}
          />
        </div>
      )}

      {/* ── Layer 2: Cinematic overlay — dark edges, light centre ── */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        {/* Left-right vignette */}
        <div className="absolute inset-0 bg-linear-to-r from-emerald-900/75 via-transparent to-emerald-900/50" />
        {/* Top-to-bottom: keep top readable, darken bottom for bar */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/80" />
        {/* Subtle emerald brand tint over center */}
        <div className="absolute inset-0 bg-emerald-900/20" />
      </div>

      {/* ── Layer 3: Main Content ── */}
      <div className="relative z-3 flex flex-col justify-center items-center text-center grow px-4 container mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-[0.2em] uppercase shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              GMC Registered Specialist
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-white leading-[1.08] mb-5 tracking-tight drop-shadow-2xl"
          >
            Expert Women&apos;s Care, <br className="hidden sm:block" />
            <span className="text-emerald-300">Built Around You</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-normal mb-10 drop-shadow"
          >
            A private sanctuary dedicated to your complete well-being —
            specialist gynaecological care at every stage of your life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <button className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm md:text-base px-7 py-4 rounded-full shadow-2xl shadow-emerald-900/40 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30">
                <CalendarCheck size={18} />
                Book a Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
            <Link href="#search">
              <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm md:text-base px-7 py-4 rounded-full transition-all duration-300 hover:scale-105">
                <Play size={16} className="fill-white" />
                Our Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Layer 3: Discovery Bar at bottom ── */}
      <div className="relative z-3 w-full bg-white/5 backdrop-blur-xl border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <DiscoveryLink
              href="/general-gynaecology"
              title="General Gynaecology"
              subtitle="Wellness & Screening"
              icon={<Activity size={18} />}
            />
            <DiscoveryLink
              href="/urogynaecology"
              title="Urogynaecology"
              subtitle="Bladder & Pelvic Health"
              icon={<Droplet size={18} />}
            />
            <DiscoveryLink
              href="/aesthetic-gynaecology"
              title="Aesthetic Gynaecology"
              subtitle="Rejuvenation & Beauty"
              icon={<Sparkles size={18} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DiscoveryLink = ({
  href,
  title,
  subtitle,
  icon,
}: {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    className="group flex items-center justify-between px-6 py-5 hover:bg-white/8 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-white font-semibold text-sm md:text-base leading-tight">
          {title}
        </p>
        <p className="text-white/50 text-xs uppercase tracking-wider mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
    <ArrowRight
      size={16}
      className="text-white/30 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all duration-300"
    />
  </Link>
);

export default HeroSection;
