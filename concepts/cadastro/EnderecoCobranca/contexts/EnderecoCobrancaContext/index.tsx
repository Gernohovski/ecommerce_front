"use client";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EnderecoCobrancaContextType } from "./types";

const EnderecoCobrancaContext = createContext(
  {} as EnderecoCobrancaContextType
);

export const useEnderecoCobrancaContext = () =>
  useContext(EnderecoCobrancaContext);

const EnderecoCobrancaContextProvider: React.FC<{ children: ReactNode }> = ({
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
  const {
    useEnderecoCobranca,
    cep: cepResidencial,
    city: cityResidencial,
    country: countryResidencial,
    logradouro: logradouroResidencial,
    tipoLogradouro: tipoLogradouroResidencial,
    neighborhood: neighborhoodResidencial,
    number: numberResidencial,
    observations: observationsResidencial,
    residenceType: residenceTypeResidencial,
    state: stateResidencial,
  } = useEnderecoResidencialContext();

  useEffect(() => {
    if (useEnderecoCobranca) {
      setCep(cepResidencial);
      setCity(cityResidencial);
      setCounty(countryResidencial);
      setLogradouro(logradouroResidencial);
      setTipoLogradouro(tipoLogradouroResidencial);
      setNeighborhood(neighborhoodResidencial);
      setNumber(numberResidencial);
      setObservations(observationsResidencial);
      setResidenceType(residenceTypeResidencial);
      setState(stateResidencial);
    }
  }, [
    useEnderecoCobranca,
    cepResidencial,
    cityResidencial,
    countryResidencial,
    logradouroResidencial,
    tipoLogradouroResidencial,
    neighborhoodResidencial,
    numberResidencial,
    observationsResidencial,
    residenceTypeResidencial,
    stateResidencial,
  ]);

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
    ]
  );
  return (
    <EnderecoCobrancaContext.Provider value={values}>
      {children}
    </EnderecoCobrancaContext.Provider>
  );
};

export default EnderecoCobrancaContextProvider;
