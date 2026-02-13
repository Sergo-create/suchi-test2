"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 pt-20 pb-10 sm:px-8 sm:pt-24 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Reserve the Box"
          description="Place your order or request details directly through phone or Instagram."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <FadeIn className="rounded-2xl border border-white/12 bg-[#060606] p-6">
            <p className="text-xs tracking-[0.2em] text-[#D4AF37]/80 uppercase">Phone</p>
            <a
              href="tel:+491786390322"
              className="mt-3 inline-block font-display text-3xl text-white transition hover:text-[#D4AF37]"
            >
              +491786390322
            </a>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-2xl border border-white/12 bg-[#060606] p-6">
            <p className="text-xs tracking-[0.2em] text-[#D4AF37]/80 uppercase">Instagram</p>
            <a
              href="https://www.instagram.com/samurai.blackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-lg text-white transition hover:text-[#D4AF37]"
            >
              @samurai.blackbox
            </a>
          </FadeIn>
        </div>

        <footer className="mt-16 pb-4 text-center">
          <div className="mx-auto mb-5 h-px w-full max-w-xl bg-[#D4AF37]/60" />
          <p className="text-sm text-white/65">Black Samurai © 2026</p>
        </footer>
      </div>
    </section>
  );
}
