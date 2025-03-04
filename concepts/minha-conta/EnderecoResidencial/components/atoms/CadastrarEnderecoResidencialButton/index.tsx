import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useCallback } from "react";

type Props = {
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
};

const CadastrarEnderecoResidencialButton: React.FC<Props> = ({
  setIsCadastrando,
}) => {
  const handleButtonClick = useCallback(() => {
    setIsCadastrando(true);
  }, [setIsCadastrando]);

  return (
    <Button className="min-w-[220px] max-w-[220px]" onClick={handleButtonClick}>
      Cadastrar novo endereço
    </Button>
  );
};

export default CadastrarEnderecoResidencialButton;
