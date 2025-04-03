import { Dispatch, SetStateAction } from "react";

export type FiltrosContextType = {
  filtros: {
    precoMin: string;
    precoMax: string;
    categoriaId: string;
    autoresId: string[];
    titulo: string;
    condicao: string;
    idioma: string[];
    sortBy: string;
    sortDirection: string;
  };
  setFiltros: Dispatch<
    SetStateAction<{
      precoMin: string;
      precoMax: string;
      categoriaId: string;
      autoresId: string[];
      titulo: string;
      condicao: string;
      idioma: string[];
      sortBy: string;
      sortDirection: string;
    }>
  >;
};
