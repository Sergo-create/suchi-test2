export const allergenList = [
  { id: 1, name: "Gluten" },
  { id: 2, name: "Crustaceans" },
  { id: 3, name: "Eggs" },
  { id: 4, name: "Fish" },
  { id: 5, name: "Peanuts" },
  { id: 6, name: "Soy" },
  { id: 7, name: "Milk" },
  { id: 8, name: "Nuts" },
  { id: 9, name: "Celery" },
  { id: 10, name: "Mustard" },
  { id: 11, name: "Sesame" },
  { id: 12, name: "Sulphites" },
  { id: 13, name: "Lupin" },
  { id: 14, name: "Molluscs" },
] as const;

export type AllergenId = (typeof allergenList)[number]["id"];

export type BoxType = "Sea" | "Vegan" | "Mix";
export type BoxSize = "Large" | "Medium" | "Small";
export type BoxVariant = "Black" | "White";

export const boxTypes: BoxType[] = ["Sea", "Vegan", "Mix"];
export const boxVariants: BoxVariant[] = ["Black", "White"];
export const mysteryBoxDescription = "You don’t choose the rolls. The Samurai does.";

export const mysteryBoxes: {
  size: BoxSize;
  price: number;
  contains: string;
  anchorId: string;
}[] = [
  { size: "Large", price: 50, contains: "Contains 3 mysterious rolls", anchorId: "large-boxes" },
  { size: "Medium", price: 35, contains: "Contains 2 mysterious rolls", anchorId: "medium-boxes" },
  {
    size: "Small",
    price: 20,
    contains: "Contains 1 standard roll OR 2 mini rolls",
    anchorId: "small-boxes",
  },
];

export const boxTypeAllergens: Record<BoxType, AllergenId[]> = {
  Sea: [1, 2, 4, 6, 11, 14],
  Vegan: [1, 6, 11],
  Mix: [1, 2, 4, 6, 7, 11, 14],
};

export interface RollItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  allergens: AllergenId[];
  image: string;
}

export interface RollCollection {
  id: string;
  title: string;
  rolls: RollItem[];
}

const sushiImages = [
  "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1617196038434-0e9cb5cf873f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1611270634833-4f71f8e44418?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1582450871972-ab5ca6e2380d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1400&q=80",
];

export const rollCollections: RollCollection[] = [
  {
    id: "sea-collection",
    title: "Sea Collection",
    rolls: [
      { id: "salmon-avocado-roll", name: "Salmon Avocado Roll", weight: "250g", price: 12, allergens: [4], image: sushiImages[0] },
      { id: "spicy-tuna-roll", name: "Spicy Tuna Roll", weight: "240g", price: 13, allergens: [4], image: sushiImages[1] },
      { id: "shrimp-tempura-roll", name: "Shrimp Tempura Roll", weight: "300g", price: 14, allergens: [1, 2, 4, 6], image: sushiImages[2] },
      { id: "philadelphia-roll", name: "Philadelphia Roll", weight: "260g", price: 13, allergens: [4, 6, 7], image: sushiImages[3] },
      { id: "unagi-roll", name: "Unagi Roll", weight: "270g", price: 15, allergens: [4, 6], image: sushiImages[4] },
      { id: "scallop-roll", name: "Scallop Roll", weight: "240g", price: 15, allergens: [14], image: sushiImages[5] },
      { id: "crab-roll", name: "Crab Roll", weight: "250g", price: 12, allergens: [2, 4], image: sushiImages[6] },
      { id: "rainbow-roll", name: "Rainbow Roll", weight: "320g", price: 15, allergens: [4], image: sushiImages[7] },
      { id: "tako-roll", name: "Tako Roll", weight: "240g", price: 14, allergens: [14], image: sushiImages[8] },
      { id: "yellowtail-roll", name: "Yellowtail Roll", weight: "250g", price: 14, allergens: [4], image: sushiImages[9] },
    ],
  },
  {
    id: "vegan-collection",
    title: "Vegan Collection",
    rolls: [
      { id: "avocado-roll", name: "Avocado Roll", weight: "230g", price: 10, allergens: [], image: sushiImages[1] },
      { id: "cucumber-roll", name: "Cucumber Roll", weight: "220g", price: 10, allergens: [], image: sushiImages[2] },
      { id: "mango-avocado-roll", name: "Mango Avocado Roll", weight: "250g", price: 12, allergens: [], image: sushiImages[3] },
      { id: "tofu-roll", name: "Tofu Roll", weight: "260g", price: 12, allergens: [6], image: sushiImages[4] },
      { id: "vegetable-tempura-roll", name: "Vegetable Tempura Roll", weight: "280g", price: 13, allergens: [1], image: sushiImages[5] },
      { id: "sweet-potato-roll", name: "Sweet Potato Roll", weight: "270g", price: 13, allergens: [], image: sushiImages[6] },
      { id: "asparagus-roll", name: "Asparagus Roll", weight: "230g", price: 11, allergens: [], image: sushiImages[7] },
      { id: "shiitake-roll", name: "Shiitake Roll", weight: "250g", price: 12, allergens: [], image: sushiImages[8] },
      { id: "green-samurai-roll", name: "Green Samurai Roll", weight: "300g", price: 14, allergens: [], image: sushiImages[9] },
      { id: "oshinko-roll", name: "Oshinko Roll", weight: "220g", price: 10, allergens: [], image: sushiImages[0] },
    ],
  },
  {
    id: "mix-collection",
    title: "Mix Collection",
    rolls: [
      { id: "chicken-teriyaki-roll", name: "Chicken Teriyaki Roll", weight: "280g", price: 12, allergens: [6], image: sushiImages[2] },
      { id: "beef-roll", name: "Beef Roll", weight: "300g", price: 14, allergens: [], image: sushiImages[3] },
      { id: "surf-turf-roll", name: "Surf & Turf Roll", weight: "320g", price: 15, allergens: [2], image: sushiImages[4] },
      { id: "salmon-cheese-roll", name: "Salmon Cheese Roll", weight: "270g", price: 13, allergens: [4, 7], image: sushiImages[5] },
      { id: "tempura-chicken-roll", name: "Tempura Chicken Roll", weight: "290g", price: 13, allergens: [1], image: sushiImages[6] },
      { id: "bacon-samurai-roll", name: "Bacon Samurai Roll", weight: "300g", price: 14, allergens: [], image: sushiImages[7] },
      { id: "spicy-salmon-mix", name: "Spicy Salmon Mix", weight: "260g", price: 13, allergens: [4], image: sushiImages[8] },
      { id: "dragon-roll", name: "Dragon Roll", weight: "320g", price: 15, allergens: [4], image: sushiImages[9] },
      { id: "fried-samurai-roll", name: "Fried Samurai Roll", weight: "300g", price: 14, allergens: [1, 4], image: sushiImages[0] },
      { id: "cheese-volcano-roll", name: "Cheese Volcano Roll", weight: "280g", price: 14, allergens: [7], image: sushiImages[1] },
    ],
  },
];

export interface AddOnItem {
  id: string;
  name: string;
  size: string;
  price: number;
}

export const addOns: AddOnItem[] = [
  { id: "soy-sauce", name: "Soy Sauce", size: "100ml", price: 5 },
  { id: "wasabi", name: "Wasabi", size: "10g", price: 5 },
  { id: "ginger", name: "Ginger", size: "100g", price: 5 },
  { id: "chopsticks", name: "Chopsticks", size: "Pair", price: 4 },
];
