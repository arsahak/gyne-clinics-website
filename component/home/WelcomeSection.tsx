"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
                About GyneClinics
              </h4>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Empowering Women Through{" "}
                <span className="text-secondary italic font-serif">
                  Exceptional Care
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Welcome to GyneClinics. We bridge the gap between medical
                expertise and aesthetic wellness. Whether you need routine
                screening, specialized gynaecological care, or intimate
                rejuvenation, our consultant-led team provides a safe, private
                sanctuary for your health journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/about"
                  className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-[#1a3a5e] transition-all shadow-lg hover:shadow-xl"
                >
                  Read Our Story
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/5 transition-all"
                >
                  Contact Clinic
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Composition */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                {/* Replace with a high-quality team or doctor image */}
                <div className="bg-gray-200 h-[500px] w-full flex items-center justify-center text-gray-400">
                  [Image: Dr. & Patient Consultation]
                </div>
              </div>

              {/* Floating "Experience" Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-secondary hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
