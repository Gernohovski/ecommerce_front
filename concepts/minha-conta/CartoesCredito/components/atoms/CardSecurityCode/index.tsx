import { Input } from "@/components/ui/input";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { Label } from "@radix-ui/react-label";

const CardSecurityCode: React.FC = () => {
  const { cardSecurityCode, setCardSecurityCode } = useCartaoCreditoContext();
  return (
    <div>
      <Label className="text-sm">Código de segurança *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o código de segurança"
        value={cardSecurityCode}
        onChange={(e) => setCardSecurityCode(e.target.value)}
      ></Input>
    </div>
  );
};

export default CardSecurityCode;
