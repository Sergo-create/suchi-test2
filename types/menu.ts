export type AllergenCode =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;

export type BoxSizeId = "large" | "medium" | "small";
export type BoxTypeId = "sea" | "vegan" | "mix";
export type BoxVariant = "Black" | "White";

export interface BoxSize {
  id: BoxSizeId;
  label: "Large" | "Medium" | "Small";
  price: number;
  contains: string;
}

export interface BoxType {
  id: BoxTypeId;
  label: "Sea Box" | "Vegan Box" | "Mix Box";
  allergens: AllergenCode[];
}

export interface RollItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  allergens: AllergenCode[];
  image: string;
}

export interface RollCategory {
  id: "sea-collection" | "vegan-collection" | "mix-collection";
  title: "Sea Collection" | "Vegan Collection" | "Mix Collection";
  rolls: RollItem[];
}

export interface AddOnItem {
  id: string;
  name: string;
  quantity: string;
  price: number;
}

export interface CartItem {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  description?: string;
}
