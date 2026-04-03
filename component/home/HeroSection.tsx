"use client";

import { motion, Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  Droplet,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white flex flex-col justify-between pt-20 md:pt-[100px]">
      {/* ── Layer 0: Fallback image shown before video loads ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/heorimage.jpeg"
          alt="GyneClinics"
          fill
          className="object-cover"
          priority
          quality={95}
        />
      </div>

      {/* ── Layer 1: Local welcome video — plays clean, no dark screen ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-[1] w-full h-full object-cover"
      >
        <source src="/assets/home/welcome-video.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 2: Very light overlay — just enough for text readability ── */}
      {/* Top: barely-there so the video face shows through fully */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Gentle top-left shadow so navbar text stays readable */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/30 to-transparent" />
        {/* Soft bottom gradient for the discovery bar */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      {/* ── Layer 3: Content — sits bottom-centre, stays out of the way ── */}
      <div className="relative z-[3] flex flex-col justify-end items-center text-center grow px-4 container mx-auto pb-6 md:pb-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-[0.2em] uppercase shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
              GMC Registered Specialist
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] mb-4 tracking-tight drop-shadow-xl"
          >
            Expert Women&apos;s Care,{" "}
            <span className="text-secondary-300">Built Around You</span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link href="/contact">
              <button className="group inline-flex items-center gap-3 bg-secondary hover:bg-secondary-600 text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
                <CalendarCheck size={18} />
                Book a Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
            <Link href="/general-gynaecology">
              <button className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105">
                Our Services
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Discovery Bar at bottom ── */}
      <div className="relative z-[3] w-full bg-white/10 backdrop-blur-xl border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
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
    className="group flex items-center justify-between px-6 py-5 hover:bg-white/10 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-white font-semibold text-sm md:text-base leading-tight drop-shadow">
          {title}
        </p>
        <p className="text-white/60 text-xs uppercase tracking-wider mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
    <ArrowRight
      size={16}
      className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
    />
  </Link>
);

export default HeroSection;
