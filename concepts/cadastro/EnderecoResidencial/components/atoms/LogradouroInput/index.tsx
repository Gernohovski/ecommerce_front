import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const LogradouroInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Logradouro *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o logradouro"
      ></Input>
    </div>
  );
};

export default LogradouroInput;
