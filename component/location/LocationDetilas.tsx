import { ArrowRight, MapPin, Phone } from "lucide-react";

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
    imageUrl: "/images/clinics/leeds.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Regents+Specialist+Clinics+1A+Grange+Park+Avenue+Oakwood+Leeds+LS8+3BA",
  },
  {
    id: 2,
    city: "LONDON",
    address:
      "10 Harley Street, London. W1G 9PF – Harley Health Village, 64 Harley Street. London. W1G 9HN",
    buttonText: "LONDON CLINIC",
    imageUrl: "/images/clinics/london.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=10+Harley+Street+London+W1G+9PF",
  },
  {
    id: 3,
    city: "MANCHESTER",
    address: "Pall Mall Medical, 61 King Street, Manchester. M2 4PD",
    buttonText: "MANCHESTER CLINIC",
    imageUrl: "/images/clinics/manchester.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Pall+Mall+Medical+61+King+Street+Manchester+M2+4PD",
  },
  {
    id: 4,
    city: "LIVERPOOL",
    address: "Pall Mall Medical, 1a Belvedere Road, Newton-le-Willow. WA12 0JJ",
    buttonText: "LIVERPOOL CLINIC",
    imageUrl: "/images/clinics/liverpool.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Pall+Mall+Medical+1a+Belvedere+Road+Newton-le-Willow+WA12+0JJ",
  },
  {
    id: 5,
    city: "UNITED KINGDOM",
    address: "The Yorkshire Clinic, Bradford Road, Bingley BD16 1TW, UK",
    buttonText: "YORKSHIRE CLINIC",
    imageUrl: "/images/clinics/yorkshire.jpg", // Replace with your image
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=The+Yorkshire+Clinic+Bradford+Road+Bingley+BD16+1TW",
  },
];

// --- COMPONENT: Hero Section ---
const HeroSection = () => {
  return (
    <div className="relative bg-teal-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Replace src with a real medical background image */}
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Medical Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
          National Coverage
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Our Clinic Locations
        </h1>
        <p className="text-lg md:text-xl text-teal-100 max-w-2xl mb-8">
          World-class healthcare facilities located conveniently across the UK.
          Find the specialist clinic nearest to you.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-teal-900 hover:bg-teal-50 px-8 py-3 rounded-full font-bold transition duration-200 flex items-center">
            Find Nearest Clinic <MapPin className="ml-2 w-4 h-4" />
          </button>
          <button className="bg-transparent border-2 border-teal-500 text-white hover:bg-teal-800 px-8 py-3 rounded-full font-bold transition duration-200 flex items-center">
            Contact Support <Phone className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: Location Card ---
const LocationCard = ({ location }: { location: Location }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100">
      {/* Image Container */}
      <div className="h-48 w-full relative bg-gray-200 overflow-hidden">
        <img
          src={location.imageUrl}
          alt={`${location.city} Clinic`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient for better text contrast if you want text on image later */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col items-center flex-grow text-center">
        <h3 className="text-teal-600 font-bold text-lg tracking-wide mb-3 uppercase">
          {location.city}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
          {location.address}
        </p>

        {/* Action Button - Exact match to design */}
        <a
          href={location.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300"
        >
          {location.buttonText}
        </a>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const LocationDetilas = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <HeroSection />

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
            Can't find what you're looking for?
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
