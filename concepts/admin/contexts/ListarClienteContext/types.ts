import { ClienteResponse } from "@/concepts/cadastro/types";
import { Dispatch, SetStateAction } from "react";

export type ListarClientesContextType = {
  cpf: string;
  setCpf: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  clientes: ClienteResponse[] | undefined;
  setClientes: Dispatch<SetStateAction<ClienteResponse[] | undefined>>;
};
