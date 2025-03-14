import { Button } from "@/components/ui/button";
import { EnderecoPayload } from "@/concepts/minha-conta/types";
import useCadastrarEnderecoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useCadastrarEnderecoCliente";
import { useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { toast } from "react-toastify";

type Props = {
  isCadastrando: boolean;
  isEditando: boolean;
  setIsEditando: Dispatch<SetStateAction<boolean>>;
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
  objectToSave: EnderecoPayload;
  clearForm: () => void;
};

const SalvarEnderecoResidencialButton: React.FC<Props> = ({
  isCadastrando,
  isEditando,
  setIsEditando,
  setIsCadastrando,
  objectToSave,
  clearForm,
}) => {
  const { mutate } = useCadastrarEnderecoCliente();
  const queryClient = useQueryClient();

  const buttonTitle = useMemo(() => {
    if (isCadastrando) return "Cadastrar";
    if (isEditando) return "Salvar";
  }, [isCadastrando, isEditando]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(objectToSave, {
        onSuccess: () => {
          toast.success(
            objectToSave.id
              ? "Endereço atualizado com sucesso!"
              : "Endereço cadastrado com sucesso!"
          );
          setIsEditando(false);
          setIsCadastrando(false);
          queryClient.invalidateQueries({ queryKey: ["getCliente"] });
          clearForm();
        },
        onError: () => {
          toast.error(
            objectToSave.id
              ? "Erro ao atualizar o endereço."
              : "Erro ao cadastrar o endereço."
          );
        },
      });
    },
    [
      mutate,
      objectToSave,
      queryClient,
      setIsCadastrando,
      setIsEditando,
      clearForm,
    ]
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
