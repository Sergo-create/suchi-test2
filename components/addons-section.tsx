"use client";

import { useCart } from "@/context/cart-context";
import { addOns } from "@/lib/menu-data";
import { motion } from "framer-motion";
import { SectionTitle } from "./section-title";

export function AddOnsSection() {
  const { addItem } = useCart();

  return (
    <section id="add-ons" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-20 md:px-8">
      <SectionTitle eyebrow="Add-ons" title="Complete the ritual." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {addOns.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-xl border border-white/10 bg-[#090909] p-5"
          >
            <h3 className="font-display text-xl text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-white/65">{item.size}</p>
            <p className="mt-3 text-lg font-semibold text-[#D4AF37]">{item.price}€</p>
            <button
              type="button"
              onClick={() =>
                addItem({
                  id: `addon-${item.id}`,
                  name: item.name,
                  price: item.price,
                  details: item.size,
                })
              }
              className="mt-4 w-full rounded border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Add to Cart
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
