import { Dispatch, SetStateAction } from "react";
import CancelarEdicaoEnderecoResidencialButton from "../../atoms/CancelarEdicaoEnderecoResidencialButton";
import SalvarEnderecoResidencialButton from "../../atoms/SalvarEnderecoResidencialButton";

type Props = {
  isCadastrando: boolean;
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
  isEditando: boolean;
  setIsEditando: Dispatch<SetStateAction<boolean>>;
  clearForm: () => void;
};

const FormFooter: React.FC<Props> = ({
  isCadastrando,
  setIsCadastrando,
  isEditando,
  setIsEditando,
  clearForm,
}) => {
  return (
    <div className="flex gap-6">
      <CancelarEdicaoEnderecoResidencialButton
        setIsCadastrando={setIsCadastrando}
        setIsEditando={setIsEditando}
        clearForm={clearForm}
      />
      <SalvarEnderecoResidencialButton
        isCadastrando={isCadastrando}
        isEditando={isEditando}
      />
    </div>
  );
};

export default FormFooter;
