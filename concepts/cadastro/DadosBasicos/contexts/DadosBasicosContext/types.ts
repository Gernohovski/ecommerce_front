import { Dispatch, SetStateAction } from "react";

export type DadosBasicosContextType = {
  birthDate: Date | undefined;
  setBirthDate: Dispatch<SetStateAction<Date | undefined>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  cpf: string;
  setCpf: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  ddd: string;
  setDdd: Dispatch<SetStateAction<string>>;
  telephone: string;
  setTelephone: Dispatch<SetStateAction<string>>;
  telephoneType: string;
  setTelephoneType: Dispatch<SetStateAction<string>>;
};
