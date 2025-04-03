import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchCondicoes = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getCondicoes"],
    queryFn: () => api.get("/condicoes").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
