import { Button } from "@/components/ui/button";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { useCallback } from "react";

const CancelarEdicaoEnderecoResidencialButton: React.FC = () => {
  const { setIsCadastrando, setIsEditando, clearForm } =
    useEnderecoResidencialContext();

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

export default CancelarEdicaoEnderecoResidencialButton;
