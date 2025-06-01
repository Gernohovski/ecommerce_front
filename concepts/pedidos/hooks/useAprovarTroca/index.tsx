import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { CupomTrocaResponse } from "./type";

export const useAprovarTroca = () => {
  return useMutation<CupomTrocaResponse, APIError, { id: string }>({
    mutationFn: async (id) =>
      api.put(`/pedidos/${id.id}/aprovar-troca`).then((result) => result.data),
  });
};

export default useAprovarTroca;
