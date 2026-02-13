"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/12 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="mb-4 text-xs tracking-[0.35em] text-[#D4AF37]/85 uppercase">Black Samurai</p>
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome, Connoisseurs of Taste
        </h1>
        <p className="mt-6 text-lg text-[#D4AF37] sm:text-xl">Black Samurai</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          This is not sushi. This is discipline.
        </p>

        <a
          href="#large-boxes"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37] px-8 py-3 text-xs font-medium tracking-[0.2em] text-black uppercase transition hover:bg-transparent hover:text-[#D4AF37]"
        >
          Explore Menu
        </a>
      </motion.div>
    </section>
  );
}
