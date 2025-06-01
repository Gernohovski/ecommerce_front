import * as yup from "yup";

export const cadastrarCupomSchema = yup.object().shape({
  porcentagem: yup.string().required(),
  codigoCupom: yup.string().required(),
});
