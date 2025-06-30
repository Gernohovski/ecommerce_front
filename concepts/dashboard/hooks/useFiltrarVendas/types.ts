export type FiltrarVendasResponse = {
  name: string;
  series: SerieLinhaResponse[];
  categories: string[];
  numeroVendas: number;
  novosClientes: number;
};

export type SerieLinhaResponse = {
  name: string;
  data: number[];
};

export type FiltrarVendasRequest = {
  dataInicio: string;
  dataFim: string;
  categoriasId: string[];
};
