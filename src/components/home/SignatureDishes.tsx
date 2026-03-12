import Image from "next/image";

const dishes = [
  {
    title: "Signature Steak",
    description:
      "Grilled and finished with rich seasoning, served for guests who want a bold and satisfying plate.",
    image: "/images/lamour-steak.jpg",
  },
  {
    title: "Creamy House Pasta",
    description:
      "A smooth and savory pasta dish with a refined, comforting finish and a warm Lamour touch.",
    image: "/images/lamour-pasta.png",
  },
  {
    title: "Chicken Plate",
    description:
      "A complete plate with seasoned chicken, fresh salad, and sauces that bring balance and flavor.",
    image: "/images/lamour-chicken.jpg",
  },
];

export default function SignatureDishes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706]">
            Signature Dishes
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
            Featured plates that define the Lamour experience
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            A selection of dishes that showcase the style, flavor, and visual
            identity of the restaurant.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.title}
              className="overflow-hidden rounded-[28px] bg-[#f8f5f0] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                  {dish.title}
                </h3>
                <p className="text-sm leading-7 text-neutral-600">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}