import { Checkbox } from "@/components/ui/checkbox";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

const CheckboxCobranca: React.FC = () => {
  const { useEnderecoCobranca, setUseEnderecoCobranca } =
    useEnderecoResidencialContext();

  const handleChange = (checked: boolean) => {
    setUseEnderecoCobranca(checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="usar-cobranca"
        checked={useEnderecoCobranca}
        onCheckedChange={handleChange}
      />
      <label
        htmlFor="usar-cobranca"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Usar este endereço como endereço de cobrança
      </label>
    </div>
  );
};

export default CheckboxCobranca;
