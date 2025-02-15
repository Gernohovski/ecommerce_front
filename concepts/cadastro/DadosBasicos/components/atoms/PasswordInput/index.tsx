import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const PasswordInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Senha *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira a senha"
      ></Input>
    </div>
  );
};

export default PasswordInput;
