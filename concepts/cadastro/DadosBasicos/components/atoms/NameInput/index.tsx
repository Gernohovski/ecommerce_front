import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const NameInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Nome *</Label>
      <Input
        className="min-w-[350px] max-w-[350px]"
        placeholder="Insira o nome"
      ></Input>
    </div>
  );
};

export default NameInput;
