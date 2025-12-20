"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import Link from "next/link";

interface PageCTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  phoneNumber?: string;
  variant?: "primary" | "secondary";
}

const PageCTA = ({
  title,
  description,
  primaryButtonText = "Book Appointment",
  primaryButtonHref = "/book-appointment",
  secondaryButtonText,
  secondaryButtonHref,
  phoneNumber = "0207-117-6456",
  variant = "primary",
}: PageCTAProps) => {
  const isPrimary = variant === "primary";

  return (
    <section
      className={`py-16 md:py-24 ${
        isPrimary
          ? "bg-gradient-to-br from-primary via-primary to-primary/90 text-white"
          : "bg-gray-50 text-primary"
      } relative overflow-hidden`}
    >
      {/* Background Decorations */}
      {isPrimary && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
              isPrimary ? "text-white" : "text-primary"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${
              isPrimary ? "text-white/90" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 ${
                isPrimary
                  ? "bg-white text-primary hover:bg-gray-100 hover:scale-105"
                  : "bg-primary text-white hover:bg-[#1a3a5e] hover:scale-105"
              }`}
            >
              <Calendar size={20} />
              <span>{primaryButtonText}</span>
              <ArrowRight size={18} />
            </Link>

            {secondaryButtonText && secondaryButtonHref ? (
              <Link
                href={secondaryButtonHref}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 ${
                  isPrimary
                    ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    : "border-primary text-primary hover:bg-primary/5"
                }`}
              >
                {secondaryButtonText}
              </Link>
            ) : phoneNumber ? (
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 ${
                  isPrimary
                    ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    : "border-primary text-primary hover:bg-primary/5"
                }`}
              >
                <Phone size={18} />
                <span>{phoneNumber}</span>
              </a>
            ) : null}
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default PageCTA;

