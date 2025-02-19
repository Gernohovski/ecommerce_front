import { CircleAlert } from "lucide-react";

const CartoesDeCreditoEmpty: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-5 gap-2">
      <CircleAlert color="#7738C8" size={32} />
      <span>Nenhum cartão de crédito adicionado</span>
    </div>
  );
};

export default CartoesDeCreditoEmpty;
