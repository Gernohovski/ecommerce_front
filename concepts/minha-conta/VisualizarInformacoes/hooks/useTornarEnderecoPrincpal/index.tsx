import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useTornarEnderecoPrincipal = () => {
  return useMutation<
    void,
    Error,
    { id: number; clienteId: number; tipoEndereco: string }
  >({
    mutationFn: async ({ id, clienteId, tipoEndereco }) => {
      await api.put(`/enderecos/${id}/${clienteId}/${tipoEndereco}`);
    },
  });
};

export default useTornarEnderecoPrincipal;
