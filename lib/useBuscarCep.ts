import { useQuery } from "@tanstack/react-query";
import { buscarCep } from "./cepApi";

export const useBuscarCep = (cep: string) => {
  return useQuery({
    queryKey: ["cep", cep],
    queryFn: () => buscarCep(cep),
    enabled: cep.length === 8,
  });
};
