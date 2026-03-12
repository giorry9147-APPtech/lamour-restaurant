"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuSections, type MenuSection } from "@/data/menu";

const galleryImages = [
  "/images/lamour-steak.jpg",
  "/images/lamour-burger.jpg",
  "/images/lamour-shrimps.jpg",
  "/images/lamour-pasta.png",
  "/images/lamour-salmon.jpg",
];

const leftColumnIds = ["appetizers", "burgers"];
const rightColumnIds = ["dinners", "pastas", "sides"];

const leftColumn = menuSections.filter((section) =>
  leftColumnIds.includes(section.id)
);

const rightColumn = menuSections.filter((section) =>
  rightColumnIds.includes(section.id)
);

function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function MenuBlock({ section }: { section: MenuSection }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="mb-8">
        <h2 className="font-[var(--font-heading)] text-4xl text-white sm:text-5xl">
          {section.title}
        </h2>
      </div>

      <div className="space-y-5">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="border-b border-white/10 pb-5 last:border-none last:pb-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 pr-3">
                <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {item.name}
                </h3>

                {item.note ? (
                  <p className="mt-2 text-sm italic leading-6 text-white/70 sm:text-base">
                    {item.note}
                  </p>
                ) : null}
              </div>

              <span className="shrink-0 whitespace-nowrap text-xl font-bold text-[#e45b45] sm:text-2xl">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <main className="bg-[#1f1c1b] text-white">
      <section className="border-b border-white/10 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#e45b45]">
              Welcome to
            </p>

            <h1 className="text-center font-[var(--font-heading)] text-5xl uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
              Lamour Restaurant
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-white/75 sm:text-lg">
              Explore the official Lamour menu in a fast, elegant, mobile-friendly
              HTML layout.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={0.05}>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {galleryImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative h-40 overflow-hidden rounded-2xl bg-black/20 sm:h-48"
                >
                  <Image
                    src={src}
                    alt="Lamour menu preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-y border-white/10 bg-[#1f1c1b]/95 px-6 py-4 backdrop-blur sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.18em] text-white/75 sm:gap-8 sm:text-base">
          {menuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="transition hover:text-[#e45b45]"
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 pt-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-16 lg:border-r lg:border-white/10 lg:pr-10">
            {leftColumn.map((section, index) => (
              <ScrollReveal key={section.id} delay={index * 0.05}>
                <MenuBlock section={section} />
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-16">
            {rightColumn.map((section, index) => (
              <ScrollReveal key={section.id} delay={index * 0.05}>
                <MenuBlock section={section} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal>
            <p className="text-xl font-semibold italic text-[#e45b45] sm:text-2xl">
              L&apos;amour in every bite.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/reservations"
                className="rounded-full bg-[#e45b45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#cf4b35]"
              >
                Reserve Your Table
              </Link>

              <a
                href="tel:+5978708680"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1f1c1b]"
              >
                Call Restaurant
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}