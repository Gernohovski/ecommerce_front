import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const EmailInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">E-mail *</Label>
      <Input
        className="min-w-[350px] max-w-[350px]"
        placeholder="Insira o e-mail"
      ></Input>
    </div>
  );
};

export default EmailInput;
