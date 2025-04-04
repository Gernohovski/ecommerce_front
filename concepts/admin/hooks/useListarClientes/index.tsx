import { ClienteResponse } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useListarClientes = (params?: {
  page?: number;
  size?: number;
  termoPesquisa?: string;
}) => {
  return useQuery<ClienteResponse[], Error>({
    queryKey: ["getClientes", params],
    queryFn: () =>
      api.get(`/clientes`, { params }).then((result) => result.data),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};
