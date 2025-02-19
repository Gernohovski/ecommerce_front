import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardSecurityCode: React.FC = () => {
  const { cardSecurityCode, setCardSecurityCode } = useCartaoCreditoContext();
  return (
    <div>
      <Label className="text-sm">Código de segurança *</Label>
      <Input
        className="min-w-[180.5px] max-w-[180.5px]"
        placeholder="Insira o código"
        value={cardSecurityCode}
        onChange={(e) => setCardSecurityCode(e.target.value)}
      ></Input>
    </div>
  );
};

export default CardSecurityCode;
