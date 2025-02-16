import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const NeighborhoodInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Bairro *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o bairro"
      ></Input>
    </div>
  );
};

export default NeighborhoodInput;
