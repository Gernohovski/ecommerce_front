import { Button } from "@/components/ui/button";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { useMemo } from "react";

const SalvarEnderecoResidencialButton: React.FC = () => {
  const { isCadastrando, isEditando } = useEnderecoResidencialContext();

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

export default SalvarEnderecoResidencialButton;
