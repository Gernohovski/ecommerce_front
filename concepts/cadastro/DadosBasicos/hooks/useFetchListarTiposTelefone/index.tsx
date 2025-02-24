import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchListarTiposTelefone = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getTiposTelefone"],
    queryFn: () => api.get("/tiposTelefones").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
