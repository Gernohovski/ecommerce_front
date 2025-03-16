"use client";
import { ValidationResult } from "@/utils/validate-schema";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { EnderecoResidencialContextType, EnderecoType } from "./types";

const EnderecoResidencialContext = createContext(
  {} as EnderecoResidencialContextType
);

export const useEnderecoResidencialContext = () =>
  useContext(EnderecoResidencialContext);

const EnderecoResidencialContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [id, setId] = useState<string>("");
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
  const [useEnderecoCobranca, setUseEnderecoCobranca] =
    useState<boolean>(false);
  const [useEnderecoEntrega, setUseEnderecoEntrega] = useState<boolean>(false);
  const [isCadastrando, setIsCadastrando] = useState<boolean>(false);
  const [isEditando, setIsEditando] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationResult[]>([]);

  const fillForm = useCallback(
    (data: EnderecoType) => {
      setId(data.id);
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
      setId,
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
    setId("");
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
      id,
      setId,
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
      useEnderecoCobranca,
      useEnderecoEntrega,
      shortPhrase,
      enderecos,
      isCadastrando,
      isEditando,
      fillForm,
      clearForm,
      id,
      errors,
    ]
  );
  return (
    <EnderecoResidencialContext.Provider value={values}>
      {children}
    </EnderecoResidencialContext.Provider>
  );
};

export default EnderecoResidencialContextProvider;
