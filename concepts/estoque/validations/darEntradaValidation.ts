import * as yup from "yup";

export const darEntradaSchema = yup.object().shape({
  quantidade: yup.number().required().min(1),
});
