"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { DadosBasicosContextType } from "./types";

const DadosBasicosContext = createContext({} as DadosBasicosContextType);

export const useDadosBasicosContext = () => useContext(DadosBasicosContext);

const DadosBasicosContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [birthDate, setBirthDate] = useState<Date>();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ddd, setDdd] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [telephoneType, setTelephoneType] = useState<string>("");

  const values = useMemo(
    () => ({
      birthDate,
      setBirthDate,
      confirmPassword,
      setConfirmPassword,
      cpf,
      setCpf,
      email,
      setEmail,
      gender,
      setGender,
      name,
      setName,
      password,
      setPassword,
      telephone,
      setTelephone,
      telephoneType,
      setTelephoneType,
      ddd,
      setDdd,
    }),
    [
      birthDate,
      confirmPassword,
      cpf,
      email,
      gender,
      name,
      password,
      telephone,
      telephoneType,
      ddd,
    ]
  );
  return (
    <DadosBasicosContext.Provider value={values}>
      {children}
    </DadosBasicosContext.Provider>
  );
};

export default DadosBasicosContextProvider;
