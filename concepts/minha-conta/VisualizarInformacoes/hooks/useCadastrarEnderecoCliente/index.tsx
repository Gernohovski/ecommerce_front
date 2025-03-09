import { Endereco } from "@/concepts/cadastro/types";
import { EnderecoPayload } from "@/concepts/minha-conta/types";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useCadastrarEnderecoCliente = () => {
  return useMutation<Endereco, Error, EnderecoPayload>({
    mutationFn: async (endereco) => {
      if (endereco.id) {
        const { data } = await api.put(`/enderecos/${endereco.id}`, endereco);
        return data;
      }
      const { data } = await api.post("/enderecos", endereco);
      return data;
    },
  });
};

export default useCadastrarEnderecoCliente;
