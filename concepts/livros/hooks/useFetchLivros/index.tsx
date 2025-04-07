import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useFiltrosContext } from "../../contexts/FiltrosContext";
import { LivroDetalhado } from "../../types/types";

export const useFetchLivros = () => {
  const { filtros } = useFiltrosContext();
  const buildQueryParams = () => {
    const params: { [key: string]: string } = {};
    if (filtros.precoMin) params.precoMin = filtros.precoMin;
    if (filtros.precoMax) params.precoMax = filtros.precoMax;
    if (filtros.categoriaId) params.categoriaId = filtros.categoriaId;
    if (filtros.autoresId.length > 0)
      params.autoresId = filtros.autoresId.join(",");
    if (filtros.titulo) params.titulo = filtros.titulo;
    if (filtros.condicao) params.condicao = filtros.condicao;
    if (filtros.idioma.length > 0) params.idioma = filtros.idioma.join(",");
    if (filtros.sortBy) params.sortBy = filtros.sortBy;
    if (filtros.sortDirection) params.sortDirection = filtros.sortDirection;
    console.log(params);
    return new URLSearchParams(params).toString();
  };
  return useQuery<LivroDetalhado[], Error>({
    queryKey: ["getLivros", filtros],
    queryFn: async () => {
      const queryParams = buildQueryParams();
      const response = await api.get(`/livros?${queryParams}`);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};
