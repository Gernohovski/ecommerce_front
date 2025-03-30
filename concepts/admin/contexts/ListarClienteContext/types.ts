import { ClienteResponse } from "@/concepts/cadastro/types";
import { Dispatch, SetStateAction } from "react";

export type ListarClientesContextType = {
  termo: string;
  setTermo: Dispatch<SetStateAction<string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
  clientes: ClienteResponse[] | undefined;
  setClientes: Dispatch<SetStateAction<ClienteResponse[] | undefined>>;
};
