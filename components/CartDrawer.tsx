"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { useCart } from "@/context/CartContext";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 z-[100] flex items-center gap-3 rounded-full border border-[#D4AF37] bg-black/90 px-5 py-3 text-xs tracking-[0.15em] text-[#D4AF37] uppercase shadow-[0_0_25px_rgba(212,175,55,0.2)] backdrop-blur-sm transition hover:bg-[#D4AF37] hover:text-black sm:right-6 sm:bottom-6"
      >
        <span>Cart ({totalItems})</span>
        <span className="h-4 w-px bg-[#D4AF37]/40" />
        <span>{currency.format(totalPrice)}</span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col border-l border-white/15 bg-[#030303] p-5 sm:p-6"
              initial={{ x: 460 }}
              animate={{ x: 0 }}
              exit={{ x: 460 }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-3xl text-white">Your Cart</h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-[#D4AF37]/50 px-3 py-1 text-xs tracking-[0.15em] text-[#D4AF37] uppercase transition hover:bg-[#D4AF37] hover:text-black"
                >
                  Close
                </button>
              </div>

              <div className="min-h-0 flex-1 space-y-4 overflow-auto pr-1">
                {items.length === 0 ? (
                  <div className="rounded-xl border border-white/15 bg-white/[0.02] p-5 text-sm text-white/70">
                    Your cart is empty. Add a box, rolls, or add-ons to begin your order.
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-white/12 bg-white/[0.02] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm text-white">{item.name}</h3>
                          {item.description ? (
                            <p className="mt-1 text-xs text-white/60">{item.description}</p>
                          ) : null}
                        </div>
                        <p className="text-sm text-[#D4AF37]">{currency.format(item.unitPrice)}</p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-white/20">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-sm text-white/85 transition hover:text-[#D4AF37]"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-xs text-white">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-sm text-white/85 transition hover:text-[#D4AF37]"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs tracking-[0.12em] text-white/65 uppercase transition hover:text-[#D4AF37]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm tracking-[0.12em] text-white/70 uppercase">Total</p>
                  <p className="font-display text-2xl text-[#D4AF37]">{currency.format(totalPrice)}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={clearCart}
                    disabled={items.length === 0}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.15em] text-white uppercase transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    disabled={items.length === 0}
                    className="rounded-full border border-[#D4AF37] bg-[#D4AF37] px-4 py-2 text-xs tracking-[0.15em] text-black uppercase transition hover:bg-transparent hover:text-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
