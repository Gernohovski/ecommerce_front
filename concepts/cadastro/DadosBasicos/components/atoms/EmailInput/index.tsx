import { Input } from "@/components/ui/input";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const EmailInput: React.FC<{ errors?: ValidationResult[] }> = ({ errors }) => {
  const { email, setEmail } = useDadosBasicosContext();
  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "email" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">E-mail *</Label>
      <Input
        className="min-w-[537px] max-w-[537px]"
        placeholder="Insira o e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={hasError}
      ></Input>
    </div>
  );
};

export default EmailInput;
