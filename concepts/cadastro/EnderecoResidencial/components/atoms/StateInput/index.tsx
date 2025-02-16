import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const StateInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Estado *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o estado"
      ></Input>
    </div>
  );
};

export default StateInput;
