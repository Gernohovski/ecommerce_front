import { ClienteResponse } from "@/concepts/cadastro/types";
import { LivroDetalhado } from "@/concepts/livros/types/types";
import { Dispatch, SetStateAction } from "react";

export type CarrinhoContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  itensCarrinho: ItemCarrinho[];
  setItensCarrinho: Dispatch<SetStateAction<ItemCarrinho[]>>;
  dataExpiracao: string;
  setDataExpiracao: Dispatch<SetStateAction<string>>;
  valorCompra: number;
  setValorCompra: Dispatch<SetStateAction<number>>;
  fillForm: (data: CarrinhoType) => void;
};

export type ItemCarrinho = {
  id: string;
  livro: LivroDetalhado;
  quantidade: number;
};

export type CarrinhoType = {
  id: string;
  itens: ItemCarrinho[];
  dataExpiracao: string;
  dataCriacao: string;
  comprado: boolean;
  cliente: ClienteResponse;
};
