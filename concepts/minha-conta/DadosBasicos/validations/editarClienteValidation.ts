import * as yup from "yup";

export const editarClienteSchema = yup.object().shape({
  generoId: yup.number().required().min(1),
  nome: yup.string().required(),
  dataNascimento: yup
    .date()
    .required()
    .test("is-valid-date", (value) => {
      return value instanceof Date && !isNaN(value.getTime());
    }),
  cpf: yup.string().required(),
  email: yup.string().required(),
  confirmacaoSenha: yup.string().required(),
  senha: yup.string().required(),
  telefone: yup.string().required(),
  tipoTelefoneId: yup.number().required().min(1),
  ddd: yup.string().required(),
});
