import * as yup from "yup";

export const editarSenhaSchema = yup.object().shape({
  senha: yup.string().required(),
  confirmacaoSenha: yup.string().required(),
  senhaAtual: yup.string().required(),
});
