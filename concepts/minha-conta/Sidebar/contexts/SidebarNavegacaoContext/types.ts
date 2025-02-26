import { Dispatch, SetStateAction } from "react";

export type SidebarNavegacaoContextType = {
  dadosBasicos: boolean;
  setDadosBasicos: Dispatch<SetStateAction<boolean>>;
  seguranca: boolean;
  setSeguranca: Dispatch<SetStateAction<boolean>>;
  enderecosResidenciais: boolean;
  setEnderecosResidenciais: Dispatch<SetStateAction<boolean>>;
  enderecosCobranca: boolean;
  setEnderecosCobranca: Dispatch<SetStateAction<boolean>>;
  enderecosEntrega: boolean;
  setEnderecosEntrega: Dispatch<SetStateAction<boolean>>;
  cartoesCredito: boolean;
  setCartoesCredito: Dispatch<SetStateAction<boolean>>;
};
