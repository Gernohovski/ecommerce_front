import DeleteCartaoCreditoButton from "../../atoms/DeleteCartaoCreditoButton";
import EditCartaoCreditoButton from "../../atoms/EditCartaoCreditoButton";

const ActionButtons: React.FC<{ cartaoCredito: string }> = () => {
  return (
    <div className="flex gap-6">
      <EditCartaoCreditoButton />
      <DeleteCartaoCreditoButton />
    </div>
  );
};

export default ActionButtons;
