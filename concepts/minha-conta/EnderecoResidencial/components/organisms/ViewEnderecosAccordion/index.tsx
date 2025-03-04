import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InfoList, { InfoItem } from "@/components/ui/info-list";
import ViewSection from "@/components/ui/view-section";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import Image from "next/image";
import CadastrarEnderecoResidencialButton from "../../atoms/CadastrarEnderecoResidencialButton";
import ActionButtons from "../../molecules/ActionButtons";

const ViewEnderecosAccordion: React.FC<{ enderecos: EnderecoType[] }> = ({
  enderecos,
}) => {
  return (
    <ViewSection
      icon={<Image src="/icons/home.svg" alt="Bookly" width={30} height={30} />}
      title="Endereço residencial"
      subtitle="Cadastre, visualize e edite os dados do seu endereço residencial"
      footer={<CadastrarEnderecoResidencialButton />}
    >
      <div className="flex flex-col gap-6">
        {enderecos.map((endereco, index) => {
          const enderecoData: InfoItem[] = [
            { label: "CEP", value: endereco.cep },
            {
              label: "País",
              value: endereco.country,
            },
            { label: "Estado", value: endereco.state },
            { label: "Cidade", value: endereco.city },
            { label: "Bairro", value: endereco.neighborhood },
            {
              label: "Logradouro",
              value: endereco.logradouro,
            },
            {
              label: "Número",
              value: endereco.number,
            },
            {
              label: "Tipo do logradouro",
              value: endereco.tipoLogradouro,
            },
            {
              label: "Tipo da residência",
              value: endereco.residenceType,
            },
            {
              label: "Observações",
              value: endereco.observations,
            },
          ];
          return (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{`${endereco.shortPhrase}: ${endereco.logradouro}, ${endereco.number}`}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-6">
                    <InfoList data={enderecoData} columns={3} />
                    <div className="flex justify-end">
                      <ActionButtons endereco={endereco} />
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

export default ViewEnderecosAccordion;
