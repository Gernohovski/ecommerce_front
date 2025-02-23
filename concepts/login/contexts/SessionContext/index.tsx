"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SessionContextType } from "./types";

const SessionContext = createContext({} as SessionContextType);

export const useSessionContext = () => useContext(SessionContext);

const SessionContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clienteId, setClienteId] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedClienteId = localStorage.getItem("cliente");
      if (storedClienteId) {
        setClienteId(Number(storedClienteId));
      }
    }
  }, []);

  const values = useMemo(
    () => ({
      clienteId,
      setClienteId,
    }),
    [clienteId]
  );
  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  );
};

export default SessionContextProvider;
