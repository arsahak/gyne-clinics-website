"use client";

import { searchContent, SearchItem } from "@/data/searchIndex";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const QUICK_LINKS: SearchItem[] = [
  {
    title: "Book a Consultation",
    description: "Rapid access private appointments",
    href: "/contact",
    category: "Page",
    keywords: [],
  },
  {
    title: "Menopause & HRT",
    description: "Expert menopause management",
    href: "/menopause",
    category: "Service",
    keywords: [],
  },
  {
    title: "Aesthetic Gynaecology",
    description: "Surgical & non-surgical treatments",
    href: "/aesthetic-gynaecology",
    category: "Service",
    keywords: [],
  },
  {
    title: "Urogynaecology",
    description: "Bladder & pelvic floor care",
    href: "/urogynaecology",
    category: "Service",
    keywords: [],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "General Gynaecology": "bg-primary/10 text-primary",
  "Urogynaecology": "bg-blue-100 text-blue-700",
  "Aesthetic Gynaecology": "bg-pink-100 text-pink-700",
  "Menopause": "bg-orange-100 text-orange-700",
  "Service": "bg-secondary/10 text-secondary",
  "Page": "bg-gray-100 text-gray-600",
  "Store": "bg-green-100 text-green-700",
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
      setActiveIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const res = searchContent(query);
    setResults(res);
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const list = query ? results : QUICK_LINKS;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, list.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        const item = list[activeIndex];
        if (item) {
          window.location.href = item.href;
          onClose();
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [query, results, activeIndex, onClose]
  );

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const displayList = query.trim() ? results : QUICK_LINKS;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-100 flex items-start justify-center pt-[10vh] px-4"
          onClick={handleBackdrop}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <Search size={20} className="text-primary shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search services, treatments, conditions..."
                className="flex-1 text-base text-gray-900 placeholder-gray-400 bg-transparent outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </button>
              )}
              <button
                onClick={onClose}
                className="ml-1 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
              >
                <span className="text-xs font-medium border border-gray-200 px-2 py-0.5 rounded">ESC</span>
              </button>
            </div>

            {/* Results / Quick Links */}
            <div className="max-h-[60vh] overflow-y-auto">
              {/* No results */}
              {query.trim() && results.length === 0 && (
                <div className="py-12 text-center">
                  <Search size={32} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500 font-medium">No results for &ldquo;{query}&rdquo;</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Try searching for a condition, treatment or service
                  </p>
                </div>
              )}

              {/* Section heading */}
              {!query.trim() && (
                <div className="px-5 pt-4 pb-2 flex items-center gap-2">
                  <Sparkles size={14} className="text-secondary" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Quick Links
                  </span>
                </div>
              )}
              {query.trim() && results.length > 0 && (
                <div className="px-5 pt-4 pb-2 flex items-center gap-2">
                  <Clock size={14} className="text-secondary" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {results.length} result{results.length !== 1 ? "s" : ""} found
                  </span>
                </div>
              )}

              {/* List */}
              <ul className="px-3 pb-3">
                {displayList.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-150 group ${
                        activeIndex === idx
                          ? "bg-primary/5"
                          : "hover:bg-gray-50"
                      }`}
                      onMouseEnter={() => setActiveIndex(idx)}
                    >
                      {/* Icon circle */}
                      <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                        <Search size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>

                      {/* Category badge */}
                      <span
                        className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full hidden sm:inline ${
                          CATEGORY_COLORS[item.category] ?? "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {item.category}
                      </span>

                      <ArrowRight
                        size={14}
                        className="text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer hint */}
            <div className="border-t border-gray-100 px-5 py-3 flex items-center gap-4 text-xs text-gray-400 bg-gray-50">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">↵</kbd>
                Open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">ESC</kbd>
                Close
              </span>
              <span className="ml-auto text-primary font-medium">GyneClinics Search</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
