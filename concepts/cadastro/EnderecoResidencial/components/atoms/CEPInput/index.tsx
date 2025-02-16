import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CEPInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">CEP *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o CEP"
      ></Input>
    </div>
  );
};

export default CEPInput;
