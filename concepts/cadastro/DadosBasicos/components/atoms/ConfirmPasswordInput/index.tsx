import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const ConfirmPasswordInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Confirmação de senha *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira senha novamente"
      ></Input>
    </div>
  );
};

export default ConfirmPasswordInput;
