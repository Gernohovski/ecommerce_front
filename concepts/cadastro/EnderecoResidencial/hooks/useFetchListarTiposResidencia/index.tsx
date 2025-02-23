import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchListarTiposResidencia = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getTiposResidencia"],
    queryFn: () => api.get("/tiposResidencia").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
