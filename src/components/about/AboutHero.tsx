import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[55vh] overflow-hidden">
      <Image
        src="/images/lamour-couple.jpg"
        alt="Lamour Cafe Restaurant interior and atmosphere"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-6 py-16">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
            About Lamour
          </p>

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl">
            A restaurant shaped by warmth, atmosphere, and flavor
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Lamour brings together elegant dining, inviting late-night energy,
            and a blend of influences that make every visit feel special.
          </p>
        </div>
      </div>
    </section>
  );
}