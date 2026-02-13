"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 pb-16 pt-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-[#D4AF37]/30 bg-[#0a0a0a] p-8 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Contact</p>
        <h2 className="mt-3 font-display text-4xl text-white">Black Samurai</h2>
        <div className="mt-8 flex flex-col items-center gap-5 text-sm md:text-base">
          <a href="tel:+491786390322" className="text-white/85 transition hover:text-[#D4AF37]">
            +491786390322
          </a>
          <a
            href="https://www.instagram.com/samurai.blackbox"
            target="_blank"
            rel="noreferrer"
            className="text-white/85 transition hover:text-[#D4AF37]"
          >
            instagram.com/samurai.blackbox
          </a>
        </div>
      </motion.div>

      <footer className="mt-14 text-center">
        <div className="mx-auto h-px w-36 bg-[#D4AF37]" />
        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/55">Black Samurai © 2026</p>
      </footer>
    </section>
  );
}
