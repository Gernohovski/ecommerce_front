import { Input } from "@/components/ui/input";
import { maskCPF } from "@/utils/format-cpf";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const CPFInput: React.FC<{ errors?: ValidationResult[] }> = ({ errors }) => {
  const { cpf, setCpf } = useDadosBasicosContext();

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(maskCPF(e.target.value));
  };

  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "cpf" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">CPF *</Label>
      <Input
        id="create-client-cpf-input"
        className="min-w-[313px] max-w-[313px]"
        placeholder="Insira o CPF"
        value={cpf}
        onChange={handleCPFChange}
        error={hasError}
      ></Input>
    </div>
  );
};

export default CPFInput;
