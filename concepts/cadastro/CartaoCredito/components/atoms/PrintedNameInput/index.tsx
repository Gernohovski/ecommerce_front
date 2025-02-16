import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const PrintedNameInput: React.FC = () => {
  const { cardPrintedName, setCardPrintedName } = useCartaoCreditoContext();
  return (
    <div>
      <Label className="text-sm">Nome impresso no cartão *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o nome impresso"
        value={cardPrintedName}
        onChange={(e) => setCardPrintedName(e.target.value)}
      ></Input>
    </div>
  );
};

export default PrintedNameInput;
