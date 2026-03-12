"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/lamour-steak.jpg",
    alt: "Lamour signature steak dish",
  },
  {
    src: "/images/lamour-pasta.png",
    alt: "Lamour pasta dish",
  },
  {
    src: "/images/lamour-chicken.jpg",
    alt: "Lamour chicken plate",
  },
  {
    src: "/images/lamour-salmon.jpg",
    alt: "Lamour salmon dish",
  },
  {
    src: "/images/lamour-burger.jpg",
    alt: "Lamour rice dish",
  },
  {
    src: "/images/lamour-shrimps.jpg",
    alt: "Lamour restaurant visual",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
            Gallery
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
            A closer look at the Lamour experience
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Explore signature dishes, plated details, and the visual atmosphere
            that defines Lamour Cafe Restaurant.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className="group relative overflow-hidden rounded-[24px] text-left"
            >
              <div className="relative h-[260px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close gallery image"
          >
            <X size={24} />
          </button>

          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={selectedImage}
              alt="Selected Lamour gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}