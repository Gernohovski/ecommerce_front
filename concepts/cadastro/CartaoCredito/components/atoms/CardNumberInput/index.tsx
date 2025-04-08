import { Input } from "@/components/ui/input";
import { maskCreditCard } from "@/utils/format-credit-card";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardNumberInput: React.FC<{ errors?: ValidationResult[] }> = ({
  errors,
}) => {
  const { cardNumber, setCardNumber } = useCartaoCreditoContext();
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(maskCreditCard(e.target.value));
  };
  const hasError = useMemo(() => {
    return errors?.some(
      (error) =>
        (error.nomeDoCampo === "cartaoCredito[0].numero" ||
          error.nomeDoCampo === "numero") &&
        !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label className="text-sm">Número do cartão *</Label>
      <Input
        id="create-client-cardName-input"
        className="min-w-[315.75px] max-w-[315.75px]"
        placeholder="Insira o número do cartão"
        value={cardNumber}
        error={hasError}
        onChange={handleCardNumberChange}
      ></Input>
    </div>
  );
};

export default CardNumberInput;
