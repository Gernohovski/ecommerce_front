export type Cupom = {
  porcentagemDesconto: number;
  codigo: string;
};

export type CupomResponse = {
  id: number;
  porcentagemDesconto: number;
  dataExpiracao: string;
  codigo: string;
};
