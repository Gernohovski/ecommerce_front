import { Input } from "@/components/ui/input";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const NameInput: React.FC<{ errors?: ValidationResult[] }> = ({ errors }) => {
  const { name, setName } = useDadosBasicosContext();
  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "nome" && !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label className="text-sm">Nome *</Label>
      <Input
        className="min-w-[313px] max-w-[313px]"
        placeholder="Insira o nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={hasError}
      ></Input>
    </div>
  );
};

export default NameInput;
