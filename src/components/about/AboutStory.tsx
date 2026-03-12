import Image from "next/image";
import Link from "next/link";

export default function AboutStory() {
  return (
    <section className="bg-[#f8f5f0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
              Our Story
            </p>

            <h2 className="font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
              Built around hospitality, personality, and a memorable dining experience
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-neutral-600">
              <p>
                Lamour Cafe Restaurant was created as a place where guests can enjoy
                more than just a meal. The atmosphere, the presentation, and the
                feeling of the space all play a role in the experience.
              </p>

              <p>
                The restaurant is founded by a couple whose vision brings together
                warmth, style, and a personal approach to hospitality. Based in
                Suriname and shaped in part by Venezuelan influence, Lamour carries
                a subtle Latin character that gives the restaurant its own identity.
              </p>

              <p>
                From grilled plates and pasta dishes to late-night dining and intimate
                moments, Lamour is designed for guests who appreciate flavor,
                ambiance, and a setting that feels both refined and welcoming.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full bg-[#d97706] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b86305]"
              >
                View Menu
              </Link>

              <Link
                href="/reservations"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Reserve a Table
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] shadow-sm">
              <div className="relative h-[260px] w-full sm:h-[320px]">
                <Image
                  src="/images/lamour-pasta.png"
                  alt="Lamour pasta dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] shadow-sm sm:mt-10">
              <div className="relative h-[260px] w-full sm:h-[320px]">
                <Image
                  src="/images/lamour-chicken.jpg"
                  alt="Lamour chicken dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] shadow-sm sm:col-span-2">
              <div className="relative h-[280px] w-full sm:h-[340px]">
                <Image
                  src="/images/lamour-steak.jpg"
                  alt="Lamour signature steak"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}