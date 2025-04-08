import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { Pedido, PedidoResponse } from "./types";

const useFazerPedido = () => {
  return useMutation<PedidoResponse, APIError, Pedido>({
    mutationFn: async (novoPedido) => {
      const { data } = await api.post<PedidoResponse>("/pedidos", novoPedido);
      return data;
    },
  });
};

export default useFazerPedido;
