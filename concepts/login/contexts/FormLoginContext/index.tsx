"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { FormLoginContextType } from "./types";

const FormLoginContext = createContext({} as FormLoginContextType);

export const useFormLoginContext = () => useContext(FormLoginContext);

const FormLoginContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const values = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
    }),
    [email, password]
  );
  return (
    <FormLoginContext.Provider value={values}>
      {children}
    </FormLoginContext.Provider>
  );
};

export default FormLoginContextProvider;
