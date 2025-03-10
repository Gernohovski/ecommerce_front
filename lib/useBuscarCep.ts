import { useQuery } from "@tanstack/react-query";
import { buscarCep } from "./cepApi";

export const useBuscarCep = (cep: string) => {
  const cepFormatado = cep.replace(/\D/g, "");
  return useQuery({
    queryKey: ["cep", cepFormatado],
    queryFn: () => buscarCep(cepFormatado),
    enabled: cepFormatado.length === 8,
  });
};
