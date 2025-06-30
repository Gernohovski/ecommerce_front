"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { FiltrosContextType } from "./types";

const FiltrosContext = createContext({} as FiltrosContextType);

export const useFiltrosContext = () => useContext(FiltrosContext);

const FiltrosContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);
  const [filtros, setFiltros] = useState<{
    precoMin: string;
    precoMax: string;
    categoriaId: string;
    autoresId: string[];
    titulo: string;
    condicao: string;
    idioma: string[];
    sortBy: string;
    sortDirection: string;
  }>({
    precoMin: "",
    precoMax: "",
    categoriaId: "",
    autoresId: [],
    titulo: "",
    condicao: "",
    idioma: [],
    sortBy: "valorVenda",
    sortDirection: "ASC",
  });

  const values = useMemo(
    () => ({
      filtros,
      setFiltros,
      page,
      setPage,
      size,
      setSize,
    }),
    [filtros, page, size]
  );
  return (
    <FiltrosContext.Provider value={values}>{children}</FiltrosContext.Provider>
  );
};

export default FiltrosContextProvider;
