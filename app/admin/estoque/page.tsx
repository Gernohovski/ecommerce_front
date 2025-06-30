"use client";

import ControleEstoqueSection from "@/concepts/estoque/components/organisms/ControleEstoqueSection";
import FiltrosContextProvider from "@/concepts/livros/contexts/FiltrosContext";
import AdminNavbar from "@/concepts/navegacao/components/organisms/AdminNavbar";

export default function AdminEstoquePage() {
  return (
    <FiltrosContextProvider>
      <div>
        <AdminNavbar />
        <ControleEstoqueSection />
      </div>
    </FiltrosContextProvider>
  );
}
