import { Cliente, ClienteResponse } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";

const useCadastrarCliente = () => {
  return useMutation<ClienteResponse, APIError, Cliente>({
    mutationFn: async (novoCliente) => {
      const { data } = await api.post<ClienteResponse>(
        "/clientes",
        novoCliente
      );
      return data;
    },
  });
};

export default useCadastrarCliente;
