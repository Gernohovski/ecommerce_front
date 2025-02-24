import { Dispatch, SetStateAction } from "react";

export type EnderecoResidencialContextType = {
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  country: string;
  setCounty: Dispatch<SetStateAction<string>>;
  logradouro: string;
  setLogradouro: Dispatch<SetStateAction<string>>;
  tipoLogradouro: string;
  setTipoLogradouro: Dispatch<SetStateAction<string>>;
  neighborhood: string;
  setNeighborhood: Dispatch<SetStateAction<string>>;
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
  observations: string;
  setObservations: Dispatch<SetStateAction<string>>;
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  useEnderecoCobranca: boolean;
  setUseEnderecoCobranca: Dispatch<SetStateAction<boolean>>;
  useEnderecoEntrega: boolean;
  setUseEnderecoEntrega: Dispatch<SetStateAction<boolean>>;
  shortPhrase: string;
  setShortPhrase: Dispatch<SetStateAction<string>>;
  enderecos: EnderecoType[];
  setEnderecos: Dispatch<SetStateAction<EnderecoType[]>>;
};

export type EnderecoType = {
  id: string;
  cep: string;
  city: string;
  country: string;
  logradouro: string;
  tipoLogradouro: string;
  neighborhood: string;
  number: string;
  observations: string;
  residenceType: string;
  state: string;
  shortPhrase: string;
};
