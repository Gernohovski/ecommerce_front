"use client";

import LivrosPage from "@/concepts/livros/components/organisms/LivrosPage";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Livros() {
  return (
    <SessionContextProvider>
      <Navbar />
      <LivrosPage />
    </SessionContextProvider>
  );
}
