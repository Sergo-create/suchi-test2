"use client";

import { useState } from "react";

import AddOnsSection from "@/components/AddOnsSection";
import AllergensModal from "@/components/AllergensModal";
import BoxesSection from "@/components/BoxesSection";
import CartDrawer from "@/components/CartDrawer";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RollsSection from "@/components/RollsSection";
import { AllergenCode } from "@/types/menu";

interface ActiveAllergenItem {
  title: string;
  allergens: AllergenCode[];
}

export default function BlackSamuraiSite() {
  const [activeAllergenItem, setActiveAllergenItem] = useState<ActiveAllergenItem | null>(null);

  const openAllergens = (title: string, allergens: AllergenCode[]) => {
    setActiveAllergenItem({ title, allergens });
  };

  const closeAllergens = () => setActiveAllergenItem(null);

  return (
    <div className="relative bg-black text-white">
      <Navbar />
      <HeroSection />
      <main>
        <BoxesSection onOpenAllergens={openAllergens} />
        <RollsSection onOpenAllergens={openAllergens} />
        <AddOnsSection />
        <ContactSection />
      </main>

      <CartDrawer />

      <AllergensModal
        isOpen={Boolean(activeAllergenItem)}
        title={activeAllergenItem?.title ?? ""}
        allergens={activeAllergenItem?.allergens ?? []}
        onClose={closeAllergens}
      />
    </div>
  );
}
