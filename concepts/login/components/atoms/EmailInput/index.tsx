import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormLoginContext } from "@/concepts/login/contexts/FormLoginContext";
import { useMemo } from "react";

const EmailInput: React.FC = () => {
  const { email, setEmail, errors } = useFormLoginContext();
  const hasError = useMemo(() => {
    return errors.some(
      (error) => error.nomeDoCampo === "email" && !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label>E-mail: *</Label>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Insira seu e-mail"
        error={hasError}
      ></Input>
    </div>
  );
};

export default EmailInput;
