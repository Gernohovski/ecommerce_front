import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordInput: React.FC = () => {
  return (
    <div>
      <Label>Senha: *</Label>
      <Input placeholder="Insira sua senha"></Input>
    </div>
  );
};

export default PasswordInput;
