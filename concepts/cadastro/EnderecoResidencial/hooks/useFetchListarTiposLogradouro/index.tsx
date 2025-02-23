import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchListarTiposLogradouro = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getTiposLogradouro"],
    queryFn: () => api.get("/tiposLogradouro").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
