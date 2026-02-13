"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { addOns } from "@/data/menu-data";
import { useCart } from "@/context/CartContext";

export default function AddOnsSection() {
  const { addItem } = useCart();

  return (
    <section id="add-ons" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Add-ons"
          title="Ritual Complements"
          description="Finish the order with essential additions selected for the full Black Samurai experience."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {addOns.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.06}
              className="rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <p className="text-xs tracking-[0.2em] text-[#D4AF37]/80 uppercase">Add-on</p>
              <h3 className="mt-3 font-display text-2xl text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-white/70">{item.quantity}</p>
              <p className="mt-4 text-xl text-[#D4AF37]">{item.price}€</p>

              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: item.id,
                    name: item.name,
                    unitPrice: item.price,
                    description: item.quantity,
                  })
                }
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37] px-4 py-2 text-xs font-medium tracking-[0.15em] text-black uppercase transition hover:bg-transparent hover:text-[#D4AF37]"
              >
                Add to Cart
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
