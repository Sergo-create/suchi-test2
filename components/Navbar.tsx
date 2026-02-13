"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const links = [
  { href: "#large-boxes", label: "Large Boxes" },
  { href: "#medium-boxes", label: "Medium Boxes" },
  { href: "#small-boxes", label: "Small Boxes" },
  { href: "#rolls", label: "Rolls" },
  { href: "#add-ons", label: "Add-ons" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const desktopLinks = useMemo(
    () =>
      links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-xs tracking-[0.2em] text-white/75 uppercase transition hover:text-[#D4AF37]"
        >
          {link.label}
        </a>
      )),
    [],
  );

  return (
    <header className="sticky top-0 z-[90] border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-display text-xl tracking-wide text-[#D4AF37] sm:text-2xl">
          Black Samurai
        </a>

        <div className="hidden items-center gap-6 lg:flex">{desktopLinks}</div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md border border-[#D4AF37]/40 px-3 py-2 text-xs tracking-[0.15em] text-[#D4AF37] uppercase lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="border-t border-white/10 bg-black/95 px-5 py-4 lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-md border border-white/10 px-3 py-2 text-xs tracking-[0.2em] text-white/80 uppercase transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
