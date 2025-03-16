import { EnderecoPayload } from "@/concepts/minha-conta/types";
import { ValidationResult } from "@/utils/validate-schema";
import { Dispatch, SetStateAction } from "react";
import CancelarEdicaoEnderecoResidencialButton from "../../atoms/CancelarEdicaoEnderecoResidencialButton";
import SalvarEnderecoResidencialButton from "../../atoms/SalvarEnderecoResidencialButton";

type Props = {
  isCadastrando: boolean;
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
  isEditando: boolean;
  setIsEditando: Dispatch<SetStateAction<boolean>>;
  clearForm: () => void;
  endereco: EnderecoPayload;
  errors: ValidationResult[];
  setErrors: Dispatch<SetStateAction<ValidationResult[]>>;
};

const FormFooter: React.FC<Props> = ({
  isCadastrando,
  setIsCadastrando,
  isEditando,
  setIsEditando,
  clearForm,
  endereco,
  errors,
  setErrors,
}) => {
  return (
    <div className="flex gap-6">
      <CancelarEdicaoEnderecoResidencialButton
        setIsCadastrando={setIsCadastrando}
        setIsEditando={setIsEditando}
        clearForm={clearForm}
      />
      <SalvarEnderecoResidencialButton
        setIsCadastrando={setIsCadastrando}
        isCadastrando={isCadastrando}
        isEditando={isEditando}
        setIsEditando={setIsEditando}
        objectToSave={endereco}
        clearForm={clearForm}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
};

export default FormFooter;
