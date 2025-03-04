import { Button } from "@/components/ui/button";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useCallback } from "react";

const CancelarEdicaoCartaoButton: React.FC = () => {
  const { setIsCadastrando, setIsEditando, clearForm } =
    useCartaoCreditoContext();
  const handleButtonClick = useCallback(() => {
    setIsCadastrando(false);
    setIsEditando(false);
    clearForm();
  }, [setIsCadastrando, setIsEditando, clearForm]);

  return (
    <div>
      <Button
        className="min-w-[98px] max-w-[98px]"
        variant={"outline"}
        asChild
        onClick={handleButtonClick}
      >
        <div>
          <span>Cancelar</span>
        </div>
      </Button>
    </div>
  );
};

export default CancelarEdicaoCartaoButton;
