
import Image from "next/image";
import { MapPin } from "lucide-react"; // Import location icon
import { cn } from "@/lib/utils";

// Updated artwork data with locations and generated descriptions
const artworks = [
  {
    id: 1,
    src: "/photography/artwork1.jpg",
    alt: "Forest stream",
    location: "Random jungle, Krabi",
    description: "A serene stream flowing through a lush green jungle in Krabi.",
    rotation: -2,
  },
  {
    id: 2,
    src: "/photography/artwork2.jpg",
    alt: "Betong Mongkollit Tunnel",
    location: "Mongkollit tunnel, Betong",
    description: "The illuminated entrance of the Betong Mongkollit Tunnel at night, adorned with red lanterns.",
    rotation: 1,
  },
  {
    id: 3,
    src: "/photography/artwork3.jpg",
    alt: "Thai temple",
    location: "Wat Chalong, Phuket",
    description: "The ornate Wat Chalong temple in Phuket under a bright sky, with a large tree nearby.",
    rotation: -1,
  },
];

export function Photography() {
  return (
    <section id="photography" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-heading-text sm:text-4xl md:text-5xl">
            Photography
          </h2>
          {/* Added introduction text */}
          <p className="mt-3 text-muted-foreground md:text-lg">
            These are my best photos yet, shot on a Sony ZV-E10.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative bg-white p-4 pb-16 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ transform: `rotate(${artwork.rotation}deg)` }}
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={artwork.src}
                  alt={artwork.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="bg-gray-200 transition-opacity duration-300 group-hover:opacity-75"
                  priority={artwork.id === 1}
                />
                {/* Hover Description Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
                  <p className="text-white text-center text-sm p-4">
                    {artwork.description}
                  </p>
                </div>
              </div>
              {/* Location Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-gray-600 mt-3">
                <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
                <span className="text-xs truncate font-medium">
                  {artwork.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

