import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import { useCallback } from "react";
import EditEnderecoButton from "../../atoms/EditEnderecoButton";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

type Props = {
  endereco: EnderecoType;
  fillForm: (data: EnderecoType) => void;
};

const ActionButtons: React.FC<Props> = ({ endereco, fillForm }) => {
  const handleButtonClick = useCallback(() => {
    console.log("teste");
  }, []);

  return (
    <div className="flex gap-6">
      <EditEnderecoButton endereco={endereco} fillForm={fillForm} />
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esse endereço?"
        description="A ação não poderá ser desfeita e o endereço será permanentemente deletado."
        handleClick={handleButtonClick}
      />
    </div>
  );
};

export default ActionButtons;
