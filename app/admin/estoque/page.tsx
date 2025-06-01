"use client";

import ControleEstoqueSection from "@/concepts/estoque/components/organisms/ControleEstoqueSection";
import AdminNavbar from "@/concepts/navegacao/components/organisms/AdminNavbar";

export default function AdminEstoquePage() {
  return (
    <>
      <AdminNavbar />
      <ControleEstoqueSection />
    </>
  );
}
