import { Propriedade } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchIdiomas = () => {
  return useQuery<Propriedade[], Error>({
    queryKey: ["getIdiomas"],
    queryFn: () => api.get("/idiomas").then((result) => result.data),
    staleTime: 5 * 60 * 1000,
  });
};
