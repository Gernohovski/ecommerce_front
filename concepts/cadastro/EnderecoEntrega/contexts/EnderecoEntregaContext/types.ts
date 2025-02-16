import { Dispatch, SetStateAction } from "react";

export type EnderecoEntregaContextType = {
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
};
