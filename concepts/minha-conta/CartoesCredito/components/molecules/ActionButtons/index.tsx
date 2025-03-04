import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import DeleteCartaoButton from "../../atoms/DeleteCartaoButton";
import EditCartaoButton from "../../atoms/EditCartaoButton";

const ActionButtons: React.FC<{ cartao: CartaoCreditoType }> = ({ cartao }) => {
  return (
    <div className="flex gap-6">
      <EditCartaoButton cartao={cartao} />
      <DeleteCartaoButton />
    </div>
  );
};

export default ActionButtons;
