"use client";
import { ValidationResult } from "@/utils/validate-schema";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { CadastrarClienteContextType } from "./types";

const CadastrarClienteContext = createContext(
  {} as CadastrarClienteContextType
);

export const useCadastrarClienteContext = () =>
  useContext(CadastrarClienteContext);

const CadastrarClienteContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [errors, setErrors] = useState<ValidationResult[]>([]);
  console.log(errors);

  const values = useMemo(
    () => ({
      errors,
      setErrors,
    }),
    [errors]
  );
  return (
    <CadastrarClienteContext.Provider value={values}>
      {children}
    </CadastrarClienteContext.Provider>
  );
};

export default CadastrarClienteContextProvider;
