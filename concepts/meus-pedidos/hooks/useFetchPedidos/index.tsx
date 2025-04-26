import { CustomPagePedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { usePedidosFiltrosContext } from "../../contexts/PedidosFiltrosContext";

export const useFetchPedidos = () => {
  const { filtros, page, size } = usePedidosFiltrosContext();
  const buildQueryParams = () => {
    const params: { [key: string]: string } = {};
    if (page) params.page = String(page);
    if (size) params.size = String(size);
    if (filtros.situacoesId.length > 0)
      params.situacoesId = filtros.situacoesId.join(",");
    if (filtros.clienteId) params.clienteId = filtros.clienteId;
    if (filtros.sortBy) params.sortBy = filtros.sortBy;
    if (filtros.sortDirection) params.sortDirection = filtros.sortDirection;
    return new URLSearchParams(params).toString();
  };
  return useQuery<CustomPagePedidoResponse, Error>({
    queryKey: ["getPedidos", filtros, page, size],
    queryFn: async () => {
      const queryParams = buildQueryParams();
      const response = await api.get(`/pedidos?${queryParams}`);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};
