export interface EnderecoPayload {
  id?: string;
  tipoResidenciaId: number;
  tipoLogradouroId: number;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  cep: string;
  observacoes: string;
  fraseIdentificacao: string;
  clienteId: string;
  tipoEndereco: string;
  temporario: boolean;
}

export interface CartaoCreditoPayload {
  id?: string;
  numero: string;
  nomeImpresso: string;
  bandeiraId: number;
  codigoSeguranca: string;
  clienteId: string;
}

export interface SenhaPayload {
  senhaAtual: string;
  senha: string;
}

export interface DadosBasicosPayload {
  generoId: number;
  nome: string;
  dataNascimento: Date | undefined;
  cpf: string;
  telefone: string;
  tipoTelefoneId: number;
  ddd: string;
}
