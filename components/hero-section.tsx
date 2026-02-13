"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3728_0%,transparent_45%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Kyoto Precision / Berlin Pulse</p>
        <h1 className="font-display text-4xl tracking-wide text-white md:text-6xl lg:text-7xl">
          Welcome, Connoisseurs of Taste
        </h1>
        <p className="mt-5 font-display text-2xl tracking-[0.15em] text-[#D4AF37] md:text-3xl">Black Samurai</p>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">This is not sushi. This is discipline.</p>

        <a
          href="#mystery-boxes"
          className="mt-10 inline-flex items-center justify-center rounded border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          Explore Menu
        </a>
      </motion.div>
    </section>
  );
}
