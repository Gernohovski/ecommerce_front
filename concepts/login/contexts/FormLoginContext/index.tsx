"use client";
import { ValidationResult } from "@/utils/validate-schema";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { FormLoginContextType } from "./types";

const FormLoginContext = createContext({} as FormLoginContextType);

export const useFormLoginContext = () => useContext(FormLoginContext);

const FormLoginContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<ValidationResult[]>([]);

  const values = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      errors,
      setErrors,
    }),
    [email, password, errors, setErrors]
  );
  return (
    <FormLoginContext.Provider value={values}>
      {children}
    </FormLoginContext.Provider>
  );
};

export default FormLoginContextProvider;
