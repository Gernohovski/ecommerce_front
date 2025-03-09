import { ClienteResponse } from "@/concepts/cadastro/types";
import { SenhaPayload } from "@/concepts/minha-conta/types";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useEditarSenhaCliente = () => {
  return useMutation<
    ClienteResponse,
    Error,
    { id: string; novaSenha: SenhaPayload }
  >({
    mutationFn: async ({ id, novaSenha }) => {
      const { data } = await api.put(`/clientes/${id}/senhas`, novaSenha);
      return data;
    },
  });
};

export default useEditarSenhaCliente;
