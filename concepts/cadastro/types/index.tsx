export interface Propriedade {
  id: number;
  nome?: string;
}

export interface Cliente {
  generoId: number;
  nome: string;
  dataNascimento: Date;
  cpf: string;
  email: string;
  senha: string;
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
  id: number;
  ddd: string;
  telefone: string;
  tipoTelefone: Propriedade;
}

export interface Endereco {
  tipoLogradouro: Propriedade;
  tipoResidencia: Propriedade;
  logradouro: string;
  numero: string;
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
  numero: string;
  nomeImpresso: string;
  bandeira: Propriedade;
  codigoSeguranca: string;
}
