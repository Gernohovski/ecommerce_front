import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchListarBandeirasCartao = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getBandeiras"],
    queryFn: () => api.get("/bandeirasCartao").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
