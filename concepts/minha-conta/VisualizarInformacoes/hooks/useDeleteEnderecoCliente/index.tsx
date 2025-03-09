import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useDeleteEnderecoCliente = () => {
  return useMutation({
    mutationFn: async ({
      id,
      tipoEndereco,
    }: {
      id: string;
      tipoEndereco: string;
    }) => {
      const url = `/enderecos/${id}/${tipoEndereco}`;
      await api.delete(url);
    },
  });
};

export default useDeleteEnderecoCliente;
