import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CommonHero } from "../shared";

// --- TYPE: Location Interface ---
interface Location {
  id: number;
  city: string;
  address: string;
  buttonText: string;
  imageUrl: string;
  mapLink: string;
}

// --- DATA: Location Details with Working Map Links ---
const locations: Location[] = [
  {
    id: 1,
    city: "LEEDS",
    address:
      "Regents Specialist Clinics 1A Grange Park Avenue, Oakwood, Leeds. LS8 3BA",
    buttonText: "LEEDS CLINIC",
    imageUrl: "/assets/location/unnamed.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Regents+Specialist+Clinics+1A+Grange+Park+Avenue+Oakwood+Leeds+LS8+3BA",
  },
  {
    id: 2,
    city: "LONDON",
    address:
      "10 Harley Street, London. W1G 9PF – Harley Health Village, 64 Harley Street. London. W1G 9HN",
    buttonText: "LONDON CLINIC",
    imageUrl: "/assets/location/LONDON.jpeg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=10+Harley+Street+London+W1G+9PF",
  },
  {
    id: 3,
    city: "MANCHESTER",
    address: "Pall Mall Medical, 61 King Street, Manchester. M2 4PD",
    buttonText: "MANCHESTER CLINIC",
    imageUrl: "/assets/location/MANCHESTER.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Pall+Mall+Medical+61+King+Street+Manchester+M2+4PD",
  },
  {
    id: 4,
    city: "LIVERPOOL",
    address: "Pall Mall Medical, 1a Belvedere Road, Newton-le-Willow. WA12 0JJ",
    buttonText: "LIVERPOOL CLINIC",
    imageUrl: "/assets/location/LIVERPOOL.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Pall+Mall+Medical+1a+Belvedere+Road+Newton-le-Willow+WA12+0JJ",
  },
  {
    id: 5,
    city: "UNITED KINGDOM",
    address: "The Yorkshire Clinic, Bradford Road, Bingley BD16 1TW, UK",
    buttonText: "YORKSHIRE CLINIC",
    imageUrl: "/assets/location/UNITEDKINGDOM.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=The+Yorkshire+Clinic+Bradford+Road+Bingley+BD16+1TW",
  },
];

// --- COMPONENT: Location Card ---
const LocationCard = ({ location }: { location: Location }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100">
      {/* Image Container */}
      <div className="h-48 w-full relative bg-gray-200 overflow-hidden">
        <Image
          src={location.imageUrl}
          alt={`${location.city} Clinic`}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const LocationDetilas = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <CommonHero
        title="Visit Us"
        subtitle="Find the right specialist and location for your needs."
        images={[
          "/assets/location/unnamed.jpg",
          "/assets/location/LONDON.jpeg",
          "/assets/location/MANCHESTER.jpg",
          "/assets/location/LIVERPOOL.jpg",
          "/assets/location/UNITEDKINGDOM.jpg",
        ]}
        breadcrumbs={[{ label: "Location", href: "/location" }]}
      />
      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header (Optional) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Visit Us</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapping Locations */}
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you find the right
            specialist and location for your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors"
          >
            Get in touch with us <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationDetilas;
