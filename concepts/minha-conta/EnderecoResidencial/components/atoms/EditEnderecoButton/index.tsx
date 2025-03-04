import { Button } from "@/components/ui/button";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import { Pencil } from "lucide-react";
import { useCallback } from "react";

type Props = {
  endereco: EnderecoType;
  fillForm: (data: EnderecoType) => void;
};

const EditEnderecoButton: React.FC<Props> = ({ endereco, fillForm }) => {
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
