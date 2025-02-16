import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const NumberInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Nº *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Nº"
      ></Input>
    </div>
  );
};

export default NumberInput;
