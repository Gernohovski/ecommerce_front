import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { Cupom, CupomResponse } from "./types";

const useCadastrarCupom = () => {
  return useMutation<CupomResponse, APIError, Cupom>({
    mutationFn: async (novoCupom) => {
      const { data } = await api.post<CupomResponse>("/cupons", novoCupom);
      return data;
    },
  });
};

export default useCadastrarCupom;
