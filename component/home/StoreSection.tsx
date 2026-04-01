"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

// Featured products from WHP Store - Nutrition & Gut Health collection
const featuredProducts = [
  {
    id: 1,
    name: "Gut Health Probiotic Complex",
    category: "Nutrition & Gut Health",
    price: "£34.99",
    rating: 4.8,
    image: "/assets/store/store-gut-health-probiotics1.png",
    link: "https://whpstore.org/en-gb/collections/nutrition-gut-health",
  },
  {
    id: 2,
    name: "Women's Multivitamin Formula",
    category: "Nutrition & Gut Health",
    price: "£29.99",
    rating: 4.9,
    image: "/assets/store/store-womens-multivitamin1.png",
    link: "https://whpstore.org/en-gb/collections/nutrition-gut-health",
  },
  {
    id: 3,
    name: "Digestive Enzyme Support",
    category: "Nutrition & Gut Health",
    price: "£24.99",
    rating: 4.7,
    image: "/assets/store/store-digestive-enzyme1.png",
    link: "https://whpstore.org/en-gb/collections/nutrition-gut-health",
  },
];

const StoreSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        {/* 1. SECTION HEADER (Elegant & Clean) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6 border-b border-gray-200 pb-6 md:pb-8">
          <div className="max-w-xl">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">
              WHP Store
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
              Wellness Essentials
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Curated medical-grade products for your comfort and care.
            </p>
          </div>

          <a
            href="https://whpstore.org/en-gb"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-white border border-gray-200 rounded-full text-primary text-sm md:text-base font-bold hover:border-secondary hover:text-secondary transition-all shadow-sm w-full md:w-auto justify-center md:justify-end"
          >
            <span className="whitespace-nowrap">Visit WHP Store</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform md:w-[18px] md:h-[18px]"
            />
          </a>
        </div>

        {/* 2. PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Shop More CTA */}
        <ScrollMotion
          animation="fadeInUp"
          delay={0.4}
          className="text-center mt-12"
        >
          <a
            href="https://whpstore.org/en-gb/collections/nutrition-gut-health"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-colors shadow-lg"
          >
            <span>Browse Nutrition & Gut Health Collection</span>
            <ArrowRight size={18} />
          </a>
        </ScrollMotion>
      </div>
    </section>
  );
};

// --- Helper Component: Product Card ---
interface ProductType {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  link: string;
}

const ProductCard = ({
  product,
  index,
}: {
  product: ProductType;
  index: number;
}) => {
  return (
    <ScrollMotion
      animation="slideUp"
      delay={index * 0.1}
      duration={0.4}
      className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden border border-transparent hover:border-secondary/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* IMAGE AREA */}
      <div className="relative h-56 md:h-64 w-full overflow-hidden bg-gray-100">
        {/* Image - full width, object-cover */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          loading={index < 3 ? "eager" : "lazy"}
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badges - Floating at top */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
          <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Featured
          </span>
        </div>

        {/* Quick Shop Button - Slides up from bottom (desktop only) */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-primary py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-secondary hover:text-white flex items-center justify-center gap-2 transition-colors"
          >
            <ExternalLink size={16} /> Shop Now
          </a>
        </div>
      </div>

      {/* DETAILS AREA */}
      <div className="p-4 md:p-6 flex flex-col flex-grow bg-white relative z-30">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 md:mb-3">
          <div className="flex text-secondary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={`md:w-3 md:h-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] md:text-xs text-gray-400 font-medium ml-1 md:ml-2">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Title */}
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-2"
        >
          <h3 className="text-base md:text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </a>

        {/* Price & View Details */}
        <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
          <span className="text-lg md:text-xl font-bold text-primary">
            {product.price}
          </span>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-secondary transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1"
          >
            View Details <ExternalLink size={10} />
          </a>
        </div>

        {/* Mobile Shop Now Button */}
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden w-full bg-primary text-white py-2.5 rounded-lg font-bold text-sm shadow-lg hover:bg-[#1a3a5e] flex items-center justify-center gap-2 transition-colors mt-3"
        >
          <ExternalLink size={16} /> Shop Now
        </a>
      </div>
    </ScrollMotion>
  );
};

export default StoreSection;
