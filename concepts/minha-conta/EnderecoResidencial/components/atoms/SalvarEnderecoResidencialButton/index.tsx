import { Button } from "@/components/ui/button";
import { useMemo } from "react";

type Props = {
  isCadastrando: boolean;
  isEditando: boolean;
};

const SalvarEnderecoResidencialButton: React.FC<Props> = ({
  isCadastrando,
  isEditando,
}) => {
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
