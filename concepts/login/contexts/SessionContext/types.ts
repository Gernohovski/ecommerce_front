import { Dispatch, SetStateAction } from "react";

export type SessionContextType = {
  clienteId: number;
  setClienteId: Dispatch<SetStateAction<number>>;
};
