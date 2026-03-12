import Link from "next/link";

export default function ReservationCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[32px] bg-[#d97706] px-8 py-12 text-white shadow-lg sm:px-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              Reservations
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl">
              Reserve your table or call the restaurant
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Planning dinner, a celebration, or a late-night visit? Contact
              Lamour directly and secure your table with ease.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/reservations"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#d97706] transition hover:bg-neutral-100"
              >
                Reserve Your Table
              </Link>

              <a
                href="tel:+5978997373"
                className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#d97706]"
              >
                Call Restaurant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}