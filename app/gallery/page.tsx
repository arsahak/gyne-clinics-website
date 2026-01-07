"use client";
import { ScrollMotion } from "@/component/motion";
import { CommonHero } from "@/component/shared";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Info,
  Lock,
  Shield,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showBefore, setShowBefore] = useState(true);
  const [isBlurred, setIsBlurred] = useState(true);

  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  const categories = [
    { id: "all", label: "All Procedures" },
    { id: "labiaplasty", label: "Labiaplasty" },
    { id: "vaginoplasty", label: "Vaginoplasty" },
    { id: "laser", label: "Laser Rejuvenation" },
    { id: "o-shot", label: "O-Shot" },
  ];

  // Before/After gallery data
  // NOTE: These use placeholder images. Replace with real medical images.
  // See /public/assets/gallery/README.md for proper image guidelines.
  const galleryItems = [
    {
      id: 1,
      category: "labiaplasty",
      title: "Labiaplasty - Edge Trim Technique",
      before: "/assets/home/banner1.svg", // TODO: Replace with actual medical image
      after: "/assets/home/banner2.svg", // TODO: Replace with actual medical image
      description:
        "Patient in her 30s presenting with asymmetric labia minora causing discomfort during exercise. Edge trim technique performed for natural-looking results.",
      procedure: "Labiaplasty",
      technique: "Edge Trim",
      recovery: "2 weeks",
      age: "32",
    },
    {
      id: 2,
      category: "labiaplasty",
      title: "Labiaplasty - Wedge Technique",
      before: "/assets/home/banner2.svg", // TODO: Replace with actual medical image
      after: "/assets/home/banner3.svg", // TODO: Replace with actual medical image
      description:
        "Patient experiencing chafing and self-consciousness. Wedge resection technique used to preserve natural edge pigmentation.",
      procedure: "Labiaplasty",
      technique: "Wedge Resection",
      recovery: "2 weeks",
      age: "28",
    },
    {
      id: 3,
      category: "vaginoplasty",
      title: "Vaginoplasty Post-Childbirth",
      before: "/assets/home/banner1.svg", // TODO: Replace with actual medical image
      after: "/assets/home/banner3.svg", // TODO: Replace with actual medical image
      description:
        "Mother of two experiencing vaginal laxity affecting intimacy. Comprehensive vaginoplasty with perineoplasty performed.",
      procedure: "Vaginoplasty + Perineoplasty",
      technique: "Posterior Colporrhaphy",
      recovery: "6 weeks",
      age: "38",
    },
    {
      id: 4,
      category: "laser",
      title: "Laser Vaginal Rejuvenation",
      before: "/assets/home/banner2.svg", // TODO: Replace with actual medical image
      after: "/assets/home/banner1.svg", // TODO: Replace with actual medical image
      description:
        "Patient with vaginal atrophy and stress incontinence. Three sessions of fractional CO2 laser treatment completed.",
      procedure: "Laser Rejuvenation",
      technique: "Fractional CO2 Laser",
      recovery: "No downtime",
      age: "52",
    },
    {
      id: 5,
      category: "o-shot",
      title: "O-Shot (PRP) Treatment",
      before: "/assets/home/banner3.svg", // TODO: Replace with actual medical image
      after: "/assets/home/banner1.svg", // TODO: Replace with actual medical image
      description:
        "Patient seeking enhanced sexual function and reduced urinary incontinence. Single O-Shot treatment with excellent results.",
      procedure: "O-Shot (PRP)",
      technique: "Platelet-Rich Plasma",
      recovery: "Immediate",
      age: "45",
    },
    {
      id: 6,
      category: "labiaplasty",
      title: "Combined Labiaplasty & Clitoral Hood Reduction",
      before: "/assets/home/banner1.svg", // TODO: Replace with actual medical image
      after: "/assets/home/banner2.svg", // TODO: Replace with actual medical image
      description:
        "Patient with enlarged labia minora and excess clitoral hood tissue. Combined procedure for optimal aesthetic outcome.",
      procedure: "Labiaplasty + Hood Reduction",
      technique: "Combined Technique",
      recovery: "2-3 weeks",
      age: "35",
    },
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const selectedGalleryItem = selectedImage
    ? galleryItems.find((item) => item.id === selectedImage)
    : null;

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = filteredGallery.findIndex(
        (item) => item.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % filteredGallery.length;
      setSelectedImage(filteredGallery[nextIndex].id);
      setShowBefore(true);
    }
  };

  const handlePrevious = () => {
    if (selectedImage) {
      const currentIndex = filteredGallery.findIndex(
        (item) => item.id === selectedImage
      );
      const previousIndex =
        (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
      setSelectedImage(filteredGallery[previousIndex].id);
      setShowBefore(true);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Before & After Gallery"
        subtitle="View real results from our expert aesthetic gynaecology procedures. All images shared with patient consent."
        images={sliderImages}
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      {/* Privacy Notice */}
      <section className="bg-gradient-to-r from-primary to-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-white text-center">
            <Shield size={24} />
            <p className="text-sm md:text-base">
              <strong>Privacy Protected:</strong> All images are shared with
              explicit patient consent and comply with medical confidentiality
              guidelines
            </p>
          </div>
        </div>
      </section>

      {/* Blur Warning Section */}
      {isBlurred && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollMotion animation="fadeInUp">
              <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Info className="text-primary" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Sensitive Medical Content
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This gallery contains clinical before and after photographs
                      of intimate aesthetic procedures. Images are blurred by
                      default to respect viewer preferences.
                    </p>
                    <p className="text-gray-600 text-sm mb-6">
                      By clicking "View Gallery", you acknowledge you are 18+ and
                      wish to view medical images for informational purposes.
                    </p>
                    <button
                      onClick={() => setIsBlurred(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-primary text-white rounded-full font-semibold transition-all"
                    >
                      <Eye size={18} />
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            </ScrollMotion>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {!isBlurred && (
        <>
          {/* Category Filter */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <ScrollMotion animation="fadeInUp">
                <div className="flex justify-center mb-8">
                  <div className="inline-flex flex-wrap gap-3 bg-gray-100 p-2 rounded-full">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                          selectedCategory === category.id
                            ? "bg-secondary text-white shadow-lg"
                            : "bg-transparent text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollMotion>

              {/* Gallery Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredGallery.map((item, index) => (
                  <ScrollMotion
                    key={item.id}
                    animation="slideUp"
                    delay={index * 0.1}
                  >
                    <div
                      onClick={() => {
                        setSelectedImage(item.id);
                        setShowBefore(true);
                      }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-all border border-gray-200"
                    >
                      {/* Image Container */}
                      <div className="relative h-64 bg-gray-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <Image
                          src={item.before}
                          alt={`${item.title} - Before`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-4 left-4 right-4 z-20">
                          <p className="text-white font-bold text-sm">
                            {item.procedure}
                          </p>
                        </div>
                        <div className="absolute top-4 right-4 z-20">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                            View Results
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Recovery: {item.recovery}</span>
                          <span className="text-secondary font-semibold">
                            Click to view
                          </span>
                        </div>
                      </div>
                    </div>
                  </ScrollMotion>
                ))}
              </div>

              {filteredGallery.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    No results found for this category.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Blur Toggle */}
          <div className="fixed bottom-8 right-8 z-40">
            <button
              onClick={() => setIsBlurred(true)}
              className="flex items-center gap-2 bg-white text-gray-700 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
              title="Blur images"
            >
              <EyeOff size={18} />
              <span className="text-sm font-semibold">Hide Gallery</span>
            </button>
          </div>
        </>
      )}

      {/* Modal for Full View */}
      <AnimatePresence>
        {selectedImage && selectedGalleryItem && !isBlurred && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
              >
                <ChevronRight size={32} />
              </button>

              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Before/After Images */}
                  <div className="relative h-96 md:h-[600px] bg-gray-100">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={showBefore ? "before" : "after"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={
                            showBefore
                              ? selectedGalleryItem.before
                              : selectedGalleryItem.after
                          }
                          alt={`${selectedGalleryItem.title} - ${
                            showBefore ? "Before" : "After"
                          }`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                          {showBefore ? "BEFORE" : "AFTER"}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Details */}
                  <div className="p-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {selectedGalleryItem.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedGalleryItem.description}
                    </p>

                    {/* Toggle Button */}
                    <button
                      onClick={() => setShowBefore(!showBefore)}
                      className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-xl font-bold mb-6 transition-all shadow-lg"
                    >
                      {showBefore ? "View After" : "View Before"}
                    </button>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-xs text-gray-500 mb-1">Procedure</p>
                        <p className="font-semibold text-primary">
                          {selectedGalleryItem.procedure}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-xs text-gray-500 mb-1">Technique</p>
                        <p className="font-semibold text-primary">
                          {selectedGalleryItem.technique}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-xs text-gray-500 mb-1">Recovery</p>
                        <p className="font-semibold text-primary">
                          {selectedGalleryItem.recovery}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-xs text-gray-500 mb-1">
                          Patient Age
                        </p>
                        <p className="font-semibold text-primary">
                          {selectedGalleryItem.age}
                        </p>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-auto bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <p className="text-xs text-gray-600">
                        <strong>Disclaimer:</strong> Results vary by individual.
                        These images represent typical outcomes but are not a
                        guarantee of your specific results. Consult with our
                        experts for personalized expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      {!isBlurred && (
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <ScrollMotion animation="fadeInUp">
              <Lock className="mx-auto mb-4" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Transformation Awaits
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Schedule a confidential consultation to discuss how we can help
                you achieve your aesthetic goals with discretion and expertise.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Book Consultation
              </a>
            </ScrollMotion>
          </div>
        </section>
      )}
    </main>
  );
}
