import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useFetchListarTiposTelefone } from "@/concepts/cadastro/DadosBasicos/hooks/useFetchListarTiposTelefone";
import { ValidationResult } from "@/utils/validate-schema";
import { useMemo } from "react";

const TelephoneTypeSelect: React.FC<{ errors?: ValidationResult[] }> = ({
  errors,
}) => {
  const { data } = useFetchListarTiposTelefone();
  const { telephoneType, setTelephoneType } = useDadosBasicosContext();

  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "tipoTelefoneId" && !error.isValid
    );
  }, [errors]);

  const handleChange = (value: string) => {
    setTelephoneType(value);
  };

  return (
    <div>
      <Label className="text-sm">Tipo telefone *</Label>
      <Select onValueChange={handleChange} value={telephoneType}>
        <SelectTrigger
          id="create-client-telephoneType-select"
          className="min-w-[200px] max-w-[200px] data-[placeholder]:text-[#71717A] "
          error={hasError}
          value={telephoneType}
        >
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent>
          {data?.map((tipo) => (
            <SelectItem key={String(tipo.id)} value={String(tipo.id)}>
              {tipo.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TelephoneTypeSelect;
