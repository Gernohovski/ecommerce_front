import { Button } from "@/components/ui/button";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useMemo } from "react";

const SalvarEdicaoCartaoCreditoButton: React.FC = () => {
  const { isCadastrando, isEditando } = useCartaoCreditoContext();
  const buttonTitle = useMemo(() => {
    if (isCadastrando) return "Cadastrar";
    if (isEditando) return "Salvar";
  }, [isCadastrando, isEditando]);

  return (
    <div>
      <Button className="min-w-[98px] max-w-[98px]" asChild>
        <div>
          <span>{buttonTitle}</span>
        </div>
      </Button>
    </div>
  );
};

export default SalvarEdicaoCartaoCreditoButton;
