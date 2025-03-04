import { Button } from "@/components/ui/button";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import { Pencil } from "lucide-react";
import { useCallback } from "react";

const EditEnderecoButton: React.FC<{ endereco: EnderecoType }> = ({
  endereco,
}) => {
  const { fillForm } = useEnderecoResidencialContext();

  const handleButtonClick = useCallback(() => {
    fillForm(endereco);
  }, [endereco, fillForm]);

  return (
    <div>
      <Button
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

export default EditEnderecoButton;
