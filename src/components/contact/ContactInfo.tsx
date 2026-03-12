export default function ContactInfo() {
  return (
    <section className="bg-[#f8f5f0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] bg-[#1f1c1b] p-8 text-white shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#e45b45]">
              Contact Details
            </p>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl">
              Everything you need to visit Lamour
            </h2>

            <div className="mt-8 space-y-6">
              <div className="border-b border-white/10 pb-5">
                <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                  Address
                </p>
                <p className="mt-2 text-base leading-7 text-white">
                  Gompertstraat 207
                  <br />
                  Paramaribo, Suriname
                  <br />
                  Next to Soluna Bar
                </p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                  Phone
                </p>
                <div className="mt-2 space-y-2">
                  <a
                    href="tel:+5978708680"
                    className="block text-base leading-7 text-white transition hover:text-[#e45b45]"
                  >
                    +597 8708680
                  </a>
                  <a
                    href="tel:+5978859555"
                    className="block text-base leading-7 text-white transition hover:text-[#e45b45]"
                  >
                    +597 8859555
                  </a>
                </div>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                  Opening Hours
                </p>
                <p className="mt-2 text-base leading-7 text-white">
                  Monday – Sunday
                  <br />
                  7:00 PM – 3:00 AM
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                  Quick Actions
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://wa.me/5978708680?text=Hello%20Lamour%2C%20I%20would%20like%20more%20information."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#e45b45] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf4b35]"
                  >
                    WhatsApp Us
                  </a>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Gompertstraat+207+Paramaribo+Suriname"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1f1c1b]"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-black/5">
            <iframe
              src="https://www.google.com/maps?q=Gompertstraat%20207%20Paramaribo%20Suriname&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[420px] rounded-[22px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}