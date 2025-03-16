import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useTornarCartaoPrincipal = () => {
  return useMutation<void, Error, { id: number; clienteId: number }>({
    mutationFn: async ({ id, clienteId }) => {
      await api.put(`/cartoesCredito/${id}/${clienteId}`);
    },
  });
};

export default useTornarCartaoPrincipal;
