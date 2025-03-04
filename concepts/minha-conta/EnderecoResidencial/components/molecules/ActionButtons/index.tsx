import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import DeleteEnderecoButton from "../../atoms/DeleteEnderecoButton";
import EditEnderecoButton from "../../atoms/EditEnderecoButton";

const ActionButtons: React.FC<{ endereco: EnderecoType }> = ({ endereco }) => {
  return (
    <div className="flex gap-6">
      <EditEnderecoButton endereco={endereco} />
      <DeleteEnderecoButton />
    </div>
  );
};

export default ActionButtons;
