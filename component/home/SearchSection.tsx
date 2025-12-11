"use client";

import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Download,
  Globe,
  Phone,
  Search,
} from "lucide-react";
import Link from "next/link";

const SearchSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F4F6F8] relative">
      <div className="container mx-auto px-4">
        {/* 1. SECTION HEADER & SEARCH (Combined) */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
            Patient Resource Center
          </h2>

          {/* Premium Search Bar */}
          <div className="relative group shadow-2xl rounded-full">
            <input
              type="text"
              placeholder="Search conditions, treatments, or products..."
              className="w-full h-16 pl-8 pr-36 rounded-full border border-gray-200 focus:border-secondary bg-white text-lg text-primary outline-none transition-all placeholder:text-gray-400"
            />
            <button className="absolute right-2 top-2 h-12 px-8 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-colors flex items-center gap-2">
              <Search size={18} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* 2. THE "BENTO GRID" LAYOUT */}
        {/* This organizes your Sidebar links into a beautiful 3-column structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* COLUMN 1: MAKE ENQUIRY (Primary Actions) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary">Make Enquiry</h3>
            </div>

            <ul className="space-y-4">
              <ResourceLink href="/book" label="Book Appointment" />
              <ResourceLink href="/enquiry" label="Enquiry Form" />
              <ResourceLink href="/consultation" label="Online Consultation" />
              <ResourceLink href="/contact" label="Contact Clinic" />
            </ul>

            {/* Added Phone CTA */}
            <div className="mt-auto pt-8">
              <div className="bg-primary/5 rounded-xl p-4 flex items-center gap-3">
                <Phone size={20} className="text-secondary" />
                <div>
                  <p className="text-xs font-bold text-primary uppercase">
                    Urgent Enquiry?
                  </p>
                  <p className="text-sm text-gray-600">0207-117-6456</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: USEFUL LINKS (External Resources) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary">Useful Links</h3>
            </div>

            <ul className="space-y-4">
              <ResourceLink href="#" label="RCOG (Royal College)" />
              <ResourceLink href="#" label="BSUG (Urogynaecology)" />
              <ResourceLink href="#" label="British Menopause Society" />
              <ResourceLink href="#" label="Women's Health Concern" />
              <ResourceLink href="#" label="Faculty of Sexual Healthcare" />
            </ul>
          </div>

          {/* COLUMN 3: DOWNLOADS (The Handbook) */}
          <div className="flex flex-col gap-6 h-full">
            {/* The Handbook Card (Highlighted) */}
            <div className="bg-primary rounded-2xl p-8 shadow-xl text-white relative overflow-hidden flex-grow group">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-white/20 w-fit p-3 rounded-xl mb-6 backdrop-blur-sm">
                  <Download size={24} />
                </div>

                <h3 className="text-2xl font-heading font-bold mb-2">
                  Patient Handbook
                </h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                  Download our comprehensive guide to gynaecology, preparing for
                  surgery, and aftercare.
                </p>

                <button className="mt-auto w-full py-4 bg-secondary hover:bg-white hover:text-primary text-white font-bold rounded-xl transition-all flex justify-center items-center gap-2">
                  Download PDF <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Secondary Small Card (Optional - Laser Treatment from your screenshot) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-secondary transition-colors">
              <div>
                <h4 className="font-bold text-primary text-sm">Juliet Laser</h4>
                <p className="text-xs text-gray-500">Learn about treatment</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Helper Component for the List Links ---
const ResourceLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link
      href={href}
      className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded-lg transition-colors"
    >
      <span className="text-gray-600 font-medium group-hover:text-primary transition-colors">
        {label}
      </span>
      <ChevronRight
        size={16}
        className="text-gray-300 group-hover:text-secondary group-hover:translate-x-1 transition-all"
      />
    </Link>
  </li>
);

export default SearchSection;
