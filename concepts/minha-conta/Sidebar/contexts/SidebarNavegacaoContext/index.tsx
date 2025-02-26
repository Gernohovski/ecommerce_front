"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { SidebarNavegacaoContextType } from "./types";

const SidebarNavegacaoContext = createContext(
  {} as SidebarNavegacaoContextType
);

export const useSidebarNavegacaoContext = () =>
  useContext(SidebarNavegacaoContext);

const SidebarNavegacaoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dadosBasicos, setDadosBasicos] = useState<boolean>(true);
  const [seguranca, setSeguranca] = useState<boolean>(false);
  const [enderecosResidenciais, setEnderecosResidenciais] =
    useState<boolean>(false);
  const [enderecosCobranca, setEnderecosCobranca] = useState<boolean>(false);
  const [enderecosEntrega, setEnderecosEntrega] = useState<boolean>(false);
  const [cartoesCredito, setCartoesCredito] = useState<boolean>(false);

  const values = useMemo(
    () => ({
      dadosBasicos,
      setDadosBasicos,
      seguranca,
      setSeguranca,
      enderecosResidenciais,
      setEnderecosResidenciais,
      enderecosCobranca,
      setEnderecosCobranca,
      enderecosEntrega,
      setEnderecosEntrega,
      cartoesCredito,
      setCartoesCredito,
    }),
    [
      dadosBasicos,
      seguranca,
      enderecosResidenciais,
      enderecosCobranca,
      enderecosEntrega,
      cartoesCredito,
    ]
  );
  return (
    <SidebarNavegacaoContext.Provider value={values}>
      {children}
    </SidebarNavegacaoContext.Provider>
  );
};

export default SidebarNavegacaoContextProvider;
