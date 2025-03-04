import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import { useCallback } from "react";
import EditEnderecoButton from "../../atoms/EditEnderecoButton";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

const ActionButtons: React.FC<{ endereco: EnderecoType }> = ({ endereco }) => {
  const handleButtonClick = useCallback(() => {
    console.log("teste");
  }, []);

  return (
    <div className="flex gap-6">
      <EditEnderecoButton endereco={endereco} />
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esse endereço?"
        description="A ação não poderá ser desfeita e o endereço será permanentemente deletado."
        handleClick={handleButtonClick}
      />
    </div>
  );
};

export default ActionButtons;
