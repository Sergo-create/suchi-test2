"use client";

import { allergenList } from "@/lib/menu-data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo } from "react";

interface AllergenModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  relevantAllergens: number[];
}

export function AllergenModal({ isOpen, onClose, itemName, relevantAllergens }: AllergenModalProps) {
  const highlighted = useMemo(() => new Set(relevantAllergens), [relevantAllergens]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl rounded-xl border border-[#D4AF37]/30 bg-[#0b0b0b] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Allergen Table</p>
                <h3 className="mt-2 font-display text-2xl text-white">{itemName}</h3>
              </div>
              <button
                type="button"
                aria-label="Close allergens modal"
                className="rounded border border-[#D4AF37]/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#D4AF37]"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            {highlighted.size === 0 ? (
              <p className="mb-4 rounded border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                No listed EU allergens for this item.
              </p>
            ) : null}

            <div className="max-h-[60vh] overflow-y-auto">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {allergenList.map((allergen) => {
                    const isRelevant = highlighted.has(allergen.id);
                    return (
                      <tr key={allergen.id} className="border-b border-white/10 last:border-0">
                        <td className={`px-3 py-2 ${isRelevant ? "text-[#D4AF37]" : "text-white/70"}`}>
                          {allergen.id}
                        </td>
                        <td
                          className={`px-3 py-2 ${
                            isRelevant
                              ? "rounded bg-[#D4AF37]/15 font-semibold text-[#F3DE98]"
                              : "text-white/75"
                          }`}
                        >
                          {allergen.name}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
