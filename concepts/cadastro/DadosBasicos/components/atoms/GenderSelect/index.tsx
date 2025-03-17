import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ValidationResult } from "@/utils/validate-schema";
import { useMemo } from "react";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";
import { useFetchListarGeneros } from "../../../hooks/useFetchListarGeneros";

const GenderSelect: React.FC<{ errors?: ValidationResult[] }> = ({
  errors,
}) => {
  const { data } = useFetchListarGeneros();
  const { setGender, gender } = useDadosBasicosContext();
  const handleChange = (value: string) => {
    setGender(value);
  };
  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "nome" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">Gênero *</Label>
      <Select onValueChange={handleChange} value={gender}>
        <SelectTrigger
          id="create-cliente-gender-select"
          className="min-w-[200px] max-w-[200px] data-[placeholder]:text-[#71717A]"
          error={hasError}
          value={gender}
        >
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent>
          {data?.map((genero) => (
            <SelectItem key={String(genero.id)} value={String(genero.id)}>
              {genero.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default GenderSelect;
