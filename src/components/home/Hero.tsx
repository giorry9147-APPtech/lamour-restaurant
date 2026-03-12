import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <Image
        src="/images/lamour-hero.png"
        alt="Signature steak dish at Lamour Cafe Restaurant"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-16">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80">
            Lamour Cafe Restaurant
          </p>

          <h1 className="mb-5 font-[var(--font-heading)] text-4xl leading-tight sm:text-5xl md:text-6xl">
            A warm dining experience with bold flavor and elegant atmosphere
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Discover signature dishes, late-night ambiance, and a restaurant
            experience shaped by warmth, style, and Latin-inspired character.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-full bg-[#d97706] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#b86305]"
            >
              View Menu
            </Link>

            <Link
              href="/reservations"
              className="rounded-full border border-white/80 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}