import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchAutores = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getAutores"],
    queryFn: () => api.get("/autores").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
