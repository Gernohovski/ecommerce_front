import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CPFInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">CPF *</Label>
      <Input
        className="min-w-[350px] max-w-[350px]"
        placeholder="Insira o CPF"
      ></Input>
    </div>
  );
};

export default CPFInput;
