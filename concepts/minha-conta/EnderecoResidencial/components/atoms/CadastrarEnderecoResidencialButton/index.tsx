import { Button } from "@/components/ui/button";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { useCallback } from "react";

const CadastrarEnderecoResidencialButton: React.FC = () => {
  const { setIsCadastrando } = useEnderecoResidencialContext();

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
