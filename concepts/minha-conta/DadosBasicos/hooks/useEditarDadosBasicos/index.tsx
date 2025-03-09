import { DadosBasicosPayload } from "@/concepts/minha-conta/types";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useEditarDadosBasicos = () => {
  return useMutation({
    mutationFn: async ({
      id,
      cliente,
    }: {
      id: string;
      cliente: DadosBasicosPayload;
    }) => {
      const { data } = await api.put(`/clientes/${id}`, cliente);
      return data;
    },
  });
};

export default useEditarDadosBasicos;
