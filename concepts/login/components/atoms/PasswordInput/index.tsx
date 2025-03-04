import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormLoginContext } from "@/concepts/login/contexts/FormLoginContext";

const PasswordInput: React.FC = () => {
  const { password, setPassword } = useFormLoginContext();
  return (
    <div>
      <Label>Senha: *</Label>
      <Input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Insira sua senha"
      ></Input>
    </div>
  );
};

export default PasswordInput;
