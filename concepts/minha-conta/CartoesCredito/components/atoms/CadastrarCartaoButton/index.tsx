import { Button } from "@/components/ui/button";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useCallback } from "react";

const CadastrarCartaoButton: React.FC = () => {
  const { setIsCadastrando } = useCartaoCreditoContext();

  const handleButtonClick = useCallback(() => {
    setIsCadastrando(true);
  }, [setIsCadastrando]);

  return (
    <Button className="min-w-[220px] max-w-[220px]" onClick={handleButtonClick}>
      Cadastrar novo cartão
    </Button>
  );
};

export default CadastrarCartaoButton;
