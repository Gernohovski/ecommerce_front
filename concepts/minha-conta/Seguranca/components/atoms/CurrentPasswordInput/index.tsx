import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";

const CurrentPasswordInput: React.FC<{ width: string }> = ({ width }) => {
  const { currentPassword, setCurrentPassword, errors } =
    useDadosBasicosContext();

  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "senhaAtual" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">Senha atual*</Label>
      <Input
        id="edit-client-curretPassword-input"
        style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
        placeholder="Insira a senha atual"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        error={hasError}
      ></Input>
    </div>
  );
};

export default CurrentPasswordInput;
