"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { boxSizes, boxTypes } from "@/data/menu-data";
import { useCart } from "@/context/CartContext";
import { AllergenCode, BoxSize, BoxType, BoxVariant } from "@/types/menu";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

interface BoxesSectionProps {
  onOpenAllergens: (title: string, allergens: AllergenCode[]) => void;
}

function createCartItemName(boxSize: BoxSize, boxType: BoxType) {
  return `${boxSize.label} ${boxType.label}`;
}

export default function BoxesSection({ onOpenAllergens }: BoxesSectionProps) {
  const { addItem } = useCart();
  const [variants, setVariants] = useState<Record<string, BoxVariant>>({});

  const groupedBySize = useMemo(
    () =>
      boxSizes.map((size) => ({
        ...size,
        items: boxTypes.map((type) => ({
          size,
          type,
          key: `${size.id}-${type.id}`,
        })),
      })),
    [],
  );

  const setVariant = (key: string, value: BoxVariant) => {
    setVariants((current) => ({ ...current, [key]: value }));
  };

  return (
    <section id="menu" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mystery Boxes"
          title="You Choose Type and Size. The Samurai Chooses the Rolls."
          description="All boxes are mystery boxes. Build your order by selecting Sea, Vegan, or Mix in Large, Medium, or Small formats."
        />

        <div className="space-y-16">
          {groupedBySize.map((sizeGroup, sizeIndex) => (
            <div key={sizeGroup.id} id={`${sizeGroup.id}-boxes`}>
              <FadeIn delay={sizeIndex * 0.08}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#D4AF37]/30 pb-4">
                  <h3 className="font-display text-2xl text-white sm:text-3xl">{sizeGroup.label} Boxes</h3>
                  <div className="text-right">
                    <p className="text-sm text-white/75">{sizeGroup.contains}</p>
                    <p className="mt-1 text-lg text-[#D4AF37]">{sizeGroup.price}€</p>
                  </div>
                </div>
              </FadeIn>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {sizeGroup.items.map((item, itemIndex) => {
                  const selectedVariant = variants[item.key] ?? "Black";

                  return (
                    <motion.article
                      key={item.key}
                      className="rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    >
                      <p className="text-xs tracking-[0.2em] text-[#D4AF37]/80 uppercase">{item.type.label}</p>
                      <h4 className="mt-3 font-display text-2xl text-white">
                        {createCartItemName(item.size, item.type)}
                      </h4>
                      <p className="mt-2 text-sm text-white/70">
                        You don&apos;t choose the rolls. The Samurai does.
                      </p>
                      <p className="mt-4 text-xl text-[#D4AF37]">{item.size.price}€</p>
                      <p className="mt-1 text-xs text-white/65">{item.size.contains}</p>

                      <div className="mt-6">
                        <p className="mb-2 text-xs tracking-[0.2em] text-white/70 uppercase">
                          Box Variant
                        </p>
                        <div className="flex gap-2">
                          {(["Black", "White"] as const).map((variant) => {
                            const isActive = selectedVariant === variant;
                            return (
                              <button
                                key={variant}
                                type="button"
                                onClick={() => setVariant(item.key, variant)}
                                className={`rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase transition ${
                                  isActive
                                    ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                                    : "border-white/25 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                                }`}
                              >
                                {variant}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-7 grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            addItem({
                              id: `${item.size.id}-${item.type.id}-${selectedVariant.toLowerCase()}`,
                              name: createCartItemName(item.size, item.type),
                              unitPrice: item.size.price,
                              description: `${selectedVariant} variant`,
                            })
                          }
                          className="rounded-full border border-[#D4AF37] bg-[#D4AF37] px-4 py-2 text-xs font-medium tracking-[0.15em] text-black uppercase transition hover:bg-transparent hover:text-[#D4AF37]"
                        >
                          Add to Cart
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            onOpenAllergens(createCartItemName(item.size, item.type), item.type.allergens)
                          }
                          className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium tracking-[0.15em] text-white/85 uppercase transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                        >
                          Allergens
                        </button>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
