import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchCategorias = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getCategorias"],
    queryFn: () => api.get("/categorias-livros").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
