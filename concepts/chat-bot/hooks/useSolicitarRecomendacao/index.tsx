import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { SolicitarRecomendacao, SolicitarRecomendacaoResponse } from "./types";

const useSolicitarRecomendacao = () => {
  return useMutation<
    SolicitarRecomendacaoResponse,
    APIError,
    SolicitarRecomendacao
  >({
    mutationFn: async (novaSolicitacaoRecomendacao) => {
      const { data } = await api.post<SolicitarRecomendacaoResponse>(
        "/chat-bot",
        novaSolicitacaoRecomendacao
      );
      return data;
    },
  });
};

export default useSolicitarRecomendacao;
