import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const EmailInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">E-mail *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o e-mail"
      ></Input>
    </div>
  );
};

export default EmailInput;
