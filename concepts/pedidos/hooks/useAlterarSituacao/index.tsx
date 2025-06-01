import { PedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";

type AlterarSituacaoProps = {
  id: string;
  acao: string;
};

export const useAlterarSituacao = () => {
  return useMutation<PedidoResponse, APIError, AlterarSituacaoProps>({
    mutationFn: async (novaSituacao) =>
      api
        .put(`/pedidos/${novaSituacao.id}/${novaSituacao.acao}`)
        .then((result) => result.data),
  });
};

export default useAlterarSituacao;
