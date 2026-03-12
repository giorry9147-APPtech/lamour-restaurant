export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Butter & Garlic Shrimp", price: "$11.99" },
      { name: "Fried Shrimp", price: "$13" },
      { name: "Kip Sate", price: "$10.50" },
      { name: "Calabresa", price: "$9.50" },
      { name: "Hot Wings", price: "$10.50" },
      { name: "Naked Wings", price: "$11.99" },
      { name: "Bitterballe", price: "$9" },
      { name: "Tequeños", price: "$11.99" },
    ],
  },
  {
    id: "dinners",
    title: "Dinners",
    items: [
      { name: "Grilled Chicken", price: "$16" },
      { name: "Skirt Steak", price: "$37.50" },
      { name: "Picanha", price: "$37" },
      {
        name: "Rib Eye Steak",
        price: "$42.99",
        note: "With one side and vegetables",
      },
    ],
  },
  {
    id: "pastas",
    title: "Pastas",
    items: [
      { name: "Chicken Alfredo", price: "$16" },
      { name: "Beef Alfredo", price: "$28.99" },
      { name: "Shrimp Alfredo", price: "$22" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      { name: "Beef Burger", price: "$10.50" },
      { name: "Chicken Burger", price: "$9" },
      { name: "Additional Bacon", price: "$2" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "French Fries", price: "$2.50" },
      { name: "Wedges", price: "$2.50" },
      { name: "Cassava Fries", price: "$3" },
    ],
  },
];

export const menuPreviewSections = menuSections.map((section) => ({
  id: section.id,
  title: section.title,
  items: section.items.slice(0, 3),
}));