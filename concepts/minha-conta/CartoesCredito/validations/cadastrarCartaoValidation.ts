import * as yup from "yup";

export const cadastrarCartaoSchema = yup.object().shape({
  numero: yup.string().required(),
  nomeImpresso: yup.string().required(),
  bandeiraId: yup.number().required().min(1),
  codigoSeguranca: yup.string().required(),
});
