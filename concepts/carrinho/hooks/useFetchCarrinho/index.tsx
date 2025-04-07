import { CarrinhoType } from "@/concepts/carrinho/contexts/CarrinhoContext/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchCarrinho = (id: string) => {
  return useQuery<CarrinhoType, Error>({
    queryKey: ["getCarrinho", id],
    queryFn: () => api.get(`/carrinhos/${id}`).then((result) => result.data),
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  });
};
