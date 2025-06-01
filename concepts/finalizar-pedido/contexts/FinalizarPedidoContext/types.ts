import { CupomResponse } from "@/concepts/cupom/hooks/useCadastrarCupom/types";
import { Dispatch, SetStateAction } from "react";
import { ItemPedido } from "../../hooks/useFazerPedido/types";
import { CupomTrocaResponse } from "../../hooks/useFetchCupomCliente/types";

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
  valorFrete: number;
  prazoDias: number;
  itensPedido: ItemPedido[];
  setItensPedido: Dispatch<SetStateAction<ItemPedido[]>>;
  cuponsTroca: CupomTrocaResponse[];
  setCuponsTroca: Dispatch<SetStateAction<CupomTrocaResponse[]>>;
  cuponsTrocaSelecionados: CupomTrocaResponse[];
  setCuponsTrocaSelecionados: Dispatch<SetStateAction<CupomTrocaResponse[]>>;
};
