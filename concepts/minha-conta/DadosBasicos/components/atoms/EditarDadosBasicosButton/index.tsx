import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";

const EditarDadosBasicosButton: React.FC = () => {
  const { setIsEditando } = useDadosBasicosContext();
  return (
    <Button
      id="my-account-edit-basic-data-button"
      className="min-w-[100px] max-w-[100px]"
      onClick={() => setIsEditando(true)}
    >
      Editar
    </Button>
  );
};

export default EditarDadosBasicosButton;
