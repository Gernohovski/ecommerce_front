import { CupomResponse } from "@/concepts/Cupom/hooks/useCadastrarCupom/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useFetchCupomByCodigo = (codigo: string) => {
  return useQuery<CupomResponse, AxiosError>({
    queryKey: ["getCliente", codigo],
    queryFn: () => api.get(`/cupons/${codigo}`).then((result) => result.data),
    enabled: !!codigo,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
};
