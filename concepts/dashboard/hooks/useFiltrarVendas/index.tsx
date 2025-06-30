import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { FiltrarVendasRequest, FiltrarVendasResponse } from "./types";

const useFiltrarVendas = () => {
  return useMutation<FiltrarVendasResponse, APIError, FiltrarVendasRequest>({
    mutationFn: async (vendasFiltradas) => {
      const { data } = await api.post<FiltrarVendasResponse>(
        "/vendas",
        vendasFiltradas
      );
      return data;
    },
    retry: false,
  });
};

export default useFiltrarVendas;
