import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";

type EntradaEstoque = {
  livroId: string;
  quantidade: number;
};

const useDarEntradaEstoque = () => {
  return useMutation<null, APIError, EntradaEstoque>({
    mutationFn: async (novaEntrada) => {
      const { data } = await api.put<null>("/estoques/darEntrada", novaEntrada);
      return data;
    },
  });
};

export default useDarEntradaEstoque;
