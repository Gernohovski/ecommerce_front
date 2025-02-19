"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CartaoCreditoContextType, CartaoCreditoType } from "./types";

const CartaoCreditoContext = createContext({} as CartaoCreditoContextType);

export const useCartaoCreditoContext = () => useContext(CartaoCreditoContext);

const CartaoCreditoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cardFlag, setCardFlag] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardSecurityCode, setCardSecurityCode] = useState<string>("");
  const [cardPrintedName, setCardPrintedName] = useState<string>("");
  const [cartoesCredito, setCartoesCredito] = useState<CartaoCreditoType[]>([]);

  const clearForm = useCallback(() => {
    setCardFlag("");
    setCardNumber("");
    setCardSecurityCode("");
    setCardPrintedName("");
  }, []);

  const values = useMemo(
    () => ({
      cardFlag,
      setCardFlag,
      cardNumber,
      setCardNumber,
      cardSecurityCode,
      setCardSecurityCode,
      cardPrintedName,
      setCardPrintedName,
      cartoesCredito,
      setCartoesCredito,
      clearForm,
    }),
    [
      cardFlag,
      cardNumber,
      cardSecurityCode,
      cardPrintedName,
      cartoesCredito,
      clearForm,
    ]
  );
  return (
    <CartaoCreditoContext.Provider value={values}>
      {children}
    </CartaoCreditoContext.Provider>
  );
};

export default CartaoCreditoContextProvider;
