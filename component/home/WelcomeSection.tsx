import { ScrollMotion } from "@/component/motion";
import {
  Activity,
  CalendarClock,
  MessageCircle,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WelcomeSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "GyneCosmetics & Sculpture",
      desc: "Specialized information on aesthetic gynaecology and body sculpting.",
    },
    {
      icon: MessageCircle,
      title: "Free Online Consultation",
      desc: "One-off free service with a response within 72 hours before booking.",
    },
    {
      icon: Activity,
      title: "Well-Woman Screening",
      desc: "Comprehensive assessment and screening tests for your peace of mind.",
    },
    {
      icon: ShoppingBag,
      title: "Self-Help Resources",
      desc: "Easy access to products and health-related resources suitable for you.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <ScrollMotion animation="fadeInLeft" duration={0.5}>
              <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
                About GyneClinics
              </h4>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Welcome to <br />
                <span className="text-secondary italic font-serif">
                  Gynaecology Clinics
                </span>
              </h2>

              <div className="prose prose-lg text-gray-500 mb-8">
                <p>
                  Welcome to the GyneClinics website, where you will find very
                  useful information on most of your general gynaecological
                  concerns. This site is designed to help you acquire important
                  information about women&apos;s health and other health-related
                  general issues, allowing you easy access to health care
                  suitable for you.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-2 bg-primary/5 rounded-lg text-primary shrink-0">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-sm mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-[#1a3a5e] transition-all shadow-lg hover:shadow-xl text-sm"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/online-consultation"
                  className="inline-flex justify-center items-center px-8 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/5 transition-all text-sm"
                >
                  Free Online Consultation
                </Link>
              </div>
            </ScrollMotion>
          </div>

          {/* Image Composition */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative pt-8 lg:pt-0">
            <ScrollMotion
              animation="scaleIn"
              duration={0.5}
              className="relative z-10"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white w-full aspect-[4/3]">
                <Image
                  src="/assets/home/clinic.jpg"
                  alt="GyneClinics Reception"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  quality={90}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border-l-4 border-secondary max-w-[200px] hidden md:block">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CalendarClock className="text-secondary" size={20} />
                    <span className="font-bold text-primary text-sm">
                      Fast Response
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    We aim to respond to queries within 72 hours.
                  </p>
                </div>
              </div>
            </ScrollMotion>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
