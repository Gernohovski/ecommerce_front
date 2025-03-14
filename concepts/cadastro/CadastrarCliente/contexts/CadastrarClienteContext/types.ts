import { ValidationResult } from "@/utils/validate-schema";
import { Dispatch, SetStateAction } from "react";

export type CadastrarClienteContextType = {
  errors: ValidationResult[];
  setErrors: Dispatch<SetStateAction<ValidationResult[]>>;
};
