import {
  ItemPedido,
  PedidoResponse,
} from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";

type ItemTroca = {
  itemPedido: ItemPedido;
  quantidade: number;
};

type SolicitarTrocaProps = {
  pedidoId: string;
  item: ItemTroca[];
};

export const useSolicitarTroca = () => {
  return useMutation<PedidoResponse, APIError, SolicitarTrocaProps>({
    mutationFn: async (novaSolicitacao) =>
      api
        .post(`/pedidos/solicitar-troca`, novaSolicitacao)
        .then((result) => result.data),
  });
};

export default useSolicitarTroca;
