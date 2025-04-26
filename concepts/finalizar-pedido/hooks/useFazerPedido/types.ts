import {
  CartaoCredito,
  ClienteResponse,
  Endereco,
} from "@/concepts/cadastro/types";
import { CarrinhoType } from "@/concepts/carrinho/contexts/CarrinhoContext/types";

export interface Pedido {
  carrinhoId: number | string;
  enderecoId: number | string;
  cartoesCreditoId: string[];
  valorPedido: number;
  valorFrete: number;
  clienteId: string;
}

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
};

export type CustomPagePedidoResponse = {
  content: PedidoResponse[];
  count: number;
};
