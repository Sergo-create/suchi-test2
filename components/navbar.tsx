"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Large Boxes", href: "#large-boxes" },
  { label: "Medium Boxes", href: "#medium-boxes" },
  { label: "Small Boxes", href: "#small-boxes" },
  { label: "Rolls", href: "#rolls" },
  { label: "Add-ons", href: "#add-ons" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-[#D4AF37]/15 bg-black/85 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="font-display text-xl tracking-[0.2em] text-[#D4AF37] md:text-2xl">
          Black Samurai
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded border border-[#D4AF37]/35 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#D4AF37] md:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-white/80 transition hover:text-[#D4AF37]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#D4AF37]/15 px-5 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-white/80 transition hover:text-[#D4AF37]"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
