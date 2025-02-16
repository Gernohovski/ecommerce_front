import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CardNumberInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Número do cartão *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o número do cartão"
      ></Input>
    </div>
  );
};

export default CardNumberInput;
