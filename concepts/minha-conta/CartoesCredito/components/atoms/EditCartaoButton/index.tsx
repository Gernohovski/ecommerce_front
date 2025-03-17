import { Button } from "@/components/ui/button";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import { Pencil } from "lucide-react";
import { useCallback } from "react";

type Props = {
  cartao: CartaoCreditoType;
};

const EditCartaoButton: React.FC<Props> = ({ cartao }) => {
  const { fillForm } = useCartaoCreditoContext();
  const handleButtonClick = useCallback(() => {
    fillForm(cartao);
  }, [cartao, fillForm]);

  return (
    <div>
      <Button
        id="edit-cartao-button"
        className="min-w-[98px] max-w-[98px]"
        asChild
        onClick={handleButtonClick}
      >
        <div>
          <Pencil size={8} />
          <span>Editar</span>
        </div>
      </Button>
    </div>
  );
};

export default EditCartaoButton;
