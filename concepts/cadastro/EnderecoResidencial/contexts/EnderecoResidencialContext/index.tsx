"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { EnderecoResidencialContextType } from "./types";

const EnderecoResidencialContext = createContext(
  {} as EnderecoResidencialContextType
);

export const useEnderecoResidencialContext = () =>
  useContext(EnderecoResidencialContext);

const EnderecoResidencialContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cep, setCep] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCounty] = useState<string>("");
  const [logradouro, setLogradouro] = useState<string>("");
  const [tipoLogradouro, setTipoLogradouro] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [observations, setObservations] = useState<string>("");
  const [residenceType, setResidenceType] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [useEnderecoCobranca, setUseEnderecoCobranca] =
    useState<boolean>(false);
  const [useEnderecoEntrega, setUseEnderecoEntrega] = useState<boolean>(false);

  const values = useMemo(
    () => ({
      cep,
      setCep,
      city,
      setCity,
      country,
      setCounty,
      logradouro,
      setLogradouro,
      tipoLogradouro,
      setTipoLogradouro,
      neighborhood,
      setNeighborhood,
      number,
      setNumber,
      observations,
      setObservations,
      residenceType,
      setResidenceType,
      state,
      setState,
      useEnderecoCobranca,
      setUseEnderecoCobranca,
      useEnderecoEntrega,
      setUseEnderecoEntrega,
    }),
    [
      cep,
      city,
      country,
      logradouro,
      tipoLogradouro,
      neighborhood,
      number,
      observations,
      residenceType,
      state,
      useEnderecoCobranca,
      useEnderecoEntrega,
    ]
  );
  return (
    <EnderecoResidencialContext.Provider value={values}>
      {children}
    </EnderecoResidencialContext.Provider>
  );
};

export default EnderecoResidencialContextProvider;
