import { Dispatch, SetStateAction } from "react";

export type CartaoCreditoContextType = {
  cardFlag: string;
  setCardFlag: Dispatch<SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: Dispatch<SetStateAction<string>>;
  cardSecurityCode: string;
  setCardSecurityCode: Dispatch<SetStateAction<string>>;
  cardPrintedName: string;
  setCardPrintedName: Dispatch<SetStateAction<string>>;
  cartoesCredito: CartaoCreditoType[];
  setCartoesCredito: Dispatch<SetStateAction<CartaoCreditoType[]>>;
  clearForm: () => void;
};

export type CartaoCreditoType = {
  id?: string;
  flag: string;
  printedName: string;
  cardNumber: string;
  securityCode: string;
};
