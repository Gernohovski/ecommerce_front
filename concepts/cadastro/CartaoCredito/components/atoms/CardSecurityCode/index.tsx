import { Input } from "@/components/ui/input";
import { useCadastrarClienteContext } from "@/concepts/cadastro/CadastrarCliente/contexts/CadastrarClienteContext";
import { Label } from "@radix-ui/react-label";
import { useMemo } from "react";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardSecurityCode: React.FC = () => {
  const { errors } = useCadastrarClienteContext();
  const { cardSecurityCode, setCardSecurityCode } = useCartaoCreditoContext();

  const handleCardSecurityCOdeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardSecurityCode(e.target.value.replace(/\D/g, "").slice(0, 4));
  };

  const hasError = useMemo(() => {
    return errors?.some(
      (error) =>
        error.nomeDoCampo === "cartaoCredito[0].codigoSeguranca" &&
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
