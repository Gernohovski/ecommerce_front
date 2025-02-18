import { Checkbox } from "@/components/ui/checkbox";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

const CheckboxEntrega: React.FC = () => {
  const { useEnderecoEntrega, setUseEnderecoEntrega } =
    useEnderecoResidencialContext();

  const handleChange = (checked: boolean) => {
    setUseEnderecoEntrega(checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="usar-entrega"
        checked={useEnderecoEntrega}
        onCheckedChange={handleChange}
      />
      <label
        htmlFor="usar-entrega"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Usar este endereço como endereço de entrega
      </label>
    </div>
  );
};

export default CheckboxEntrega;
