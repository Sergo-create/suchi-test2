"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { allergenMap } from "@/data/menu-data";
import { AllergenCode } from "@/types/menu";

interface AllergensModalProps {
  isOpen: boolean;
  title: string;
  allergens: AllergenCode[];
  onClose: () => void;
}

export default function AllergensModal({
  isOpen,
  title,
  allergens,
  onClose,
}: AllergensModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[80vh] w-full max-w-2xl overflow-auto rounded-2xl border border-[#D4AF37]/40 bg-[#050505] p-6 shadow-[0_0_45px_rgba(212,175,55,0.15)]"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.25em] text-[#D4AF37]/70 uppercase">
                  Allergen Information
                </p>
                <h3 className="mt-2 font-display text-2xl text-white">{title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#D4AF37]/40 px-3 py-1 text-sm text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Close
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/5 text-white/80">
                  <tr>
                    <th className="px-4 py-3 font-medium">Code</th>
                    <th className="px-4 py-3 font-medium">Allergen</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {(Object.entries(allergenMap) as Array<[string, string]>).map(
                    ([code, label]) => {
                      const allergenCode = Number(code) as AllergenCode;
                      const active = allergens.includes(allergenCode);

                      return (
                        <tr
                          key={code}
                          className={active ? "bg-[#D4AF37]/15 text-white" : "text-white/70"}
                        >
                          <td className="border-t border-white/10 px-4 py-3">{code}</td>
                          <td className="border-t border-white/10 px-4 py-3">{label}</td>
                          <td className="border-t border-white/10 px-4 py-3">
                            {active ? (
                              <span className="rounded-full bg-[#D4AF37]/25 px-2 py-1 text-xs text-[#F5DE8E]">
                                Present
                              </span>
                            ) : (
                              <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                                Not listed
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </div>

            {allergens.length === 0 ? (
              <p className="mt-4 text-sm text-white/70">
                No standard EU allergens are listed for this item.
              </p>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
