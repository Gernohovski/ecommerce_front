import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CPFInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">CPF *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o CPF"
      ></Input>
    </div>
  );
};

export default CPFInput;
