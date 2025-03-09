import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useDeleteCartaoCliente = () => {
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await api.delete(`/cartoesCredito/${id}`);
    },
  });
};

export default useDeleteCartaoCliente;
