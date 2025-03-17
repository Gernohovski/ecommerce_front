import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormLoginContext } from "@/concepts/login/contexts/FormLoginContext";
import { useMemo } from "react";

const PasswordInput: React.FC = () => {
  const { password, setPassword, errors } = useFormLoginContext();
  const hasError = useMemo(() => {
    return errors.some(
      (error) => error.nomeDoCampo === "senha" && !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label>Senha: *</Label>
      <Input
        id="login-client-password-input"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Insira sua senha"
        error={hasError}
      ></Input>
    </div>
  );
};

export default PasswordInput;
