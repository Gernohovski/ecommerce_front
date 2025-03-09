import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useQueryClient } from "@tanstack/react-query";

const CancelarEdicaoDadosBasicosButton: React.FC = () => {
  const queryClient = useQueryClient();
  const { setIsEditando } = useDadosBasicosContext();

  return (
    <Button
      variant={"outline"}
      className="min-w-[100px] max-w-[100px]"
      onClick={() => {
        setIsEditando(false);
        queryClient.invalidateQueries({ queryKey: ["getCliente"] });
      }}
    >
      Cancelar
    </Button>
  );
};

export default CancelarEdicaoDadosBasicosButton;
