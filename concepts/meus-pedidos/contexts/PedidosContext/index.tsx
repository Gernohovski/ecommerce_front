"use client";
import { PedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { PedidosContextType } from "./types";

const PedidosContext = createContext({} as PedidosContextType);

export const usePedidosContext = () => useContext(PedidosContext);

const PedidosContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pedidos, setPedidos] = useState<PedidoResponse[]>([]);

  const values = useMemo(
    () => ({
      pedidos,
      setPedidos,
    }),
    [pedidos]
  );
  return (
    <PedidosContext.Provider value={values}>{children}</PedidosContext.Provider>
  );
};

export default PedidosContextProvider;
