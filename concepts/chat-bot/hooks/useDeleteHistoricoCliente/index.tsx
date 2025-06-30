import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useDeleteHistoricoCliente = () => {
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      await api.delete(`/chat-bot/${id}`);
    },
  });
};

export default useDeleteHistoricoCliente;
