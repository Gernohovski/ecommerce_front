import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const NameInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Nome *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o nome"
      ></Input>
    </div>
  );
};

export default NameInput;
