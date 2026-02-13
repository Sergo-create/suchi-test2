"use client";

import { useState } from "react";
import { AddOnsSection } from "./addons-section";
import { AllergenModal } from "./allergen-modal";
import { CartButton } from "./cart-button";
import { CartDrawer } from "./cart-drawer";
import { ContactSection } from "./contact-section";
import { HeroSection } from "./hero-section";
import { MysteryBoxesSection } from "./mystery-boxes-section";
import { Navbar } from "./navbar";
import { RollsSection } from "./rolls-section";

interface ModalState {
  itemName: string;
  relevantAllergens: number[];
}

export function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalState | null>(null);

  return (
    <>
      <Navbar />
      <main className="pb-28">
        <HeroSection />
        <MysteryBoxesSection onOpenAllergens={(itemName, relevantAllergens) => setModalState({ itemName, relevantAllergens })} />
        <RollsSection onOpenAllergens={(itemName, relevantAllergens) => setModalState({ itemName, relevantAllergens })} />
        <AddOnsSection />
        <ContactSection />
      </main>

      <CartButton onOpen={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AllergenModal
        isOpen={modalState !== null}
        onClose={() => setModalState(null)}
        itemName={modalState?.itemName ?? ""}
        relevantAllergens={modalState?.relevantAllergens ?? []}
      />
    </>
  );
}
