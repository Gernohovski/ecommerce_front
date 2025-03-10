import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useDeleteCliente = () => {
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await api.delete(`/clientes/${id}`);
    },
  });
};

export default useDeleteCliente;
