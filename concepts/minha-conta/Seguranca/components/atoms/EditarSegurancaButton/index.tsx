import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import useEditarSenhaCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useEditarSenhaCliente";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

const EditarSegurancaButton: React.FC = () => {
  const { currentPassword, password, id } = useDadosBasicosContext();
  const { mutate } = useEditarSenhaCliente();

  const objectToSave = useMemo(() => {
    return {
      senhaAtual: currentPassword,
      senha: password,
    };
  }, [currentPassword, password]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(
        { id: String(id) ?? "", novaSenha: objectToSave },
        {
          onSuccess: () => {
            toast.success("Cliente criado com sucesso!");
          },
          onError: () => {
            toast.error("Erro ao salvar cliente");
          },
        }
      );
    },
    [mutate, objectToSave, id]
  );

  return (
    <Button className="min-w-[100px] max-w-[100px]" onClick={handleButtonClick}>
      Editar
    </Button>
  );
};

export default EditarSegurancaButton;
