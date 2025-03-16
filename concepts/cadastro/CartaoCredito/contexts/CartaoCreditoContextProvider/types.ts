import { ValidationResult } from "@/utils/validate-schema";
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
  fillForm: (data: CartaoCreditoType) => void;
  isCadastrando: boolean;
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
  isEditando: boolean;
  setIsEditando: Dispatch<SetStateAction<boolean>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  errors: ValidationResult[];
  setErrors: Dispatch<SetStateAction<ValidationResult[]>>;
};

export type CartaoCreditoType = {
  id: string;
  flag: string;
  flagId?: string;
  printedName: string;
  cardNumber: string;
  securityCode: string;
  principal: boolean;
};
