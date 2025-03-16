export interface Propriedade {
  id: number;
  nome?: string;
}

export interface Cliente {
  generoId: number;
  nome: string;
  dataNascimento?: Date;
  cpf: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
  telefone: string;
  tipoTelefoneId: number;
  ddd: string;
  enderecoResidencial: Endereco[];
  enderecoCobranca: Endereco[];
  enderecoEntrega: Endereco[];
  cartaoCredito: CartaoCredito[];
}

export interface ClienteResponse {
  id: number;
  genero: Propriedade;
  nome: string;
  dataNascimento: Date;
  cpf: string;
  email: string;
  senha: string;
  telefone: Telefone;
  ddd: string;
  enderecoResidencial: Endereco[];
  enderecoCobranca: Endereco[];
  enderecoEntrega: Endereco[];
  cartaoCredito: CartaoCredito[];
}

export interface Telefone {
  id?: number;
  ddd: string;
  telefone: string;
  tipoTelefone: Propriedade;
}

export interface Endereco {
  id?: number;
  cliente?: ClienteResponse;
  tipoLogradouro: Propriedade;
  tipoResidencia: Propriedade;
  logradouro: string;
  numero: string;
  principal: boolean;
  bairro: {
    nome: string;
    cidade: {
      nome: string;
      estado: {
        nome: string;
        pais: {
          nome: string;
        };
      };
    };
  };
  cep: string;
  observacoes: string;
  fraseIdentificacao: string;
}

export interface CartaoCredito {
  id?: number;
  numero: string;
  nomeImpresso: string;
  bandeira: Propriedade;
  codigoSeguranca: string;
  principal: boolean;
}
