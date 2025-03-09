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
  const [id, setId] = useState<string>("");
  const [cardFlag, setCardFlag] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardSecurityCode, setCardSecurityCode] = useState<string>("");
  const [cardPrintedName, setCardPrintedName] = useState<string>("");
  const [cartoesCredito, setCartoesCredito] = useState<CartaoCreditoType[]>([]);
  const [isCadastrando, setIsCadastrando] = useState<boolean>(false);
  const [isEditando, setIsEditando] = useState<boolean>(false);

  const clearForm = useCallback(() => {
    setId("");
    setCardFlag("");
    setCardNumber("");
    setCardSecurityCode("");
    setCardPrintedName("");
  }, []);

  const fillForm = useCallback(
    (data: CartaoCreditoType) => {
      setId(data?.id ?? "");
      setCardFlag(data.flagId ?? "");
      setCardNumber(data.cardNumber);
      setCardSecurityCode(data.securityCode);
      setCardPrintedName(data.securityCode);
      setIsEditando(true);
    },
    [
      setId,
      setCardFlag,
      setCardNumber,
      setCardSecurityCode,
      setCardPrintedName,
      setIsEditando,
    ]
  );

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
      isCadastrando,
      setIsCadastrando,
      isEditando,
      setIsEditando,
      fillForm,
      id,
      setId,
    }),
    [
      cardFlag,
      cardNumber,
      cardSecurityCode,
      cardPrintedName,
      cartoesCredito,
      clearForm,
      fillForm,
      isCadastrando,
      isEditando,
      id,
    ]
  );
  return (
    <CartaoCreditoContext.Provider value={values}>
      {children}
    </CartaoCreditoContext.Provider>
  );
};

export default CartaoCreditoContextProvider;
