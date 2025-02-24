import DeleteEnderecoButton from "../../atoms/DeleteEnderecoButton";
import EditEnderecoButton from "../../atoms/EditEnderecoButton";

const ActionButtons: React.FC<{ endereco: string }> = () => {
  return (
    <div className="flex">
      <EditEnderecoButton />
      <DeleteEnderecoButton />
    </div>
  );
};

export default ActionButtons;
