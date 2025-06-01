import {
  ItemPedido,
  PedidoResponse,
} from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";

type ItemDevolucao = {
  itemPedido: ItemPedido;
  quantidade: number;
};

type SolicitarDevolucaoProps = {
  pedidoId: string;
  item: ItemDevolucao[];
};

export const useSolicitarDevolucao = () => {
  return useMutation<PedidoResponse, APIError, SolicitarDevolucaoProps>({
    mutationFn: async (novaSolicitacao) =>
      api
        .post(`/pedidos/solicitar-devolucao`, novaSolicitacao)
        .then((result) => result.data),
  });
};

export default useSolicitarDevolucao;
