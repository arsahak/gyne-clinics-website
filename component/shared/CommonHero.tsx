"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

interface CommonHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  images: string[];
}

const CommonHero = ({
  title,
  subtitle,
  breadcrumbs = [],
  images,
}: CommonHeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  // Preload all images for smooth transitions
  useEffect(() => {
    if (typeof window === "undefined" || images.length === 0) return;
    
    const preloadImages = () => {
      images.forEach((src, index) => {
        // Use window.Image to avoid conflict with Next.js Image import
        const img = new window.Image();
        img.onload = () => {
          setImagesLoaded((prev) => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
        };
        img.onerror = () => {
          // Handle error gracefully - still mark as attempted
          setImagesLoaded((prev) => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
        };
        img.src = src;
      });
    };
    
    preloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  // Optimized auto-slide logic with smooth transitions
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  // Optimized animation variants with faster, smoother transitions
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
          duration: 0.5,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1] as const, // Optimized easing
        },
      },
    }),
    []
  );

  const imageVariants = useMemo(
    () => ({
      initial: { opacity: 0, scale: 1.05, y: "3%" },
      animate: {
        opacity: 1,
        scale: 1,
        y: "-3%",
        transition: {
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1] as const,
        },
      },
      exit: {
        opacity: 0,
        scale: 1.05,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1] as const,
        },
      },
    }),
    []
  );

  return (
    <section className="relative h-[55vh] min-h-[500px] lg:h-[65vh] w-full overflow-hidden flex items-center justify-center mt-[50px] md:mt-[130px]">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        {/* Loading placeholder */}
        {imagesLoaded.size === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImage}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <Image
              src={images[currentImage]}
              alt={`Hero Background ${currentImage + 1}`}
              fill
              className="object-cover"
              priority={currentImage === 0}
              quality={90}
              sizes="100vw"
              loading={currentImage === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Preload next image */}
        {images.length > 1 && (
          <div className="hidden">
            <Image
              src={images[(currentImage + 1) % images.length]}
              alt="Preload"
              width={1}
              height={1}
              priority={false}
            />
          </div>
        )}

        {/* --- OPTIMIZED OVERLAYS --- */}
        {/* Combined overlays for better performance */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Primary Color Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          
          {/* Bottom accent gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-90" />
          
          {/* Glass blur effect at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-24 backdrop-blur-sm bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-4 relative z-20 mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-2 text-white/80 text-xs uppercase tracking-widest font-semibold mb-6"
            >
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight size={12} className="opacity-60" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white border-b border-white/40 pb-0.5">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.nav>
          )}

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading tracking-tight leading-[1.1] drop-shadow-2xl will-change-transform"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CommonHero;
