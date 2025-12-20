"use client";

import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { InlineWidget } from "react-calendly";

export default function BookConsultation() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
        {/* Main Card Container - Elevated for premium feel */}
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row min-h-[700px] mx-auto">
          {/* LEFT SIDE: Trust & Information */}
          <div className="lg:w-2/5 bg-primary/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decor element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                New Patients Welcome
              </span>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Schedule Your <br /> Consultation
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Take the next step towards your health. Our specialists are
                ready to provide expert, confidential care tailored to your
                needs.
              </p>

              {/* Value Props List */}
              <div className="space-y-4 mb-10">
                {[
                  "Board-Certified Gynecologists",
                  "Private & Confidential Environment",
                  "Minimal Wait Times",
                  "Comprehensive Care Plans",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details Footer */}
            <div className="space-y-4 pt-8 border-t border-primary/10">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:02071176456"
                  className="hover:text-primary transition-colors"
                >
                  0207-117-6456
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@gyneclinics.com"
                  className="hover:text-primary transition-colors"
                >
                  info@gyneclinics.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-primary" />
                <span>10 Harley Street, London. W1G 9PF</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Calendly Widget */}
          <div className="lg:w-3/5 bg-white relative">
            <InlineWidget
              url="https://calendly.com/gyneclinicsdev/30min"
              styles={{
                height: "100%",
                minHeight: "700px",
                width: "100%",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
                primaryColor: "00a2c7",
                textColor: "4d5055",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
