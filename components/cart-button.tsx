"use client";

import { useCart } from "@/context/cart-context";
import { motion } from "framer-motion";

interface CartButtonProps {
  onOpen: () => void;
}

export function CartButton({ onOpen }: CartButtonProps) {
  const { itemCount, totalPrice } = useCart();

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ y: 32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 }}
      className="fixed bottom-5 left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-full border border-[#D4AF37]/70 bg-black/95 px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur"
    >
      <span className="text-xs uppercase tracking-[0.2em] text-white/70">Cart ({itemCount})</span>
      <span className="font-semibold text-[#D4AF37]">{totalPrice.toFixed(2)}€</span>
    </motion.button>
  );
}
