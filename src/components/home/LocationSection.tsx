import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
            Location
          </p>

          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-neutral-900">
            Visit Lamour Cafe Restaurant
          </h2>

          <p className="mt-4 text-neutral-600 leading-7">
            Find us in Paramaribo and enjoy an evening of great food,
            atmosphere and warm hospitality.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Address */}
          <div>

            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Our Location
            </h3>

            <div className="space-y-4 text-neutral-700">

              <p>
                <span className="font-semibold text-neutral-900">
                  Address
                </span>
                <br />
                Gompertstraat 207
                <br />
                Paramaribo, Suriname
              </p>

              <p>
                <span className="font-semibold text-neutral-900">
                  Nearby
                </span>
                <br />
                Next to Soluna Bar
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Gompertstraat+207+Paramaribo+Suriname"
                target="_blank"
                className="bg-[#d97706] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b86305] transition"
              >
                Open in Google Maps
              </a>

              <Link
                href="/reservations"
                className="border border-neutral-300 px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-100 transition"
              >
                Reserve a Table
              </Link>

            </div>

          </div>

          {/* Google map */}
          <div className="rounded-[28px] overflow-hidden shadow-md">

            <iframe
              src="https://www.google.com/maps?q=Gompertstraat%20207%20Paramaribo%20Suriname&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>
      </div>
    </section>
  );
}