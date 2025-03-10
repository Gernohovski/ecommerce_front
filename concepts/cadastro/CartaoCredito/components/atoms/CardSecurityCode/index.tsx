import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardSecurityCode: React.FC = () => {
  const { cardSecurityCode, setCardSecurityCode } = useCartaoCreditoContext();

  const handleCardSecurityCOdeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardSecurityCode(e.target.value.replace(/\D/g, "").slice(0, 4));
  };

  return (
    <div>
      <Label className="text-sm">Código de segurança *</Label>
      <Input
        className="min-w-[179px] max-w-[179px]"
        placeholder="Código de segurança"
        value={cardSecurityCode}
        onChange={handleCardSecurityCOdeChange}
      ></Input>
    </div>
  );
};

export default CardSecurityCode;
