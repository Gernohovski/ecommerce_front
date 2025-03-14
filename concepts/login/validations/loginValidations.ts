import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required(),
  senha: yup.string().required(),
});
