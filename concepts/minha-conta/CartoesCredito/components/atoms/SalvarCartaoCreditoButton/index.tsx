import { Button } from "@/components/ui/button";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import useCadastrarCartaoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useCadastrarCartaoCliente";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

const SalvarEdicaoCartaoCreditoButton: React.FC = () => {
  const { id: clienteId } = useDadosBasicosContext();
  const {
    id,
    isCadastrando,
    isEditando,
    cardFlag,
    cardNumber,
    cardPrintedName,
    cardSecurityCode,
    setIsCadastrando,
    setIsEditando,
    clearForm,
  } = useCartaoCreditoContext();

  const { mutate } = useCadastrarCartaoCliente();
  const queryClient = useQueryClient();

  const objectToSave = useMemo(() => {
    return {
      id: id,
      numero: cardNumber,
      nomeImpresso: cardPrintedName,
      bandeiraId: Number(cardFlag),
      codigoSeguranca: cardSecurityCode,
      clienteId: String(clienteId) ?? "",
    };
  }, [cardFlag, cardNumber, cardPrintedName, cardSecurityCode, clienteId, id]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(objectToSave, {
        onSuccess: () => {
          toast.success(
            id
              ? "Cartão atualizado com sucesso!"
              : "Cartão cadastrado com sucesso!"
          );
          setIsCadastrando(false);
          setIsEditando(false);
          clearForm();
          queryClient.invalidateQueries({ queryKey: ["getCliente"] });
        },
        onError: () => {
          toast.error(
            id ? "Erro ao atualizar o cartão." : "Erro ao atualizar o cartão."
          );
        },
      });
    },
    [
      mutate,
      objectToSave,
      queryClient,
      id,
      setIsCadastrando,
      setIsEditando,
      clearForm,
    ]
  );

  const buttonTitle = useMemo(() => {
    if (isCadastrando) return "Cadastrar";
    if (isEditando) return "Salvar";
  }, [isCadastrando, isEditando]);

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

export default SalvarEdicaoCartaoCreditoButton;
