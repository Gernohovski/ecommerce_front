import { Input } from "@/components/ui/input";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const DDDInput: React.FC<{ errors?: ValidationResult[] }> = ({ errors }) => {
  const { ddd, setDdd } = useDadosBasicosContext();

  const handleDDDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDdd(e.target.value.replace(/\D/g, "").slice(0, 2));
  };

  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "ddd" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">DDD *</Label>
      <Input
        id="create-client-ddd-input"
        className="min-w-[115px] max-w-[115px]"
        placeholder="DDD"
        value={ddd}
        onChange={handleDDDChange}
        error={hasError}
      ></Input>
    </div>
  );
};

export default DDDInput;
