import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { CarrinhoType } from "../../contexts/CarrinhoContext/types";
import { AdicionarItemCarrinho } from "./types";

const useAdicionarItemCarrinho = (id: string) => {
  return useMutation<CarrinhoType, APIError, AdicionarItemCarrinho>({
    mutationFn: async (removerItem) => {
      const { data } = await api.post<CarrinhoType>(
        `/carrinhos/${id}/adicionar`,
        removerItem
      );
      return data;
    },
  });
};

export default useAdicionarItemCarrinho;
