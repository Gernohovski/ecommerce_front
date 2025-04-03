"use client";

import LivrosPage from "@/concepts/livros/components/organisms/LivrosPage";
import FiltrosContextProvider from "@/concepts/livros/contexts/FiltrosContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Livros() {
  return (
    <FiltrosContextProvider>
      <Navbar />
      <LivrosPage />
    </FiltrosContextProvider>
  );
}
