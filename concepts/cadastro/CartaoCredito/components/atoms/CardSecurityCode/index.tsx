import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CardSecurityCode: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Código de segurança *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o código de segurança"
      ></Input>
    </div>
  );
};

export default CardSecurityCode;
