import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InfoList, { InfoItem } from "@/components/ui/info-list";
import { Switch } from "@/components/ui/switch";
import ViewSection from "@/components/ui/view-section";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import useTornarCartaoPrincipal from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useTornarCartaoPrincipal";
import errorMessage, { APIError } from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useCallback } from "react";
import { toast } from "react-toastify";
import CadastrarCartaoButton from "../../atoms/CadastrarCartaoButton";
import ActionButtons from "../../molecules/ActionButtons";

const ViewCartoesAccordion: React.FC = () => {
  const { cartoesCredito } = useCartaoCreditoContext();
  const { mutate } = useTornarCartaoPrincipal();
  const queryClient = useQueryClient();

  const handleButtonClick = useCallback(
    (cartao: CartaoCreditoType) => {
      mutate(
        {
          id: Number(cartao.id),
          clienteId: Number(localStorage.getItem("cliente")),
        },
        {
          onSuccess: () => {
            toast.success("Cartão de crédito definido como principal!");
            queryClient.invalidateQueries({ queryKey: ["getCliente"] });
          },
          onError: (error) => {
            errorMessage(error as APIError);
          },
        }
      );
    },
    [mutate, queryClient]
  );

  return (
    <ViewSection
      icon={
        <Image
          src="/icons/credit-card.svg"
          alt="Bookly"
          width={30}
          height={30}
        />
      }
      title="Cartão de crédito"
      subtitle="Edite os dados do seu cartão de crédito"
      footer={<CadastrarCartaoButton />}
    >
      <div className="flex flex-col gap-6">
        {cartoesCredito.map((cartao, index) => {
          const cartaoData: InfoItem[] = [
            {
              label: "Nome impresso",
              value: cartao.printedName,
            },
            { label: "Número do cartão", value: cartao.cardNumber },
            { label: "Bandeira do cartão", value: cartao.flag },
            { label: "Código de segurança", value: cartao.securityCode },
          ];
          return (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <div className="flex items-center justify-between">
                  <AccordionTrigger>{`${cartao.printedName}, ${cartao.flag}, ${cartao.cardNumber}`}</AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <span>Principal:</span>
                    <Switch
                      checked={cartao.principal}
                      onCheckedChange={() => {
                        handleButtonClick(cartao);
                      }}
                      disabled={cartao.principal}
                    />
                  </div>
                </div>
                <AccordionContent>
                  <div className="flex flex-col gap-6">
                    <InfoList data={cartaoData} columns={3} />
                    <div className="flex justify-end">
                      <ActionButtons
                        cartao={cartao}
                        isPrincipal={cartao.principal}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </ViewSection>
  );
};

export default ViewCartoesAccordion;
