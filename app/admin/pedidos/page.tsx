"use client";

import PedidosFiltrosContextProvider from "@/concepts/meus-pedidos/contexts/PedidosFiltrosContext";
import AdminNavbar from "@/concepts/navegacao/components/organisms/AdminNavbar";
import ViewPedidosAdminSection from "@/concepts/pedidos/components/organisms/ViewPedidosSection";

export default function AdminPedidosPage() {
  return (
    <PedidosFiltrosContextProvider>
      <AdminNavbar />
      <ViewPedidosAdminSection />
    </PedidosFiltrosContextProvider>
  );
}
