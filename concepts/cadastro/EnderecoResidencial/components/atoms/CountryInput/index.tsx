import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CountryInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">País *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o país"
      ></Input>
    </div>
  );
};

export default CountryInput;
