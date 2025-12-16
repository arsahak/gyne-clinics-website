"use client";

import { Product } from "@/app/actions/product";
import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "reviews"
  >("description");
  const searchParams = useSearchParams();
  const orderIdFromUrl = searchParams?.get("order") || "";
  const { addToCart } = useCart();

  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) setQuantity((q) => q - 1);
    if (type === "inc") {
      const maxQty =
        product.trackInventory && typeof product.stock === "number"
          ? Math.max(1, product.stock)
          : 99;
      setQuantity((q) => Math.min(maxQty, q + 1));
    }
  };

  const handleAddToCart = () => {
    if (
      product.trackInventory &&
      typeof product.stock === "number" &&
      product.stock <= 0
    ) {
      toast.error("This product is out of stock");
      return;
    }

    addToCart(product, quantity);
    toast.success("Product added to cart successfully");
  };

  const imageUrls =
    product.images && product.images.length > 0
      ? product.images.map((img) => img.url)
      : ["/assets/product/placeholder.jpg"];

  const mainImage = imageUrls[selectedImage] || imageUrls[0];

  const categoryName =
    typeof product.category === "object" && product.category !== null
      ? product.category.name
      : "Products";

  const rating = product.averageRating || 0;
  const totalReviews = product.totalReviews || 0;

  const inStock =
    !product.trackInventory ||
    (typeof product.stock === "number" && product.stock > 0);

  const handleShare = async () => {
    try {
      const base =
        typeof window !== "undefined"
          ? window.location.origin
          : process.env.NEXT_PUBLIC_SITE_URL || "";

      const productPath = `/product/${product.slug || product._id}`;
      const url = `${base}${productPath}`;

      if (navigator && "clipboard" in navigator) {
        await navigator.clipboard.writeText(url);
        toast.success("Product link copied to clipboard");
      } else {
        // Fallback: show prompt so user can copy manually

        window.prompt("Copy this link:", url);
      }
    } catch (error) {
      console.error("Error copying link:", error);
      toast.error("Could not copy link. Please try again.");
    }
  };

  const canShowReviewForm = !!orderIdFromUrl;

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderIdFromUrl) {
      toast.error("Missing order information for review");
      return;
    }

    if (!reviewComment.trim()) {
      toast.error("Please write a short comment for your review");
      return;
    }

    setIsSubmittingReview(true);
    try {
      const { createReview } = await import("@/app/actions/review");
      const result = await createReview({
        productId: product._id,
        orderId: orderIdFromUrl,
        rating: reviewRating,
        title: reviewTitle || undefined,
        comment: reviewComment.trim(),
      });

      if (result.success) {
        toast.success("Thank you! Your review has been submitted.");
        setReviewComment("");
        setReviewTitle("");
        setReviewRating(5);
      } else {
        toast.error(
          result.error ||
            "Could not submit review. You can only review delivered orders."
        );
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An unexpected error occurred while submitting your review.");
    } finally {
      setIsSubmittingReview(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* 1. BREADCRUMBS & NAV */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm text-gray-500">
          <Link
            href="/product"
            className="hover:text-primary flex items-center gap-1"
          >
            <ArrowLeft size={14} /> Back to Store
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-300" />
          <Link href="/product" className="hover:text-primary">
            {categoryName}
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-300" />
          <span className="text-primary font-bold truncate max-w-[200px] md:max-w-none">
            {product.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* 2. IMAGE GALLERY (Sticky on Desktop) */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24 h-fit">
            {/* Main Image */}
            <motion.div
              layout
              className="relative aspect-square bg-white rounded-2xl border border-gray-100 p-8 flex items-center justify-center overflow-hidden shadow-sm"
            >
              {product.featured && (
                <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-10">
                  Best Seller
                </span>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {imageUrls.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-xl bg-white border-2 p-2 transition-all overflow-hidden ${
                    selectedImage === idx
                      ? "border-secondary ring-2 ring-secondary/20"
                      : "border-gray-100 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 3. PRODUCT INFO & ACTIONS */}
          <div>
            {/* Header Info */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <h4 className="text-secondary font-bold tracking-widest uppercase text-xs mb-2">
                {product.sku}
              </h4>
              <h1 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  {rating.toFixed(1)} · {totalReviews}{" "}
                  {totalReviews === 1 ? "review" : "reviews"}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  £{product.price.toFixed(2)}
                </span>
                {product.compareAtPrice &&
                  product.compareAtPrice > product.price && (
                    <span className="text-lg text-gray-400 line-through font-medium">
                      £{product.compareAtPrice.toFixed(2)}
                    </span>
                  )}
                <span
                  className={`text-xs font-bold px-2 py-1 rounded ${
                    inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Short Description */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                {product.shortDescription || product.description}
              </p>
            </div>

            {/* Actions: Quantity & Add to Cart */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {/* Quantity */}
                <div className="flex items-center border border-gray-200 rounded-xl h-12 w-fit">
                  <button
                    onClick={() => handleQuantity("dec")}
                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-50 rounded-l-xl transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 h-full flex items-center justify-center font-bold text-primary border-x border-gray-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantity("inc")}
                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-50 rounded-r-xl transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add To Cart */}
                <button
                  onClick={handleAddToCart}
                  disabled={!inStock}
                  className="flex-grow bg-primary text-white h-12 rounded-xl font-bold text-sm md:text-base shadow-lg hover:bg-[#1a3a5e] flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={18} />{" "}
                  {inStock ? (
                    <>Add to Cart - £{(product.price * quantity).toFixed(2)}</>
                  ) : (
                    "Out of Stock"
                  )}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col items-center text-center gap-1">
                  <ShieldCheck className="text-secondary" size={20} />
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Medical Grade
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <Truck className="text-secondary" size={20} />
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Fast Delivery
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <RotateCcw className="text-secondary" size={20} />
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Easy Returns
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex flex-col items-center text-center gap-1 focus:outline-none cursor-pointer"
                >
                  <Share2 className="text-secondary" size={20} />
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Share
                  </span>
                </button>
              </div>
            </div>

            {/* 4. TABS SECTION */}
            <div className="mb-12">
              <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto pb-1">
                {["description", "specifications", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() =>
                      setActiveTab(
                        tab as "description" | "specifications" | "reviews"
                      )
                    }
                    className={`px-6 py-3 text-sm font-bold rounded-t-lg transition-colors whitespace-nowrap relative ${
                      activeTab === tab
                        ? "text-primary bg-white border border-b-0 border-gray-200"
                        : "text-gray-500 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {activeTab === tab && (
                      <span className="absolute bottom-[-1px] left-0 w-full h-1 bg-white" />
                    )}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-xl md:rounded-b-xl md:rounded-tr-xl p-6 md:p-8 border border-gray-200 min-h-[200px]">
                <AnimatePresence mode="wait">
                  {activeTab === "description" && (
                    <motion.div
                      key="desc"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="prose prose-sm max-w-none text-gray-600"
                    >
                      <p>{product.description}</p>
                    </motion.div>
                  )}
                  {activeTab === "specifications" && (
                    <motion.div
                      key="specs"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <table className="w-full text-sm text-left">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <th className="py-3 text-primary">Brand</th>
                            <td className="py-3 text-gray-600">
                              GyneStore Medical
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <th className="py-3 text-primary">Model</th>
                            <td className="py-3 text-gray-600">URS-14</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <th className="py-3 text-primary">Pack Size</th>
                            <td className="py-3 text-gray-600">100 Strips</td>
                          </tr>
                          <tr>
                            <th className="py-3 text-primary">Expiry</th>
                            <td className="py-3 text-gray-600">
                              24 Months from Mfg
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </motion.div>
                  )}
                  {activeTab === "reviews" && (
                    <motion.div
                      key="reviews"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                    >
                      <div className="text-center">
                        <div className="flex justify-center text-secondary mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} className="fill-current" />
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-primary">
                          {rating.toFixed(1)} out of 5
                        </h3>
                        <p className="text-gray-500 text-sm mb-2">
                          Based on {totalReviews}{" "}
                          {totalReviews === 1
                            ? "verified review"
                            : "verified reviews"}
                        </p>
                      </div>

                      {canShowReviewForm ? (
                        <form
                          onSubmit={handleSubmitReview}
                          className="max-w-xl mx-auto space-y-4 text-left"
                        >
                          <h4 className="text-lg font-semibold text-primary-900">
                            Write a review for this product
                          </h4>
                          <p className="text-xs text-gray-500">
                            You&apos;re leaving a review for a product from a{" "}
                            <span className="font-semibold">delivered</span>{" "}
                            order. Reviews are verified against your order
                            history.
                          </p>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Rating
                            </label>
                            <select
                              value={reviewRating}
                              onChange={(e) =>
                                setReviewRating(Number(e.target.value))
                              }
                              className="w-full max-w-[160px] px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 bg-white"
                            >
                              {[5, 4, 3, 2, 1].map((value) => (
                                <option key={value} value={value}>
                                  {value} –{" "}
                                  {value === 5
                                    ? "Excellent"
                                    : value === 4
                                    ? "Good"
                                    : value === 3
                                    ? "Average"
                                    : value === 2
                                    ? "Poor"
                                    : "Very Poor"}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Title (optional)
                            </label>
                            <input
                              type="text"
                              value={reviewTitle}
                              onChange={(e) =>
                                setReviewTitle(e.target.value.slice(0, 200))
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 bg-white"
                              placeholder="Summarise your experience in a few words"
                              maxLength={200}
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Your review
                            </label>
                            <textarea
                              value={reviewComment}
                              onChange={(e) =>
                                setReviewComment(e.target.value.slice(0, 1000))
                              }
                              required
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 bg-white resize-y"
                              placeholder="Share details about quality, comfort, delivery, and overall experience."
                            />
                            <p className="mt-1 text-xs text-gray-400">
                              {reviewComment.length}/1000 characters
                            </p>
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmittingReview}
                            className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-[#1a3a5e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSubmittingReview
                              ? "Submitting review..."
                              : "Submit review"}
                          </button>
                        </form>
                      ) : (
                        <div className="text-center text-gray-500 text-sm">
                          <p className="mb-2">
                            Only customers who have purchased and received this
                            product in a delivered order can leave a review.
                          </p>
                          <p className="text-xs mb-4">
                            Go to your orders to find delivered purchases and
                            review eligible products.
                          </p>
                          <a
                            href="/dashboard?tab=orders"
                            className="inline-block px-6 py-2 border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors text-sm"
                          >
                            Go to Orders
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
