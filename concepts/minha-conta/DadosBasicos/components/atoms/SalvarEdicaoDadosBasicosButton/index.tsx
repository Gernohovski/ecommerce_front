import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";

const SalvarEdicaoDadosBasicosButton: React.FC = () => {
  const { setIsEditando } = useDadosBasicosContext();
  return (
    <Button
      className="min-w-[100px] max-w-[100px]"
      onClick={() => setIsEditando(false)}
    >
      Editar
    </Button>
  );
};

export default SalvarEdicaoDadosBasicosButton;
