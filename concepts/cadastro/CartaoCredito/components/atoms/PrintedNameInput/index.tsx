import { Input } from "@/components/ui/input";
import { useCadastrarClienteContext } from "@/concepts/cadastro/CadastrarCliente/contexts/CadastrarClienteContext";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const PrintedNameInput: React.FC = () => {
  const { errors } = useCadastrarClienteContext();
  const { cardPrintedName, setCardPrintedName } = useCartaoCreditoContext();
  const hasError = useMemo(() => {
    return errors?.some(
      (error) =>
        error.nomeDoCampo === "cartaoCredito[0].nomeImpresso" && !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label className="text-sm">Nome impresso no cartão *</Label>
      <Input
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
