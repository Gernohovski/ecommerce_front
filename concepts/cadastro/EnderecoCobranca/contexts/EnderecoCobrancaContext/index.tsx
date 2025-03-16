"use client";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import { ValidationResult } from "@/utils/validate-schema";
import {
  createContext,
  ReactNode,
  useCallback,
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
  const [shortPhrase, setShortPhrase] = useState<string>("");
  const [enderecos, setEnderecos] = useState<EnderecoType[]>([]);
  const [isCadastrando, setIsCadastrando] = useState<boolean>(false);
  const [isEditando, setIsEditando] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationResult[]>([]);
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
    shortPhrase: shortPhraseResidencial,
  } = useEnderecoResidencialContext();

  const fillForm = useCallback(
    (data: EnderecoType) => {
      setCep(data.cep);
      setCity(data.city);
      setCounty(data.country);
      setLogradouro(data.logradouro);
      setTipoLogradouro(data.tipoLogradouroId);
      setNeighborhood(data.neighborhood);
      setNumber(data.number);
      setObservations(data.observations);
      setResidenceType(data.residenceTypeId);
      setState(data.state);
      setShortPhrase(data.shortPhrase);
      setIsEditando(true);
    },
    [
      setCep,
      setCity,
      setCounty,
      setLogradouro,
      setTipoLogradouro,
      setNeighborhood,
      setNumber,
      setObservations,
      setResidenceType,
      setState,
      setShortPhrase,
      setIsEditando,
    ]
  );

  const clearForm = useCallback(() => {
    setErrors([]);
    setCep("");
    setCity("");
    setCounty("");
    setLogradouro("");
    setTipoLogradouro("");
    setNeighborhood("");
    setNumber("");
    setObservations("");
    setResidenceType("");
    setState("");
    setShortPhrase("");
  }, [
    setCep,
    setCity,
    setCounty,
    setLogradouro,
    setTipoLogradouro,
    setNeighborhood,
    setNumber,
    setObservations,
    setResidenceType,
    setState,
    setShortPhrase,
  ]);

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
      setShortPhrase(shortPhraseResidencial);
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
    shortPhraseResidencial,
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
      isCadastrando,
      setIsCadastrando,
      isEditando,
      setIsEditando,
      fillForm,
      clearForm,
      errors,
      setErrors,
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
      isCadastrando,
      isEditando,
      fillForm,
      clearForm,
      errors,
    ]
  );
  return (
    <EnderecoCobrancaContext.Provider value={values}>
      {children}
    </EnderecoCobrancaContext.Provider>
  );
};

export default EnderecoCobrancaContextProvider;
