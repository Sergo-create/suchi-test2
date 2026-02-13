"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { rollCategories } from "@/data/menu-data";
import { useCart } from "@/context/CartContext";
import { AllergenCode } from "@/types/menu";

interface RollsSectionProps {
  onOpenAllergens: (title: string, allergens: AllergenCode[]) => void;
}

export default function RollsSection({ onOpenAllergens }: RollsSectionProps) {
  const { addItem } = useCart();

  return (
    <section id="rolls" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Signature Rolls"
          title="30 Curated Rolls"
          description="The Black Samurai collection blends sea classics, vegan precision, and mix creations. Pick your discipline."
        />

        <div className="space-y-14">
          {rollCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id}>
              <FadeIn delay={categoryIndex * 0.08}>
                <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-4">
                  <h3 className="font-display text-2xl text-white sm:text-3xl">{category.title}</h3>
                  <span className="rounded-full border border-[#D4AF37]/40 px-3 py-1 text-xs tracking-[0.15em] text-[#D4AF37] uppercase">
                    {category.rolls.length} Rolls
                  </span>
                </div>
              </FadeIn>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {category.rolls.map((roll, rollIndex) => (
                  <motion.article
                    key={roll.id}
                    className="overflow-hidden rounded-2xl border border-white/12 bg-[#050505]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: rollIndex * 0.03 }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={roll.image}
                        alt={roll.name}
                        fill
                        className="object-cover transition duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-5">
                      <h4 className="font-display text-2xl text-white">{roll.name}</h4>
                      <div className="mt-3 flex items-center justify-between text-sm text-white/75">
                        <span>{roll.weight}</span>
                        <span className="text-lg text-[#D4AF37]">{roll.price}€</span>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            addItem({
                              id: roll.id,
                              name: roll.name,
                              unitPrice: roll.price,
                              description: roll.weight,
                            })
                          }
                          className="rounded-full border border-[#D4AF37] bg-[#D4AF37] px-4 py-2 text-xs font-medium tracking-[0.15em] text-black uppercase transition hover:bg-transparent hover:text-[#D4AF37]"
                        >
                          Add to Cart
                        </button>
                        <button
                          type="button"
                          onClick={() => onOpenAllergens(roll.name, roll.allergens)}
                          className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium tracking-[0.15em] text-white/85 uppercase transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
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
      </div>
    </section>
  );
}
