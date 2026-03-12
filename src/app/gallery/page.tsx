"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#f8f5f0]">
      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
            Gallery
          </p>

          <h1 className="font-[var(--font-heading)] text-4xl text-neutral-900 sm:text-5xl">
            Explore the Lamour gallery
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            A full collection of dishes, presentation, and atmosphere from
            Lamour Cafe Restaurant.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedImage(image.src)}
                className="group relative overflow-hidden rounded-[24px] text-left shadow-sm"
              >
                <div className="relative aspect-[3/4] w-full">
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
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close gallery image"
          >
            <X size={24} />
          </button>

          <div className="relative h-[82vh] w-full max-w-6xl">
            <Image
              src={selectedImage}
              alt="Selected Lamour gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}