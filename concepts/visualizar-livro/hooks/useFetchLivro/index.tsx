import { LivroDetalhado } from "@/concepts/livros/types/types";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useFetchLivro = (id: string) => {
  return useQuery<LivroDetalhado, AxiosError>({
    queryKey: ["getLivro", id],
    queryFn: () => api.get(`/livros/${id}`).then((result) => result.data),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
