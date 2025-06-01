import { CupomResponse } from "@/concepts/cupom/hooks/useCadastrarCupom/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useFetchCupomByCodigo = (codigo: string) => {
  return useQuery<CupomResponse, AxiosError>({
    queryKey: ["getCupomByCodigo", codigo],
    queryFn: () => api.get(`/cupons/${codigo}`).then((result) => result.data),
    enabled: !!codigo,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
};
