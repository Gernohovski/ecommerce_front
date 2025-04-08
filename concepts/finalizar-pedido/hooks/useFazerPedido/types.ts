export type Pedido = {
  carrinhoId: number | string;
  enderecoId: number | string;
  cartoesCreditoId: string[];
  valorPedido: number;
  clienteId: string;
};

export type PedidoResponse = {
  id: number;
};
