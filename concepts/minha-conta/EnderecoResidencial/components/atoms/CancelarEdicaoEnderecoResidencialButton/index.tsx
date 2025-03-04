import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useCallback } from "react";

type Props = {
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
  setIsEditando: Dispatch<SetStateAction<boolean>>;
  clearForm: () => void;
};

const CancelarEdicaoEnderecoResidencialButton: React.FC<Props> = ({
  setIsCadastrando,
  setIsEditando,
  clearForm,
}) => {
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
