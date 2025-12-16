"use client";

import { getProducts, Product } from "@/app/actions/product";
import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Eye,
  Filter,
  Loader2,
  Search,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Category interface
interface Category {
  _id: string;
  name: string;
  slug: string;
}

const ProductView = () => {
  // State
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured"); // featured, price-low, price-high
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 20,
    pages: 0,
  });
  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/categories`, {
          cache: "no-store",
        });
        if (response.ok) {
          const data = await response.json();
          setCategories(data.data || []);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products when filters change
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Map sort option to API sortBy
        let sortBy = "createdAt";
        let sortOrder: "asc" | "desc" = "desc";

        if (sortOption === "price-low") {
          sortBy = "price";
          sortOrder = "asc";
        } else if (sortOption === "price-high") {
          sortBy = "price";
          sortOrder = "desc";
        } else if (sortOption === "featured") {
          sortBy = "featured";
          sortOrder = "desc";
        }

        // Get category ID if a category is selected
        const selectedCategoryId =
          activeCategory !== "All"
            ? categories.find((cat) => cat._id === activeCategory)?._id
            : undefined;

        const response = await getProducts({
          page,
          limit: 20,
          category: selectedCategoryId,
          search: searchQuery || undefined,
          sortBy,
          sortOrder,
          status: "active",
        });

        if (response.success && response.data) {
          setProducts(response.data);
          if (response.pagination) {
            setPagination(response.pagination);
          }
        } else {
          setError(response.error || "Failed to load products");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load products"
        );
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce search
    const timeoutId = setTimeout(
      () => {
        fetchProducts();
      },
      searchQuery ? 500 : 0
    );

    return () => clearTimeout(timeoutId);
  }, [activeCategory, searchQuery, sortOption, page]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* 1. PAGE HEADER */}
      <div className=" border-b border-gray-100 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h4 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
            Our Catalogue
          </h4>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
            Shop All Products
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            Explore our curated selection of medical-grade essentials designed
            for your comfort, health, and peace of mind.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* 2. SIDEBAR FILTERS (Desktop Sticky / Mobile Modal) */}
          <div className="lg:w-1/4 flex-shrink-0">
            {/* Mobile Filter Toggle Button */}
            <div className="lg:hidden mb-6 flex gap-4">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary transition-colors shadow-sm"
                />
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="bg-white px-4 py-3 rounded-xl border border-gray-200 text-primary font-bold shadow-sm flex items-center gap-2"
              >
                <Filter size={18} />
              </button>
            </div>

            {/* Sidebar Content */}
            <aside
              className={`
              fixed inset-0 z-50 bg-white lg:bg-transparent lg:static lg:block p-6 lg:p-0 overflow-y-auto lg:overflow-visible transition-transform duration-300 ease-in-out
              ${
                isMobileFilterOpen
                  ? "translate-x-0"
                  : "-translate-x-full lg:translate-x-0"
              }
            `}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between lg:hidden mb-8">
                <h3 className="text-xl font-bold text-primary">Filters</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-8 lg:sticky lg:top-24">
                {/* Search (Desktop) */}
                <div className="hidden lg:block relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary transition-colors shadow-sm"
                  />
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-primary font-bold text-lg mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    <label
                      className={`flex items-center gap-3 cursor-pointer group p-2 rounded-lg transition-colors ${
                        activeCategory === "All"
                          ? "bg-white shadow-sm"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          activeCategory === "All"
                            ? "bg-secondary border-secondary"
                            : "border-gray-300 bg-white group-hover:border-secondary"
                        }`}
                      >
                        {activeCategory === "All" && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="category"
                        className="hidden"
                        checked={activeCategory === "All"}
                        onChange={() => {
                          setActiveCategory("All");
                          setIsMobileFilterOpen(false);
                          setPage(1);
                        }}
                      />
                      <span
                        className={`text-sm ${
                          activeCategory === "All"
                            ? "text-secondary font-bold"
                            : "text-gray-600 group-hover:text-primary"
                        }`}
                      >
                        All
                      </span>
                    </label>
                    {categories.map((cat) => (
                      <label
                        key={cat._id}
                        className={`flex items-center gap-3 cursor-pointer group p-2 rounded-lg transition-colors ${
                          activeCategory === cat._id
                            ? "bg-white shadow-sm"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            activeCategory === cat._id
                              ? "bg-secondary border-secondary"
                              : "border-gray-300 bg-white group-hover:border-secondary"
                          }`}
                        >
                          {activeCategory === cat._id && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="category"
                          className="hidden"
                          checked={activeCategory === cat._id}
                          onChange={() => {
                            setActiveCategory(cat._id);
                            setIsMobileFilterOpen(false);
                            setPage(1);
                          }}
                        />
                        <span
                          className={`text-sm ${
                            activeCategory === cat._id
                              ? "text-secondary font-bold"
                              : "text-gray-600 group-hover:text-primary"
                          }`}
                        >
                          {cat.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range (Mock Visual) */}
                <div>
                  <h3 className="text-primary font-bold text-lg mb-4">
                    Price Range
                  </h3>
                  <div className="px-2">
                    <div className="h-1 bg-gray-200 rounded-full relative mb-4">
                      <div className="absolute left-0 w-1/2 h-full bg-secondary rounded-full"></div>
                      <div className="absolute left-1/2 w-4 h-4 bg-white border-2 border-secondary rounded-full -top-1.5 shadow cursor-pointer"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 font-medium">
                      <span>£0</span>
                      <span>£100+</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Overlay Backdrop */}
            {isMobileFilterOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileFilterOpen(false)}
              />
            )}
          </div>

          {/* 3. PRODUCT GRID AREA */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-bold text-primary">
                  {pagination.total}
                </span>{" "}
                results
              </p>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 hidden sm:inline">
                  Sort by:
                </span>
                <div className="relative group">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 pl-4 pr-10 py-2 rounded-lg text-sm font-bold text-primary focus:outline-none focus:border-secondary shadow-sm cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* The Grid */}
            {isLoading ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                <Loader2 className="w-12 h-12 animate-spin text-secondary mx-auto mb-4" />
                <p className="text-gray-500 text-sm">Loading products...</p>
              </div>
            ) : error ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-300">
                  <X size={32} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Error loading products
                </h3>
                <p className="text-gray-500 text-sm mb-4">{error}</p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                    setPage(1);
                  }}
                  className="text-secondary font-bold text-sm hover:underline"
                >
                  Try again
                </button>
              </div>
            ) : products.length > 0 ? (
              <>
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <AnimatePresence>
                    {products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </AnimatePresence>
                </motion.div>
                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="mt-8 flex justify-center gap-2">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    <span className="px-4 py-2 text-sm text-gray-500">
                      Page {pagination.page} of {pagination.pages}
                    </span>
                    <button
                      onClick={() =>
                        setPage((p) => Math.min(pagination.pages, p + 1))
                      }
                      disabled={page === pagination.pages}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                  <Search size={32} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 text-sm">
                  Try adjusting your search or filters to find what you&apos;re
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                    setPage(1);
                  }}
                  className="mt-6 text-secondary font-bold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Component: Product Card (Optimized for Grid) ---
const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Optional: basic stock check if available
    if (typeof product.stock === "number" && product.stock <= 0) {
      toast.error("This product is out of stock");
      return;
    }

    addToCart(product, 1);
    toast.success("Added to cart successfully");
  };

  // Get primary image or first image
  const primaryImage =
    product.images?.find((img) => img.isPrimary)?.url ||
    product.images?.[0]?.url ||
    "/assets/product/placeholder.jpg";

  // Get category name
  const categoryName =
    typeof product.category === "object" && product.category !== null
      ? product.category.name
      : "Uncategorized";

  // Get rating (default to 0 if not available)
  const rating = product.averageRating || 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden border border-transparent hover:border-secondary/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* IMAGE AREA */}
      <div className="relative aspect-square bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 flex flex-wrap gap-1.5 md:gap-2">
          <span className="bg-white/80 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100 shadow-sm">
            {categoryName}
          </span>
          {product.featured && (
            <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <Link
          href={`/product/${product.slug || product._id}`}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-secondary hover:bg-white flex items-center justify-center transition-all shadow-sm md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 duration-300"
        >
          <Eye size={16} />
        </Link>

        {/* Image */}
        <div className="w-full h-full flex items-center justify-center relative z-0 group-hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="relative w-full h-full">
            <Image
              src={primaryImage}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Quick Add (Desktop) */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#1a3a5e] flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>

      {/* DETAILS AREA */}
      <div className="p-5 flex flex-col flex-grow bg-white relative z-30">
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-secondary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.floor(rating) ? "fill-current" : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium ml-2">
            ({rating.toFixed(1)}){" "}
            {product.totalReviews > 0 && `(${product.totalReviews})`}
          </span>
        </div>

        <Link
          href={`/product/${product.slug || product._id}`}
          className="block mb-2"
        >
          <h3 className="text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">
              £{product.price.toFixed(2)}
            </span>
            {product.compareAtPrice &&
              product.compareAtPrice > product.price && (
                <span className="text-xs text-gray-400 line-through">
                  £{product.compareAtPrice.toFixed(2)}
                </span>
              )}
          </div>
          <button
            onClick={handleAddToCart}
            className="md:hidden w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductView;
