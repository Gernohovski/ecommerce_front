import { CartaoCredito } from "@/concepts/cadastro/types";
import { CartaoCreditoPayload } from "@/concepts/minha-conta/types";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useCadastrarCartaoCliente = () => {
  return useMutation<CartaoCredito, Error, CartaoCreditoPayload>({
    mutationFn: async (cartao) => {
      if (cartao.id) {
        const { data } = await api.put(`/cartoesCredito/${cartao.id}`, cartao);
        return data;
      }
      const { data } = await api.post("/cartoesCredito", cartao);
      return data;
    },
  });
};

export default useCadastrarCartaoCliente;
