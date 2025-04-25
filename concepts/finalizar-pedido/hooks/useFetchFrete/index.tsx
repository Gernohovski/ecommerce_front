import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type CalcularFreteRequest = {
  enderecoId: number;
  peso: number;
};

export type FreteResponse = {
  valorFrete: number;
  prazoDias: number;
};

export const useFetchFrete = (enderecoId: string, peso: number) => {
  return useQuery<FreteResponse, AxiosError>({
    queryKey: ["cep", { enderecoId, peso }],
    queryFn: () =>
      api
        .post<FreteResponse>("/fretes", { enderecoId, peso })
        .then((res) => res.data),
    enabled: !!enderecoId && peso > 0,
  });
};
