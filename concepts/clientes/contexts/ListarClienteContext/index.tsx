"use client";
import { ClienteResponse } from "@/concepts/cadastro/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { ListarClientesContextType } from "./types";

const ListarClienteContext = createContext({} as ListarClientesContextType);

export const useListarClienteContext = () => useContext(ListarClienteContext);

const ListarClienteContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [termo, setTermo] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [clientes, setClientes] = useState<ClienteResponse[] | undefined>([]);

  const values = useMemo(
    () => ({
      termo,
      setTermo,
      page,
      setPage,
      size,
      setSize,
      clientes,
      setClientes,
    }),
    [termo, page, size, clientes]
  );
  return (
    <ListarClienteContext.Provider value={values}>
      {children}
    </ListarClienteContext.Provider>
  );
};

export default ListarClienteContextProvider;
