"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, Heart, Play, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UroIntro = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const keyPoints = [
    {
      icon: Heart,
      text: "Compassionate, confidential care",
    },
    {
      icon: Shield,
      text: "Evidence-based treatments",
    },
    {
      icon: Users,
      text: "Expert multidisciplinary team",
    },
  ];

  const VIDEO_ID = "wAntjj-n834";
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <div className="lg:w-1/2">
            <ScrollMotion animation="fadeInLeft" duration={0.5}>
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider rounded-full">
                  Expert Care
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                What is{" "}
                <span className="text-secondary italic font-serif">
                  Urogynaecology?
                </span>
              </h2>
              <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-5 mb-8">
                <p>
                  Urogynaecology is a specialized field dedicated to treating
                  women with pelvic floor disorders. The pelvic floor is a
                  complex system of muscles and ligaments that support your
                  bladder, bowel, and uterus.
                </p>
                <p>
                  Weakness in these areas can lead to{" "}
                  <strong className="text-primary font-semibold">
                    Incontinence
                  </strong>{" "}
                  (leaking) or{" "}
                  <strong className="text-primary font-semibold">
                    Prolapse
                  </strong>{" "}
                  (a feeling of heaviness). These conditions are incredibly
                  common, yet many women suffer in silence. Our goal is to
                  diagnose the root cause and offer solutions ranging from
                  physiotherapy to advanced reconstruction.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {keyPoints.map((point, index) => (
                  <ScrollMotion
                    key={index}
                    animation="scaleIn"
                    delay={0.3 + index * 0.1}
                    duration={0.4}
                    className="flex flex-col items-center text-center p-4 md:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:bg-primary/5 border border-gray-100 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <point.icon size={20} />
                    </div>
                    <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-primary transition-colors">
                      {point.text}
                    </p>
                  </ScrollMotion>
                ))}
              </div>

              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                <span>Book Consultation</span>
                <ArrowRight size={18} />
              </Link>
            </ScrollMotion>
          </div>

          {/* Video Side */}
          <div className="lg:w-1/2 w-full">
            <ScrollMotion animation="scaleIn" duration={0.5} delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 border-4 border-white">
                {isVideoPlaying ? (
                  // YouTube Embed
                  <iframe
                    src={embedUrl}
                    title="Dr Explaining Pelvic Health"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full absolute inset-0"
                  />
                ) : (
                  // Thumbnail with Play Button
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 group-hover:from-black/50 transition-colors" />
                    <Image
                      src={thumbnailUrl}
                      alt="Dr Explaining Pelvic Health"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />

                    {/* Play Button */}
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center z-20 shadow-2xl hover:scale-110 transition-transform duration-300 group cursor-pointer"
                      aria-label="Play video"
                    >
                      <Play
                        fill="currentColor"
                        className="text-primary ml-1"
                        size={32}
                      />
                    </button>

                    {/* Video Info */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <p className="font-bold text-lg mb-1">
                          Meet The Specialist
                        </p>
                        <p className="text-sm text-gray-200">
                          Understanding Pelvic Floor Health (3:45)
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UroIntro;
