import { Input } from "@/components/ui/input";
import { maskPhone } from "@/utils/format-phone";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const TelephoneInput: React.FC<{ errors?: ValidationResult[] }> = ({
  errors,
}) => {
  const { telephone, setTelephone } = useDadosBasicosContext();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(maskPhone(e.target.value));
  };

  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "telefone" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">Telefone *</Label>
      <Input
        id="create-client-telephone-input"
        className="min-w-[174px] max-w-[174px]"
        placeholder="Insira o telefone"
        value={telephone}
        onChange={handlePhoneChange}
        error={hasError}
      ></Input>
    </div>
  );
};

export default TelephoneInput;
