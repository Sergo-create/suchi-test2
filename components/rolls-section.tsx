"use client";

import { useCart } from "@/context/cart-context";
import { rollCollections } from "@/lib/menu-data";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "./section-title";

interface RollsSectionProps {
  onOpenAllergens: (itemName: string, relevantAllergens: number[]) => void;
}

export function RollsSection({ onOpenAllergens }: RollsSectionProps) {
  const { addItem } = useCart();

  return (
    <section id="rolls" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
      <SectionTitle
        eyebrow="Rolls"
        title="30 signature rolls."
        subtitle="Sea, Vegan, and Mix collections crafted for precision, balance, and bold taste."
      />

      <div className="space-y-12">
        {rollCollections.map((collection, collectionIndex) => (
          <div key={collection.id}>
            <h3 className="mb-6 font-display text-2xl tracking-wide text-[#D4AF37] md:text-3xl">
              {collection.title}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {collection.rolls.map((roll, rollIndex) => (
                <motion.article
                  key={roll.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.35,
                    delay: (collectionIndex * 0.03 + rollIndex * 0.02) % 0.25,
                  }}
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#070707]"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={roll.image}
                      alt={roll.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-display text-xl text-white">{roll.name}</h4>
                    <div className="mt-2 flex items-center justify-between text-sm text-white/70">
                      <span>{roll.weight}</span>
                      <span className="font-semibold text-[#D4AF37]">{roll.price}€</span>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          addItem({
                            id: `roll-${roll.id}`,
                            name: roll.name,
                            price: roll.price,
                            details: `${roll.weight} · ${collection.title}`,
                          })
                        }
                        className="flex-1 rounded border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenAllergens(roll.name, roll.allergens)}
                        className="flex-1 rounded border border-white/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                      >
                        Allergens
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
