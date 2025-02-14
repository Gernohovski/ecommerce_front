import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EmailInput: React.FC = () => {
  return (
    <div>
      <Label>E-mail: *</Label>
      <Input placeholder="Insira seu e-mail"></Input>
    </div>
  );
};

export default EmailInput;
