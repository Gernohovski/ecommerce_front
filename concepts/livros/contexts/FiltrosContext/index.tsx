"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { FiltrosContextType } from "./types";

const FiltrosContext = createContext({} as FiltrosContextType);

export const useFiltrosContext = () => useContext(FiltrosContext);

const FiltrosContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
    }),
    [filtros]
  );
  return (
    <FiltrosContext.Provider value={values}>{children}</FiltrosContext.Provider>
  );
};

export default FiltrosContextProvider;
