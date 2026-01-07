"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { blogArticles } from "@/data/blogArticles";

const LatestArticlesSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Handler
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Approx card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- HEADER WITH NAVIGATION --- */}
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold tracking-wider uppercase text-xs rounded-full">
                Stay Informed
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Latest on Gynaecology
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full"></div>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </ScrollMotion>

        {/* --- SCROLLABLE CONTAINER (SLIDER) --- */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogArticles.map((article, index) => {
            const ArticleIcon = article.icon;
            return (
              <ScrollMotion
                key={`${article.id}-${index}`}
                animation="fadeInRight"
                delay={index * 0.1}
                duration={0.4}
                className="min-w-[85vw] md:min-w-[380px] lg:min-w-[420px] snap-center"
              >
                <Link href={`/blog/${article.slug}`} className="group h-full block">
                  <article className="h-full bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        width={400}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${article.categoryColor} flex items-center justify-center`}>
                          <ArticleIcon size={12} className="text-white" />
                        </div>
                        {article.category}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col grow">
                      {/* Date & Read Time */}
                      <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {article.date}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-500 mb-6 line-clamp-3 grow">
                        {article.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                        Read Article
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollMotion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSlider;
