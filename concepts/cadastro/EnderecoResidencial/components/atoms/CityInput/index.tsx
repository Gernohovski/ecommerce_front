import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CityInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Cidade *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira a cidade"
      ></Input>
    </div>
  );
};

export default CityInput;
