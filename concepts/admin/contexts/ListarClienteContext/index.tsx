"use client";
import { ClienteResponse } from "@/concepts/cadastro/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { ListarClientesContextType } from "./types";

const ListarClienteContext = createContext({} as ListarClientesContextType);

export const useListarClienteContext = () => useContext(ListarClienteContext);

const ListarClienteContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [clientes, setClientes] = useState<ClienteResponse[]>();

  const values = useMemo(
    () => ({
      cpf,
      setCpf,
      email,
      setEmail,
      gender,
      setGender,
      name,
      setName,
      clientes,
      setClientes,
    }),
    [cpf, email, gender, name, clientes]
  );
  return (
    <ListarClienteContext.Provider value={values}>
      {children}
    </ListarClienteContext.Provider>
  );
};

export default ListarClienteContextProvider;
