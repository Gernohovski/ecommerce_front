import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { CarrinhoType } from "../../contexts/CarrinhoContext/types";
import { RemoverItemCarrinho } from "./types";

const useRemoveItemCarrinho = (id: string) => {
  return useMutation<CarrinhoType, APIError, RemoverItemCarrinho>({
    mutationFn: async (removerItem) => {
      const { data } = await api.post<CarrinhoType>(
        `/carrinhos/${id}/remover`,
        removerItem
      );
      return data;
    },
  });
};

export default useRemoveItemCarrinho;
