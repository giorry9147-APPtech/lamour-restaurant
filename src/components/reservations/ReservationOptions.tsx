import Link from "next/link";

const reservationDetails = [
  { label: "Opening Hours", value: "Monday – Sunday · 7:00 PM – 3:00 AM" },
  { label: "Location", value: "Gompertstraat 207, Paramaribo, Suriname" },
  { label: "Phone", value: "+597 8708680" },
];

export default function ReservationOptions() {
  return (
    <section className="bg-[#f8f5f0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
              Reserve
            </p>

            <h2 className="font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
              Choose the easiest way to contact the restaurant
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              For the fastest response, contact Lamour directly by WhatsApp or
              phone. You can also send a reservation request using the form
              below.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5978708680?text=Hello%20Lamour%2C%20I%20would%20like%20to%20reserve%20a%20table."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#d97706] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b86305]"
              >
                Reserve via WhatsApp
              </a>

              <a
                href="tel:+5978708680"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Call Restaurant
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f8f5f0] p-5">
                <h3 className="text-base font-semibold text-neutral-900">
                  Small reservations
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Ideal for dinner dates, casual evenings, and small groups.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8f5f0] p-5">
                <h3 className="text-base font-semibold text-neutral-900">
                  Celebrations
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Contact the restaurant directly for birthdays or larger table
                  arrangements.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#1f1c1b] p-8 text-white shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#e45b45]">
              Details
            </p>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl">
              Reservation information
            </h2>

            <div className="mt-8 space-y-5">
              {reservationDetails.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 pb-5 last:border-none last:pb-0"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-medium leading-7 text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1f1c1b]"
              >
                View Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}