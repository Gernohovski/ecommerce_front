import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardNumberInput: React.FC = () => {
  const { cardNumber, setCardNumber } = useCartaoCreditoContext();
  return (
    <div>
      <Label className="text-sm">Número do cartão *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o número do cartão"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      ></Input>
    </div>
  );
};

export default CardNumberInput;
