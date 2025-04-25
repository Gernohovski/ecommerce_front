export type CheckboxOptions = {
  label?: string;
  value?: string;
};

export type LivroDetalhado = {
  id: string;
  autor: {
    id: string;
    nome: string;
  };
  categorias: CategoriaLivro[];
  anoPublicacao: string;
  titulo: string;
  editora: {
    id: string;
    nome: string;
  };
  edicao: number;
  isbn: string;
  numeroPaginas: number;
  sinopse: string;
  altura: number;
  largura: number;
  peso: number;
  profundidade: number;
  codigoBarras: string;
  grupoPrecificacao: {
    id: string;
    nome: string;
    margemLucro: number;
  };
  valorTabelado: number;
  valorVenda: number;
  ativo: boolean;
  capa: string;
  quantidade: number;
};

export type CategoriaLivro = {
  id: string;
  nome: string;
};
