import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InfoList, { InfoItem } from "@/components/ui/info-list";
import ViewSection from "@/components/ui/view-section";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import Image from "next/image";
import CadastrarCartaoButton from "../../atoms/CadastrarCartaoButton";
import ActionButtons from "../../molecules/ActionButtons";

const ViewCartoesAccordion: React.FC = () => {
  const { cartoesCredito } = useCartaoCreditoContext();
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
                <AccordionTrigger>{`${cartao.printedName}, ${cartao.flag}, ${cartao.cardNumber}`}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-6">
                    <InfoList data={cartaoData} columns={3} />
                    <div className="flex justify-end">
                      <ActionButtons cartao={cartao} />
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
