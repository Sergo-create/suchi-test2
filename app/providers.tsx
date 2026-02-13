"use client";

import { PropsWithChildren } from "react";

import { CartProvider } from "@/context/CartContext";

export default function Providers({ children }: PropsWithChildren) {
  return <CartProvider>{children}</CartProvider>;
}
