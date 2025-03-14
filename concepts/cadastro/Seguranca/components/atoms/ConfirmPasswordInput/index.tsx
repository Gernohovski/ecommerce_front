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

const ConfirmPasswordInput: React.FC<Props> = ({
  width,
  label,
  placeholder,
  errors,
}) => {
  const { confirmPassword, setConfirmPassword } = useDadosBasicosContext();
  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "confirmacaoSenha" && !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label className="text-sm">{label}</Label>
      <Input
        style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
        placeholder={placeholder}
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={hasError}
      ></Input>
    </div>
  );
};

export default ConfirmPasswordInput;
