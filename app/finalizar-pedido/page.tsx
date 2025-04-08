"use client";

import CartaoCreditoContextProvider from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import EnderecoEntregaContextProvider from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import FinalizarPedidosPage from "@/concepts/finalizar-pedido/components/organisms/FinalizarPedidosPage";
import FinalizarPedidoContextProvider from "@/concepts/finalizar-pedido/contexts/FinalizarPedidoContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function FinalizarPedido() {
  return (
    <SessionContextProvider>
      <FinalizarPedidoContextProvider>
        <EnderecoEntregaContextProvider>
          <CartaoCreditoContextProvider>
            <Navbar />
            <FinalizarPedidosPage />
          </CartaoCreditoContextProvider>
        </EnderecoEntregaContextProvider>
      </FinalizarPedidoContextProvider>
    </SessionContextProvider>
  );
}
