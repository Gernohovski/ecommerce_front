"use client";
import FiltrarClientesSection from "@/concepts/clientes/components/organisms/FiltrarClientesSection";
import ListarClienteContextProvider from "@/concepts/clientes/contexts/ListarClienteContext";
import AdminNavbar from "@/concepts/navegacao/components/organisms/AdminNavbar";

export default function AdminClientesPage() {
  return (
    <ListarClienteContextProvider>
      <AdminNavbar />
      <FiltrarClientesSection />
    </ListarClienteContextProvider>
  );
}
