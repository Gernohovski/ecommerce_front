import { EnderecoPayload } from "@/concepts/minha-conta/types";
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
};

const FormFooter: React.FC<Props> = ({
  isCadastrando,
  setIsCadastrando,
  isEditando,
  setIsEditando,
  clearForm,
  endereco,
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
      />
    </div>
  );
};

export default FormFooter;
