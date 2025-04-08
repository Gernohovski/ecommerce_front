import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import FirstLine from "@/concepts/cadastro/CartaoCredito/components/molecules/FirstLine";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import useCadastrarCartaoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useCadastrarCartaoCliente";
import errorMessage, { APIError } from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";

interface AdicionarCartaoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdicionarCartaoModal: React.FC<AdicionarCartaoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { mutate } = useCadastrarCartaoCliente();
  const queryClient = useQueryClient();
  const { clienteId } = useSessionContext();
  const { cardFlag, cardNumber, cardPrintedName, cardSecurityCode, clearForm } =
    useCartaoCreditoContext();

  const objectToSave = useMemo(() => {
    return {
      numero: cardNumber,
      nomeImpresso: cardPrintedName,
      bandeiraId: Number(cardFlag),
      codigoSeguranca: cardSecurityCode,
      clienteId: String(clienteId) ?? "",
    };
  }, [cardFlag, cardNumber, cardPrintedName, cardSecurityCode, clienteId]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(objectToSave, {
        onSuccess: () => {
          toast.success("Cartão cadastrado com sucesso!");
          clearForm();
          onClose();
          queryClient.invalidateQueries({ queryKey: ["getCliente"] });
        },
        onError: (error: APIError) => {
          errorMessage(error);
        },
      });
    },
    [mutate, objectToSave, queryClient, clearForm, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 top-[75px]">
      <div className="relative w-auto h-auto bg-white rounded-[20px] shadow-lg">
        <Section
          icon={
            <Image
              src="/icons/credit-card.svg"
              alt="Bookly"
              width={30}
              height={30}
            />
          }
          title="Cartão de crédito"
          subtitle="Preencha os dados do seu cartão de crédito"
          closeButton={
            <div
              className="cursor-pointer"
              onClick={() => {
                onClose();
                clearForm();
              }}
            >
              <Image
                src="/icons/close.svg"
                alt="fechar"
                width={24}
                height={24}
              />
            </div>
          }
        >
          <FirstLine />
        </Section>
        <div className="pr-6 pb-6 flex justify-end">
          <Button onClick={handleButtonClick}>
            Cadastrar cartão de crédito
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AdicionarCartaoModal;
