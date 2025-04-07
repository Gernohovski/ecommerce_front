import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { CarrinhoType } from "../../contexts/CarrinhoContext/types";
import { AlterarQuantidade } from "./types";

const useAlterarQuantidade = () => {
  return useMutation<CarrinhoType, APIError, AlterarQuantidade>({
    mutationFn: async (alterarQuantidade) => {
      const { data } = await api.put<CarrinhoType>(
        "/carrinhos/alterarQuantidade",
        alterarQuantidade
      );
      return data;
    },
  });
};

export default useAlterarQuantidade;
