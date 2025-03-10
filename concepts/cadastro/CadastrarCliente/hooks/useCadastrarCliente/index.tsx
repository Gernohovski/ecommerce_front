import { Cliente, ClienteResponse } from "@/concepts/cadastro/types";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useCadastrarCliente = () => {
  return useMutation<ClienteResponse, AxiosError, Cliente>({
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
