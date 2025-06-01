import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CupomTrocaResponse } from "./types";

export const useFetchCupomCliente = (id: string) => {
  return useQuery<CupomTrocaResponse[], AxiosError>({
    queryKey: ["getCupomByCliente", id],
    queryFn: () =>
      api.get(`/cupons/${id}/cupom-troca`).then((result) => result.data),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
};
