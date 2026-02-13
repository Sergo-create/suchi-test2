"use client";

import { useCart } from "@/context/cart-context";
import { AnimatePresence, motion } from "framer-motion";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/75"
          onClick={onClose}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="ml-auto flex h-full w-full max-w-md flex-col border-l border-[#D4AF37]/25 bg-[#050505]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h3 className="font-display text-2xl text-white">Cart</h3>
              <button
                type="button"
                className="rounded border border-[#D4AF37]/40 px-3 py-1 text-xs uppercase tracking-[0.15em] text-[#D4AF37]"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
              {items.length === 0 ? (
                <p className="rounded border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white/60">
                  Your cart is empty. Build your box and begin the ritual.
                </p>
              ) : (
                items.map((item) => (
                  <article key={item.id} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-medium text-white">{item.name}</h4>
                        {item.details ? <p className="mt-1 text-xs text-white/55">{item.details}</p> : null}
                        <p className="mt-2 text-sm font-semibold text-[#D4AF37]">{item.price.toFixed(2)}€ each</p>
                      </div>
                      <button
                        type="button"
                        className="text-xs uppercase tracking-[0.12em] text-white/55 transition hover:text-[#D4AF37]"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="h-8 w-8 rounded border border-white/20 text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="min-w-8 text-center text-sm text-white">{item.quantity}</span>
                        <button
                          type="button"
                          className="h-8 w-8 rounded border border-white/20 text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-[#D4AF37]">
                        {(item.quantity * item.price).toFixed(2)}€
                      </p>
                    </div>
                  </article>
                ))
              )}
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.16em] text-white/65">Total</span>
                <span className="text-xl font-semibold text-[#D4AF37]">{totalPrice.toFixed(2)}€</span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={clearCart}
                  className="flex-1 rounded border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.15em] text-white/70 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                >
                  Clear
                </button>
                <button
                  type="button"
                  disabled={items.length === 0}
                  className="flex-1 rounded border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-3 py-2 text-xs uppercase tracking-[0.15em] text-[#D4AF37] transition enabled:hover:bg-[#D4AF37] enabled:hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Checkout
                </button>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
