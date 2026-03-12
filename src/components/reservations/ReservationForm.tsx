export default function ReservationForm() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
            Reservation Request
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
            Send a reservation request
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Fill in your details and the restaurant can confirm availability.
          </p>
        </div>

        <form className="rounded-[28px] bg-[#f8f5f0] p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-900">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-[#d97706]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-900">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+597 ..."
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-[#d97706]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-900">
                Date
              </label>
              <input
                type="date"
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-[#d97706]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-900">
                Time
              </label>
              <input
                type="time"
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-[#d97706]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-neutral-900">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                placeholder="2"
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-[#d97706]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-neutral-900">
                Special Request
              </label>
              <textarea
                rows={5}
                placeholder="Tell us if this is a birthday, celebration, or any special request."
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-[#d97706]"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex rounded-full bg-[#d97706] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b86305]"
            >
              Send Reservation Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}