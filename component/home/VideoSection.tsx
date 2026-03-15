"use client";

import { ScrollMotion } from "@/component/motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const VIDEO_ID = "Bg1n1LxBk90"; // GyneClinics YouTube Video
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion animation="fadeInUp" duration={0.5}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full mb-4">
              Watch Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Discover GyneClinics
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Learn more about our approach to women's healthcare and meet our expert team
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 border-4 border-white">
              {isVideoPlaying ? (
                // YouTube Embed
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="GyneClinics Introduction Video"
                />
              ) : (
                // Thumbnail with Play Button
                <>
                  <Image
                    src={thumbnailUrl}
                    alt="GyneClinics Video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play size={32} className="text-primary ml-1" fill="currentColor" />
                    </div>
                  </button>

                  {/* Video Info */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      Welcome to GyneClinics
                    </h3>
                    <p className="text-sm md:text-base opacity-90">
                      Expert women's healthcare with compassion and professionalism
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Video Caption */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Learn about our services, facilities, and commitment to exceptional women's health
              </p>
            </div>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default VideoSection;
