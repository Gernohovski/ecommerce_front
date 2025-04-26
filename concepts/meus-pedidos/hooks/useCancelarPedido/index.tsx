import { PedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCancelarPedido = () => {
  return useMutation<PedidoResponse, AxiosError, string>({
    mutationFn: async (id) =>
      api.put(`/pedidos/${id}/cancelar`).then((result) => result.data),
  });
};

export default useCancelarPedido;
