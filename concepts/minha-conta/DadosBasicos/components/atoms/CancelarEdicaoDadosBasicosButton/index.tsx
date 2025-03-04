import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";

const CancelarEdicaoDadosBasicosButton: React.FC = () => {
  const { setIsEditando } = useDadosBasicosContext();
  return (
    <Button
      variant={"outline"}
      className="min-w-[100px] max-w-[100px]"
      onClick={() => setIsEditando(false)}
    >
      Cancelar
    </Button>
  );
};

export default CancelarEdicaoDadosBasicosButton;
