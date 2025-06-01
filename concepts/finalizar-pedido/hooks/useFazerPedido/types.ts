import {
  CartaoCredito,
  ClienteResponse,
  Endereco,
} from "@/concepts/cadastro/types";
import { CarrinhoType } from "@/concepts/carrinho/contexts/CarrinhoContext/types";
import { LivroDetalhado } from "@/concepts/livros/types/types";
import { CupomTrocaResponse } from "../useFetchCupomCliente/types";

export type Pedido = {
  carrinhoId: number | string;
  enderecoId: number | string;
  cartoesCreditoId: string[];
  valorPedido: number;
  valorFrete: number;
  clienteId: string;
  itensPedido: ItemPedido[];
  cuponsTroca: CupomTrocaResponse[];
};

export type ItemPedido = {
  id?: number;
  livro: LivroDetalhado;
  carrinho?: CarrinhoType;
  quantidade: number;
  trocaAberta: boolean;
  devolucaoAberta: boolean;
  quantidadeTroca: number;
  quantidadeDevolucao: number;
  valor: number;
};

export type PedidoResponse = {
  id: number;
  situacaoPedido: {
    id: number;
    nome: string;
  };
  carrinho: CarrinhoType;
  dataPedido: Date;
  endereco: Endereco;
  cartoesCredito: CartaoCredito[];
  valorPedido: number;
  valorFrete: number;
  cliente: ClienteResponse;
  itensPedido: ItemPedido[];
};

export type CustomPagePedidoResponse = {
  content: PedidoResponse[];
  count: number;
};
