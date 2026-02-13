"use client";

import { useCart } from "@/context/cart-context";
import {
  boxTypeAllergens,
  boxTypes,
  boxVariants,
  BoxType,
  BoxVariant,
  mysteryBoxDescription,
  mysteryBoxes,
} from "@/lib/menu-data";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./section-title";

interface MysteryBoxesSectionProps {
  onOpenAllergens: (itemName: string, relevantAllergens: number[]) => void;
}

interface MysteryBoxCardProps {
  size: "Large" | "Medium" | "Small";
  price: number;
  contains: string;
  anchorId: string;
  onOpenAllergens: MysteryBoxesSectionProps["onOpenAllergens"];
}

function MysteryBoxCard({ size, price, contains, anchorId, onOpenAllergens }: MysteryBoxCardProps) {
  const { addItem } = useCart();
  const [boxType, setBoxType] = useState<BoxType>("Sea");
  const [variant, setVariant] = useState<BoxVariant>("Black");

  const addToCart = () => {
    addItem({
      id: `mystery-${size}-${boxType}-${variant}`.toLowerCase(),
      name: `${size} ${boxType} Box`,
      price,
      details: `${variant} variant · ${contains}`,
    });
  };

  return (
    <article
      id={anchorId}
      className="rounded-xl border border-[#D4AF37]/25 bg-gradient-to-b from-white/[0.03] to-transparent p-6"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="font-display text-2xl text-white">{size} Box</h3>
        <p className="text-xl font-semibold text-[#D4AF37]">{price}€</p>
      </div>

      <p className="text-sm text-white/70">{contains}</p>
      <p className="mt-2 text-sm text-white/75">{mysteryBoxDescription}</p>

      <div className="mt-6">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Type</p>
        <div className="grid grid-cols-3 gap-2">
          {boxTypes.map((typeOption) => (
            <button
              key={typeOption}
              type="button"
              className={`rounded border px-3 py-2 text-xs uppercase tracking-[0.15em] transition ${
                boxType === typeOption
                  ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#F3DE98]"
                  : "border-white/15 text-white/70 hover:border-[#D4AF37]/55"
              }`}
              onClick={() => setBoxType(typeOption)}
            >
              {typeOption}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Variant</p>
        <div className="grid grid-cols-2 gap-2">
          {boxVariants.map((variantOption) => (
            <button
              key={variantOption}
              type="button"
              className={`rounded border px-3 py-2 text-xs uppercase tracking-[0.15em] transition ${
                variant === variantOption
                  ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#F3DE98]"
                  : "border-white/15 text-white/70 hover:border-[#D4AF37]/55"
              }`}
              onClick={() => setVariant(variantOption)}
            >
              {variantOption}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={addToCart}
          className="rounded border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={() => onOpenAllergens(`${size} ${boxType} Box`, boxTypeAllergens[boxType])}
          className="rounded border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
        >
          Allergens
        </button>
      </div>
    </article>
  );
}

export function MysteryBoxesSection({ onOpenAllergens }: MysteryBoxesSectionProps) {
  return (
    <section id="mystery-boxes" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
      <SectionTitle
        eyebrow="Mystery Boxes"
        title="Choose your discipline."
        subtitle="Every box is curated by our chefs. You choose the category and size. The Samurai chooses the rolls."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {mysteryBoxes.map((box, index) => (
          <motion.div
            key={box.size}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <MysteryBoxCard
              size={box.size}
              price={box.price}
              contains={box.contains}
              anchorId={box.anchorId}
              onOpenAllergens={onOpenAllergens}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
