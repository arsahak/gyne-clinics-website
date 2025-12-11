"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

// --- SWIPER IMPORTS ---
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Data matching your image content
const services = [
  {
    title: "Gynaecology Conditions",
    description:
      "Expert diagnosis and treatment for a wide range of women's health issues.",
    image: "/assets/home/clinic.jpg",
    href: "/services/gynaecology",
  },
  {
    title: "Well Women Checks",
    description:
      "Comprehensive health screening and preventative care packages.",
    image: "/assets/home/well-women.jpg",
    href: "/services/well-women",
  },
  {
    title: "Gyne Cosmetics",
    description:
      "Aesthetic solutions designed to restore confidence and comfort.",
    image: "/assets/home/cosmetics.jpg",
    href: "/services/cosmetics",
  },
  {
    title: "Gyne Lipo-Sculpture",
    description: "Specialized body contouring and fat transfer procedures.",
    image: "/assets/home/lipo-sculpture.jpg",
    href: "/services/lipo-sculpture",
  },
  {
    title: "Fertility Services",
    description:
      "Advanced fertility investigations to help you start your family.",
    image: "/assets/home/clinic.jpg",
    href: "/services/fertility",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
            Our Expertise
          </h4>
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Comprehensive Care
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* --- THE SWIPER SLIDER --- */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true, // Keeps it looking clean
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            // UPDATE 1: Increased bottom padding to !pb-28 to push dots down away from cards
            className="!pb-16"
            style={{
              // @ts-ignore
              "--swiper-pagination-color": "#C5A059", // Your Brand Gold
              "--swiper-pagination-bullet-inactive-color": "#9ca3af", // Soft Gray
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-pagination-bullet-size": "10px", // Slightly smaller, elegant dots
              "--swiper-pagination-bottom": "1px", // Pushes dots to the very bottom edge
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto py-4 pl-1">
                <ServiceCard service={service} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// --- Individual Card Component ---
const ServiceCard = ({ service, index }: any) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      {/* 1. Image Area */}
      <div className="relative h-64 overflow-hidden shrink-0 bg-gray-200">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      </div>

      {/* 2. Content Area */}
      <div className="p-6 relative flex flex-col flex-grow">
        <div className="absolute -top-10 right-6 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-300">
          <ArrowRight
            size={20}
            className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
          />
        </div>

        <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <Link
          href={service.href}
          className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider group-hover:underline decoration-secondary underline-offset-4 mt-auto"
        >
          Learn More
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ServicesSection;
