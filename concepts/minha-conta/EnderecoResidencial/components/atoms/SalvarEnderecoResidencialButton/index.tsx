import { Button } from "@/components/ui/button";
import { EnderecoPayload } from "@/concepts/minha-conta/types";
import useCadastrarEnderecoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useCadastrarEnderecoCliente";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

type Props = {
  isCadastrando: boolean;
  isEditando: boolean;
  objectToSave: EnderecoPayload;
};

const SalvarEnderecoResidencialButton: React.FC<Props> = ({
  isCadastrando,
  isEditando,
  objectToSave,
}) => {
  const { mutate } = useCadastrarEnderecoCliente();

  const buttonTitle = useMemo(() => {
    if (isCadastrando) return "Cadastrar";
    if (isEditando) return "Salvar";
  }, [isCadastrando, isEditando]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(objectToSave, {
        onSuccess: () => {
          toast.success("Cliente criado com sucesso!");
        },
        onError: () => {
          toast.error("Erro ao salvar cliente");
        },
      });
    },
    [mutate, objectToSave]
  );

  return (
    <div>
      <Button
        className="min-w-[98px] max-w-[98px]"
        asChild
        onClick={handleButtonClick}
      >
        <div>
          <span>{buttonTitle}</span>
        </div>
      </Button>
    </div>
  );
};

export default SalvarEnderecoResidencialButton;
