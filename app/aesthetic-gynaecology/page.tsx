"use client";
import { ScrollMotion } from "@/component/motion";
import { CommonHero, PageCTA } from "@/component/shared";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Gem,
  Heart,
  Lock,
  Scissors,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AestheticGynaecologyPage() {
  const [activeMode, setActiveMode] = useState<"nonSurgical" | "surgical">(
    "nonSurgical"
  );

  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  const nonSurgicalTreatments = [
    {
      title: "Laser Rejuvenation",
      slug: "laser-rejuvenation",
      desc: "FDA-approved CO2 laser therapy for vaginal tightening, tissue regeneration, and improved lubrication",
      time: "15 mins",
      recovery: "No downtime",
      benefits: [
        "Vaginal tightening",
        "Improved lubrication",
        "Enhanced sensation",
        "Urinary incontinence improvement",
      ],
    },
    {
      title: "O-Shot (PRP)",
      slug: "o-shot",
      desc: "Platelet-Rich Plasma therapy to enhance sensitivity, natural lubrication, and orgasmic response",
      time: "30 mins",
      recovery: "Immediate return",
      benefits: [
        "Enhanced sensitivity",
        "Improved orgasmic function",
        "Natural lubrication",
        "Urinary incontinence relief",
      ],
    },
    {
      title: "Intimate Fillers",
      slug: "intimate-fillers",
      desc: "Medical-grade hyaluronic acid for labial augmentation, G-spot enhancement, and vaginal rejuvenation",
      time: "20 mins",
      recovery: "Minimal swelling",
      benefits: [
        "Labial plumping",
        "G-spot enhancement",
        "Improved appearance",
        "Increased confidence",
      ],
    },
  ];

  const surgicalTreatments = [
    {
      title: "Labiaplasty",
      slug: "labiaplasty",
      desc: "Precision surgical reshaping of labia minora/majora to reduce discomfort and enhance appearance",
      time: "1-2 hours",
      recovery: "1-2 weeks",
      benefits: [
        "Reduced discomfort",
        "Improved appearance",
        "Enhanced confidence",
        "Better hygiene",
      ],
    },
    {
      title: "Vaginoplasty",
      slug: "vaginoplasty",
      desc: "Surgical reconstruction and tightening of vaginal canal for enhanced function and sensation",
      time: "2-3 hours",
      recovery: "4-6 weeks",
      benefits: [
        "Vaginal tightening",
        "Enhanced sensation",
        "Improved sexual function",
        "Restored confidence",
      ],
    },
    {
      title: "Mons Pubis Liposuction",
      slug: "mons-pubis-liposuction",
      desc: "Targeted fat removal to create a flatter, more contoured pubic profile",
      time: "1 hour",
      recovery: "3-5 days",
      benefits: [
        "Flatter profile",
        "Improved contour",
        "Better clothing fit",
        "Enhanced appearance",
      ],
    },
  ];

  const treatments =
    activeMode === "nonSurgical"
      ? nonSurgicalTreatments
      : surgicalTreatments;

  const whyChooseUs = [
    {
      icon: Shield,
      title: "GMC Registered Surgeons",
      desc: "All procedures performed by senior NHS consultants with specialized training",
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      desc: "Discrete facilities with private entrances and confidential consultations",
    },
    {
      icon: Star,
      title: "5-Star Care",
      desc: "Personalized aftercare with 24/7 support from our specialist nursing team",
    },
    {
      icon: Users,
      title: "1000+ Transformations",
      desc: "Trusted by women across the UK for over a decade of aesthetic excellence",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Aesthetic Gynaecology"
        subtitle="Transform your intimate wellness with our comprehensive range of surgical and non-surgical aesthetic treatments. Expert care in a private, supportive environment."
        images={sliderImages}
        breadcrumbs={[
          {
            label: "Aesthetic Gynaecology",
            href: "/aesthetic-gynaecology",
          },
        ]}
      />

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div className="flex flex-col items-center gap-2">
              <Users size={36} className="mb-2" />
              <p className="font-bold text-3xl">1000+</p>
              <p className="text-sm opacity-90">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star size={36} className="mb-2" />
              <p className="font-bold text-3xl">5.0</p>
              <p className="text-sm opacity-90">Average Rating</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={36} className="mb-2" />
              <p className="font-bold text-3xl">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={36} className="mb-2" />
              <p className="font-bold text-3xl">100%</p>
              <p className="text-sm opacity-90">CQC Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollMotion animation="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Reclaim Your Confidence
              </h2>
              <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Aesthetic gynaecology addresses both functional and cosmetic
                concerns of intimate anatomy. Whether you're experiencing
                discomfort during exercise, intimacy, or simply wish to enhance
                your appearance, our expert team offers personalized solutions
                tailored to your needs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every woman deserves to feel comfortable and confident. Our
                treatments combine cutting-edge technology with decades of
                surgical expertise to deliver natural-looking, life-changing
                results.
              </p>
            </ScrollMotion>
          </div>
        </div>
      </section>

      {/* Treatment Selection Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollMotion animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Treatments
              </h2>
              <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-8"></div>

              {/* Toggle Switch */}
              <div className="inline-flex bg-gray-100 p-2 rounded-full shadow-lg">
                <motion.div className="relative flex">
                  <button
                    onClick={() => setActiveMode("nonSurgical")}
                    className={`relative px-8 py-3 rounded-full font-bold text-sm transition-all z-10 ${
                      activeMode === "nonSurgical"
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <Zap className="inline w-4 h-4 mr-2" />
                    Non-Surgical
                  </button>
                  <button
                    onClick={() => setActiveMode("surgical")}
                    className={`relative px-8 py-3 rounded-full font-bold text-sm transition-all z-10 ${
                      activeMode === "surgical"
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <Scissors className="inline w-4 h-4 mr-2" />
                    Surgical
                  </button>

                  <motion.div
                    className="absolute top-0 h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg"
                    animate={{
                      left: activeMode === "nonSurgical" ? "0" : "50%",
                      width: "50%",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </motion.div>
              </div>
            </div>
          </ScrollMotion>

          {/* Treatment Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                {treatments.map((treatment, idx) => (
                  <ScrollMotion
                    key={treatment.slug}
                    animation="slideUp"
                    delay={idx * 0.1}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-t-4 border-secondary h-full flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                          {activeMode === "nonSurgical" ? (
                            <Sparkles
                              className="text-secondary group-hover:text-white"
                              size={28}
                            />
                          ) : (
                            <Scissors
                              className="text-secondary group-hover:text-white"
                              size={28}
                            />
                          )}
                        </div>
                        <div className="text-right text-xs text-gray-500">
                          <div className="flex items-center gap-1 justify-end mb-1">
                            <Clock size={14} />
                            {treatment.time}
                          </div>
                          <span className="font-semibold text-blue-600">
                            {treatment.recovery}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {treatment.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {treatment.desc}
                      </p>

                      <div className="space-y-3 mb-6 flex-grow">
                        {treatment.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle
                              size={18}
                              className="text-secondary flex-shrink-0"
                            />
                            <span className="text-sm text-gray-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/aesthetic-gynaecology/${
                          activeMode === "nonSurgical"
                            ? "non-surgical"
                            : "surgical"
                        }`}
                        className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all"
                      >
                        Learn More <ArrowRight size={18} />
                      </Link>
                    </div>
                  </ScrollMotion>
                ))}
              </div>

              {/* View Full Section Button */}
              <div className="text-center">
                <Link
                  href={`/aesthetic-gynaecology/${
                    activeMode === "nonSurgical" ? "non-surgical" : "surgical"
                  }`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  View All{" "}
                  {activeMode === "nonSurgical" ? "Non-Surgical" : "Surgical"}{" "}
                  Treatments
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Choose GyneClinics?
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="text-center p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-4">
                      <item.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollMotion animation="fadeInUp">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
                <Gem className="text-secondary" size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                See Real Results
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                View our confidential before and after gallery to see the
                transformative results achieved by our expert team. Every image
                represents a woman who took the first step toward reclaiming her
                confidence.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Gem size={18} />
                View Before & After Gallery
              </Link>
            </ScrollMotion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageCTA
        title="Ready to Begin Your Transformation?"
        description="Schedule a confidential consultation with our expert team. Discover how aesthetic gynaecology can restore your confidence and enhance your quality of life."
        variant="primary"
      />
    </main>
  );
}
