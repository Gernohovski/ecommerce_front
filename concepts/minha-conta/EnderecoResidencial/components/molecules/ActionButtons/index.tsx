import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import EditEnderecoButton from "../../atoms/EditEnderecoButton";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

type Props = {
  endereco: EnderecoType;
  fillForm: (data: EnderecoType) => void;
  tipoEndereco: string;
  isPrincipal?: boolean;
};

const ActionButtons: React.FC<Props> = ({
  endereco,
  fillForm,
  tipoEndereco,
  isPrincipal,
}) => {
  return (
    <div className="flex gap-6">
      <EditEnderecoButton endereco={endereco} fillForm={fillForm} />
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esse endereço?"
        description="A ação não poderá ser desfeita e o endereço será permanentemente deletado."
        endereco={endereco}
        tipoEndereco={tipoEndereco}
        isPrincipal={isPrincipal}
      />
    </div>
  );
};

export default ActionButtons;
