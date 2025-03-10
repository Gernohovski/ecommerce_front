import { ClienteResponse } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useFetchBuscarCliente = (id: string) => {
  return useQuery<ClienteResponse, AxiosError>({
    queryKey: ["getCliente", id],
    queryFn: () => api.get(`/clientes/${id}`).then((result) => result.data),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
