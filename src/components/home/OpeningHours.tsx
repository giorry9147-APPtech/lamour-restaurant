const schedule = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "7:00 PM – 3:00 AM" },
  { day: "Thursday", hours: "7:00 PM – 3:00 AM" },
  { day: "Friday", hours: "7:00 PM – 3:00 AM" },
  { day: "Saturday", hours: "7:00 PM – 3:00 AM" },
  { day: "Sunday", hours: "7:00 PM – 3:00 AM" },
];

export default function OpeningHours() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
            Opening Hours
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
            Join us throughout the week
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Plan your evening at Lamour with our regular dining hours.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] bg-[#f8f5f0] shadow-sm ring-1 ring-black/5">
          <div className="divide-y divide-neutral-200">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between px-6 py-5 text-sm sm:px-8 sm:text-base"
              >
                <span className="font-medium text-neutral-900">{item.day}</span>
                <span className="text-neutral-600">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}