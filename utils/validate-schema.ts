import * as yup from "yup";

export interface ValidationResult {
  nomeDoCampo: string;
  isValid: boolean;
}

const extractValidationErrors = (
  error: yup.ValidationError
): ValidationResult[] => {
  return error.inner.map((err) => ({
    nomeDoCampo: err.path || "desconhecido",
    isValid: false,
  }));
};

const validateSchema = async <T extends Record<string, unknown>>(
  schema: yup.ObjectSchema<T>,
  data: T,
  setValidationResults: React.Dispatch<React.SetStateAction<ValidationResult[]>>
) => {
  try {
    await schema.validate(data, { abortEarly: false });
    setValidationResults([]);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      setValidationResults(extractValidationErrors(error));
    }
  }
};

export default validateSchema;
