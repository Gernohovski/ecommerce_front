import { CupomResponse } from "@/concepts/Cupom/hooks/useCadastrarCupom/types";
import { Dispatch, SetStateAction } from "react";

export type FinalizarPedidoContextType = {
  isSelected: {
    conferencia: boolean;
    metodoEnvio: boolean;
    formaPagamento: boolean;
  };
  setIsSelected: Dispatch<
    SetStateAction<{
      conferencia: boolean;
      metodoEnvio: boolean;
      formaPagamento: boolean;
    }>
  >;
  cupons: CupomResponse[];
  setCupons: Dispatch<SetStateAction<CupomResponse[]>>;
  handleRemoverCupom: (id: number) => void;
  valorPedido: number;
  setValorPedido: Dispatch<SetStateAction<number>>;
  desconto: number;
  setDesconto: Dispatch<SetStateAction<number>>;
  enderecoId: string;
  setEnderecoId: Dispatch<SetStateAction<string>>;
  cartoesId: string[];
  setCartoesId: Dispatch<SetStateAction<string[]>>;
  clearForm: () => void;
};
