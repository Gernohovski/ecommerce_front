"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { PedidosFiltrosContextType } from "./types";

const PedidosFiltrosContext = createContext({} as PedidosFiltrosContextType);

export const usePedidosFiltrosContext = () => useContext(PedidosFiltrosContext);

const PedidosFiltrosContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(5);
  const [filtros, setFiltros] = useState<{
    situacoesId: string[];
    clienteId: string;
    sortBy: string;
    sortDirection: string;
  }>({
    situacoesId: [],
    clienteId: "",
    sortBy: "dataPedido",
    sortDirection: "DESC",
  });

  const values = useMemo(
    () => ({
      size,
      setSize,
      page,
      setPage,
      filtros,
      setFiltros,
    }),
    [size, page, filtros]
  );
  return (
    <PedidosFiltrosContext.Provider value={values}>
      {children}
    </PedidosFiltrosContext.Provider>
  );
};

export default PedidosFiltrosContextProvider;
