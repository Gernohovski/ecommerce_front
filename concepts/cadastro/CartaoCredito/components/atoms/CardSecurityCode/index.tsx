import { Input } from "@/components/ui/input";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardSecurityCode: React.FC<{ errors: ValidationResult[] }> = ({
  errors,
}) => {
  const { cardSecurityCode, setCardSecurityCode } = useCartaoCreditoContext();

  const handleCardSecurityCOdeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardSecurityCode(e.target.value.replace(/\D/g, "").slice(0, 4));
  };

  const hasError = useMemo(() => {
    return errors?.some(
      (error) =>
        (error.nomeDoCampo === "cartaoCredito[0].codigoSeguranca" ||
          error.nomeDoCampo === "codigoSeguranca") &&
        !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm">Código de segurança *</Label>
      <Input
        className="min-w-[179px] max-w-[179px]"
        placeholder="Código de segurança"
        value={cardSecurityCode}
        onChange={handleCardSecurityCOdeChange}
        error={hasError}
      ></Input>
    </div>
  );
};

export default CardSecurityCode;
