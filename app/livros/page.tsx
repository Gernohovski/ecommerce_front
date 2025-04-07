"use client";

import LivrosPage from "@/concepts/livros/components/organisms/LivrosPage";
import FiltrosContextProvider from "@/concepts/livros/contexts/FiltrosContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Livros() {
  return (
    <SessionContextProvider>
      <FiltrosContextProvider>
        <Navbar />
        <LivrosPage />
      </FiltrosContextProvider>
    </SessionContextProvider>
  );
}
