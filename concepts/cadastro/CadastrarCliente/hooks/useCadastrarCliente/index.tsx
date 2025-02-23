import { Cliente, ClienteResponse } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useCadastrarCliente = () => {
  return useMutation<ClienteResponse, Error, Cliente>({
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
