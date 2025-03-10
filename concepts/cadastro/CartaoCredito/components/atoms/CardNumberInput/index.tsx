import { Input } from "@/components/ui/input";
import { maskCreditCard } from "@/utils/format-credit-card";
import { Label } from "@radix-ui/react-label";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardNumberInput: React.FC = () => {
  const { cardNumber, setCardNumber } = useCartaoCreditoContext();
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(maskCreditCard(e.target.value));
  };
  return (
    <div>
      <Label className="text-sm">Número do cartão *</Label>
      <Input
        className="min-w-[315.75px] max-w-[315.75px]"
        placeholder="Insira o número do cartão"
        value={cardNumber}
        onChange={handleCardNumberChange}
      ></Input>
    </div>
  );
};

export default CardNumberInput;
