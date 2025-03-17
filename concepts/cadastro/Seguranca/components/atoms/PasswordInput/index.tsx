import { Input } from "@/components/ui/input";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useDadosBasicosContext } from "../../../../DadosBasicos/contexts/DadosBasicosContext";

type Props = {
  width: string;
  label: string;
  placeholder: string;
  errors?: ValidationResult[];
};

const PasswordInput: React.FC<Props> = ({
  width,
  label,
  placeholder,
  errors,
}) => {
  const { password, setPassword } = useDadosBasicosContext();

  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "senha" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">{label}</Label>
      <Input
        id="create-client-password-input"
        style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
        placeholder={placeholder}
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        error={hasError}
      ></Input>
    </div>
  );
};

export default PasswordInput;
