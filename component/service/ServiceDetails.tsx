"use client";

import { ScrollMotion } from "@/component/motion";
import CommonHero from "@/component/shared/CommonHero";
import PageCTA from "@/component/shared/PageCTA";
import { getServiceBySlug, servicesData } from "@/data/servicesData";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Stethoscope,
  Target,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

interface ServiceDetailsProps {
  slug: string;
}

const ServiceDetails = ({ slug }: ServiceDetailsProps) => {
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    notFound();
  }

  // Get related services from the same category
  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Services", href: "/service" },
          { label: service.shortTitle, href: `/service/${service.slug}` },
        ]}
        images={[
          "/assets/urogynaecology/urogynaecology-hero-1.jpg",
          "/assets/urogynaecology/urogynaecology-hero-2.jpg",
        ]}
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <ScrollMotion animation="fadeInUp" duration={0.5}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                        {service.categoryLabel}
                      </span>
                      <h2 className="text-2xl font-heading font-bold text-primary">
                        Overview
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </ScrollMotion>

              {/* Symptoms Section */}
              <ScrollMotion animation="fadeInUp" delay={0.1} duration={0.5}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">
                      Common Symptoms
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.symptoms.map((symptom, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
                      >
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollMotion>

              {/* Causes Section */}
              <ScrollMotion animation="fadeInUp" delay={0.2} duration={0.5}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-amber-600" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">
                      Common Causes
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.causes.map((cause, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
                      >
                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollMotion>

              {/* Treatments Section */}
              <ScrollMotion animation="fadeInUp" delay={0.3} duration={0.5}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">
                      Treatment Options
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {service.treatments.map((treatment, index) => (
                      <div
                        key={index}
                        className="p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
                      >
                        <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-sm font-bold text-primary">
                            {index + 1}
                          </span>
                          {treatment.name}
                        </h3>
                        <p className="text-gray-600 ml-10">
                          {treatment.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollMotion>

              {/* Benefits Section */}
              <ScrollMotion animation="fadeInUp" delay={0.4} duration={0.5}>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">
                      Benefits of Treatment
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollMotion>

              {/* FAQs Section */}
              <ScrollMotion animation="fadeInUp" delay={0.5} duration={0.5}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-100 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpenFaq(openFaq === index ? null : index)
                          }
                          className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                        >
                          <span className="font-bold text-primary pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                              openFaq === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openFaq === index ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <p className="p-5 text-gray-600 leading-relaxed bg-white">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollMotion>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Book Appointment Card */}
              <ScrollMotion animation="fadeInRight" duration={0.5}>
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 text-white sticky top-32">
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Ready to Get Help?
                  </h3>
                  <p className="text-white/90 mb-6 text-sm leading-relaxed">
                    Take the first step towards better health. Book a
                    consultation with our specialist team today.
                  </p>
                  <Link
                    href="/book-appointment"
                    className="flex items-center justify-center gap-2 w-full bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-sm mb-2">
                      Or call us directly:
                    </p>
                    <a
                      href="tel:0207-117-6456"
                      className="text-xl font-bold hover:text-secondary transition-colors"
                    >
                      0207-117-6456
                    </a>
                  </div>
                </div>
              </ScrollMotion>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <ScrollMotion animation="fadeInRight" delay={0.2} duration={0.5}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-heading font-bold text-primary mb-4">
                      Related Services
                    </h3>
                    <div className="space-y-3">
                      {relatedServices.map((relatedService) => (
                        <Link
                          key={relatedService.slug}
                          href={`/service/${relatedService.slug}`}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <relatedService.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-medium text-gray-700 group-hover:text-primary transition-colors text-sm">
                              {relatedService.shortTitle}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollMotion>
              )}

              {/* Quick Links */}
              <ScrollMotion animation="fadeInRight" delay={0.3} duration={0.5}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-heading font-bold text-primary mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/service"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      All Services
                    </Link>
                    <Link
                      href="/urogynaecology"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      Urogynaecology
                    </Link>
                    <Link
                      href="/bladder-check"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      Free Bladder Check
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      Contact Us
                    </Link>
                  </div>
                </div>
              </ScrollMotion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageCTA
        title="Take Control of Your Health Today"
        description="Don't let bladder or pelvic floor problems hold you back. Our expert team is here to help you find the right treatment and get back to living your life."
        primaryButtonText="Book Consultation"
        primaryButtonHref="/book-appointment"
      />
    </>
  );
};

export default ServiceDetails;
