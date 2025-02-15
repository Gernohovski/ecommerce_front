import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const TelephoneInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Telefone *</Label>
      <Input
        className="min-w-[350px] max-w-[350px]"
        placeholder="Insira o telefone"
      ></Input>
    </div>
  );
};

export default TelephoneInput;
