import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const TelephoneInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Telefone *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o telefone"
      ></Input>
    </div>
  );
};

export default TelephoneInput;
