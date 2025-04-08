import { Input } from "@/components/ui/input";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const PrintedNameInput: React.FC<{ errors?: ValidationResult[] }> = ({
  errors,
}) => {
  const { cardPrintedName, setCardPrintedName } = useCartaoCreditoContext();
  const hasError = useMemo(() => {
    return errors?.some(
      (error) =>
        (error.nomeDoCampo === "cartaoCredito[0].nomeImpresso" ||
          error.nomeDoCampo === "nomeImpresso") &&
        !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label className="text-sm">Nome impresso no cartão *</Label>
      <Input
        id="create-client-printedName-input"
        className="min-w-[315.75px] max-w-[315.75px]"
        placeholder="Insira o nome impresso"
        value={cardPrintedName}
        onChange={(e) => setCardPrintedName(e.target.value)}
        error={hasError}
      ></Input>
    </div>
  );
};

export default PrintedNameInput;
