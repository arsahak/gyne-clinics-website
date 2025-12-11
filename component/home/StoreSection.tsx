"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, ShoppingCart, Star } from "lucide-react";
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
      image: "/images/product-strips.jpg",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Comfigel Lubricating Jelly",
      price: "£4.99",
      category: "Comfort",
      rating: 5.0,
      image: "/images/product-gel.jpg",
      isBestSeller: false,
    },
    {
      id: 3,
      name: "Contrelle Continence Activgard",
      price: "£22.99",
      category: "Support",
      rating: 4.9,
      image: "/images/product-contrelle.jpg",
      isBestSeller: false,
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        
        {/* 1. SECTION HEADER (Elegant & Clean) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-200 pb-8">
          <div className="max-w-xl">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
              Gyne Store
            </h4>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              Wellness Essentials
            </h2>
            <p className="text-gray-500">
              Curated medical-grade products for your comfort and care.
            </p>
          </div>
          
          <Link href="/store" className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full text-primary font-bold hover:border-secondary hover:text-secondary transition-all shadow-sm">
            <span>View Full Catalogue</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2. PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      className="group relative bg-white rounded-2xl overflow-hidden border border-transparent hover:border-secondary/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* IMAGE AREA */}
      <div className="relative h-64 bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
        
        {/* Badges - Floating at top */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
           <span className="bg-white/80 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100 shadow-sm">
             {product.category}
           </span>
           {product.isBestSeller && (
             <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
               Best Seller
             </span>
           )}
        </div>

        {/* Wishlist Button - Top Right */}
         <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white flex items-center justify-center transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
            <Eye size={16} />
         </button>

        {/* Image Placeholder */}
        <div className="w-full h-full flex items-center justify-center text-gray-300 relative z-0 group-hover:scale-110 transition-transform duration-500 ease-in-out">
           {/* Replace this div with <img src={product.image} ... /> */}
           <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-inner">
             <span className="text-[10px] uppercase font-bold tracking-widest text-center px-2">
               {product.name}
             </span>
           </div>
        </div>

        {/* Quick Add Button - Slides up from bottom of Image Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#1a3a5e] flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart size={16} /> Add to Cart
            </button>
        </div>
        
        {/* Gradient Overlay for text readability on hover if needed */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* DETAILS AREA */}
      <div className="p-6 flex flex-col flex-grow bg-white relative z-30">
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
            <div className="flex text-secondary">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-gray-300"} />
               ))}
            </div>
            <span className="text-xs text-gray-400 font-medium ml-2">({product.rating})</span>
        </div>

        {/* Title */}
        <Link href={`/product/${product.id}`} className="block mb-2">
          <h3 className="text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Price & Divider */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
           <span className="text-xl font-bold text-primary">{product.price}</span>
           <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-secondary transition-colors cursor-pointer">View Details</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StoreSection;