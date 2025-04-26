"use client";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import ViewPedidoSection from "@/concepts/meus-pedidos/components/organisms/ViewPedidoSection";
import PedidosFiltrosContextProvider from "@/concepts/meus-pedidos/contexts/PedidosFiltrosContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function MeusPedidos() {
  return (
    <SessionContextProvider>
      <PedidosFiltrosContextProvider>
        <Navbar />
        <ViewPedidoSection />
      </PedidosFiltrosContextProvider>
    </SessionContextProvider>
  );
}
