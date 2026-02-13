"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface FadeInProps {
  delay?: number;
  className?: string;
}

export default function FadeIn({ delay = 0, className, children }: PropsWithChildren<FadeInProps>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
