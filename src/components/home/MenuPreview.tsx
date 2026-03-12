import Link from "next/link";
import { menuPreviewSections } from "@/data/menu";

export default function MenuPreview() {
  return (
    <section className="bg-[#f8f5f0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
              Menu Preview
            </p>

            <h2 className="font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
              A selection from the Lamour menu
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              Discover appetizers, dinners, pastas, burgers, and sides in a menu
              designed for late-night dining and warm restaurant moments.
            </p>

            <div className="mt-8">
              <Link
                href="/menu"
                className="inline-flex rounded-full bg-[#d97706] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b86305]"
              >
                View Full Menu
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {menuPreviewSections.slice(0, 4).map((category) => (
              <article
                key={category.id}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                  {category.title}
                </h3>

                <ul className="space-y-3 text-sm text-neutral-600">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-3 last:border-none last:pb-0"
                    >
                      <span>{item.name}</span>
                      <span className="shrink-0 font-semibold text-[#d97706]">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}