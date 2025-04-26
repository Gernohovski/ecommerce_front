import { Dispatch, SetStateAction } from "react";

export type PedidosFiltrosContextType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
  filtros: {
    situacoesId: string[];
    clienteId: string;
    sortBy: string;
    sortDirection: string;
  };
  setFiltros: Dispatch<
    SetStateAction<{
      situacoesId: string[];
      clienteId: string;
      sortBy: string;
      sortDirection: string;
    }>
  >;
};
