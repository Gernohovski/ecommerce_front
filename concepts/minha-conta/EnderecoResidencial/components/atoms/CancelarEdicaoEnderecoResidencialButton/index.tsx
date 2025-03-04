import { Button } from "@/components/ui/button";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { Pencil } from "lucide-react";
import { useCallback } from "react";

const EditEnderecoButton: React.FC = () => {
  const { setIsCadastrando, setIsEditando } = useEnderecoResidencialContext();

  const handleButtonClick = useCallback(() => {
    setIsCadastrando(false);
    setIsEditando(false);
  }, [setIsCadastrando, setIsEditando]);

  return (
    <div>
      <Button
        className="min-w-[98px] max-w-[98px]"
        variant={"outline"}
        asChild
        onClick={handleButtonClick}
      >
        <div>
          <Pencil size={8} />
          <span>Cancelar</span>
        </div>
      </Button>
    </div>
  );
};

export default EditEnderecoButton;
