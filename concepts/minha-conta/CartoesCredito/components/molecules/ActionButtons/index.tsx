import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import EditCartaoButton from "../../atoms/EditCartaoButton";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

const ActionButtons: React.FC<{ cartao: CartaoCreditoType }> = ({ cartao }) => {
  return (
    <div className="flex gap-6">
      <EditCartaoButton cartao={cartao} />
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esse cartão?"
        description="A ação não poderá ser desfeita e o cartão será permanentemente deletado."
        cartao={cartao}
      />
    </div>
  );
};

export default ActionButtons;
