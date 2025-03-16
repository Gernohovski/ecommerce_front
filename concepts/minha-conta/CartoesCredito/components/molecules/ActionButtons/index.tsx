import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import EditCartaoButton from "../../atoms/EditCartaoButton";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

const ActionButtons: React.FC<{
  cartao: CartaoCreditoType;
  isPrincipal?: boolean;
}> = ({ cartao, isPrincipal }) => {
  return (
    <div className="flex gap-6">
      <EditCartaoButton cartao={cartao} />
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esse cartão?"
        description="A ação não poderá ser desfeita e o cartão será permanentemente deletado."
        cartao={cartao}
        isPrincipal={isPrincipal}
      />
    </div>
  );
};

export default ActionButtons;
