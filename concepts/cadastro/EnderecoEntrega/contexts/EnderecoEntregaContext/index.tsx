"use client";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EnderecoEntregaContextType } from "./types";

const EnderecoEntregaContext = createContext({} as EnderecoEntregaContextType);

export const useEnderecoEntregaContext = () =>
  useContext(EnderecoEntregaContext);

const EnderecoEntregaContextProvider: React.FC<{ children: ReactNode }> = ({
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
  const [shortPhrase, setShortPhrase] = useState<string>("");
  const [enderecos, setEnderecos] = useState<EnderecoType[]>([]);
  const {
    useEnderecoEntrega,
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
    if (useEnderecoEntrega) {
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
    useEnderecoEntrega,
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
      shortPhrase,
      setShortPhrase,
      enderecos,
      setEnderecos,
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
      shortPhrase,
      enderecos,
    ]
  );
  return (
    <EnderecoEntregaContext.Provider value={values}>
      {children}
    </EnderecoEntregaContext.Provider>
  );
};

export default EnderecoEntregaContextProvider;
