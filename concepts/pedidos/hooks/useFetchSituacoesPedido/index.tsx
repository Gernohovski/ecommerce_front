import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchSituacoesPedido = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getSituacoesPedido"],
    queryFn: async () => {
      const response = await api.get("/pedidos/situacoes");
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
