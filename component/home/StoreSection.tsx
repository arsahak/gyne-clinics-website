"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StoreSection = () => {
  // Data matching your screenshot exactly
  const products = [
    {
      id: 1,
      name: "100 Strips URS-14 Urine Test Paper Strip",
      price: "£9.99",
      category: "Diagnostics",
      rating: 4.8,
      image:
        "/assets/product/CC2A97C5-E82E-4867-8358-DA80DFADA8D1-300x300.jpeg",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Comfigel Lubricating Jelly",
      price: "£4.99",
      category: "Comfort",
      rating: 5.0,
      image: "/assets/product/C4D8C8ED-FA10-4507-B7E6-31F3D5AD57EB-300x300.jpg",
      isBestSeller: false,
    },
    {
      id: 3,
      name: "100 Strips URS-14 Urine Test Paper Strip",
      price: "£9.99",
      category: "Support",
      rating: 4.9,
      image:
        "/assets/product/A5E87768-6F39-4F15-8ACF-916067B80962-300x300.jpeg",
      isBestSeller: false,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        {/* 1. SECTION HEADER (Elegant & Clean) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6 border-b border-gray-200 pb-6 md:pb-8">
          <div className="max-w-xl">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">
              Gyne Store
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
              Wellness Essentials
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Curated medical-grade products for your comfort and care.
            </p>
          </div>

          <Link
            href="/store"
            className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-white border border-gray-200 rounded-full text-primary text-sm md:text-base font-bold hover:border-secondary hover:text-secondary transition-all shadow-sm w-full md:w-auto justify-center md:justify-end"
          >
            <span className="whitespace-nowrap">View Full Catalogue</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform md:w-[18px] md:h-[18px]"
            />
          </Link>
        </div>

        {/* 2. PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Helper Component: Product Card ---
const ProductCard = ({ product, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden border border-transparent hover:border-secondary/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* IMAGE AREA */}
      <div className="relative aspect-square md:h-64 bg-gray-50 p-4 md:p-6 flex items-center justify-center overflow-hidden">
        {/* Badges - Floating at top */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 flex flex-wrap gap-1.5 md:gap-2">
          <span className="bg-white/80 backdrop-blur-sm text-primary text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-wider border border-gray-100 shadow-sm">
            {product.category}
          </span>
          {product.isBestSeller && (
            <span className="bg-secondary text-white text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-wider shadow-md">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Button - Top Right (hidden on mobile) */}
        <button
          aria-label="View product"
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white flex items-center justify-center transition-all shadow-sm md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 duration-300"
        >
          <Eye size={14} className="md:w-4 md:h-4" />
        </button>

        {/* Image */}
        <div className="w-full h-full flex items-center justify-center relative z-0 group-hover:scale-110 transition-transform duration-500 ease-in-out">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            loading={index < 3 ? "eager" : "lazy"}
          />
        </div>

        {/* Quick Add Button - Slides up from bottom (desktop only) */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#1a3a5e] flex items-center justify-center gap-2 transition-colors">
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
            ({product.rating})
          </span>
        </div>

        {/* Title */}
        <Link href={`/product/${product.id}`} className="block mb-2">
          <h3 className="text-base md:text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Price & View Details */}
        <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
          <span className="text-lg md:text-xl font-bold text-primary">
            {product.price}
          </span>
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-secondary transition-colors cursor-pointer whitespace-nowrap">
            View Details
          </span>
        </div>

        {/* Mobile Add to Cart Button */}
        <button className="md:hidden w-full bg-primary text-white py-2.5 rounded-lg font-bold text-sm shadow-lg hover:bg-[#1a3a5e] flex items-center justify-center gap-2 transition-colors mt-3">
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default StoreSection;
