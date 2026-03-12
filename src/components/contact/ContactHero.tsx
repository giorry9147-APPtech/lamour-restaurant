import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden">
      <Image
        src="/images/lamour-contact.jpg"
        alt="Lamour Cafe Restaurant interior"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-6 py-16">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
            Contact
          </p>

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl">
            Get in touch with Lamour
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Visit, call, or message us directly for reservations, questions, or
            dining information.
          </p>
        </div>
      </div>
    </section>
  );
}