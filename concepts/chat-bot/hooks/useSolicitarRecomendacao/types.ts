export type SolicitarRecomendacao = {
  clienteId: number;
  pergunta: string;
};

export type SolicitarRecomendacaoResponse = {
  mensagem: string;
  status: number;
  livroId: number;
};
