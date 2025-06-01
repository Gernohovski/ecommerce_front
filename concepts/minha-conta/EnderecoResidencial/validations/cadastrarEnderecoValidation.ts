import * as yup from "yup";

export const cadastrarEnderecoSchema = yup.object().shape({
  //id: yup.string().required(),
  tipoResidenciaId: yup.number().required().min(1),
  tipoLogradouroId: yup.number().required().min(1),
  logradouro: yup.string().required(),
  numero: yup.string().required(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
  estado: yup.string().required(),
  pais: yup.string().required(),
  cep: yup.string().required(),
  fraseIdentificacao: yup.string().required(),
  clienteId: yup.string().required(),
  tipoEndereco: yup.string().required(),
});
