import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchListarGeneros = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getGeneros"],
    queryFn: () => api.get("/generos").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
