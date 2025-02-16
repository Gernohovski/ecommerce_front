"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { CartaoCreditoContextType } from "./types";

const CartaoCreditoContext = createContext({} as CartaoCreditoContextType);

export const useCartaoCreditoContext = () => useContext(CartaoCreditoContext);

const CartaoCreditoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cardFlag, setCardFlag] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardSecurityCode, setCardSecurityCode] = useState<string>("");
  const [cardPrintedName, setCardPrintedName] = useState<string>("");

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
    }),
    [cardFlag, cardNumber, cardSecurityCode, cardPrintedName]
  );
  return (
    <CartaoCreditoContext.Provider value={values}>
      {children}
    </CartaoCreditoContext.Provider>
  );
};

export default CartaoCreditoContextProvider;
