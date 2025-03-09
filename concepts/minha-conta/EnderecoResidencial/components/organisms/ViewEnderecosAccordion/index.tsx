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
import { Dispatch, SetStateAction } from "react";
import CadastrarEnderecoResidencialButton from "../../atoms/CadastrarEnderecoResidencialButton";
import ActionButtons from "../../molecules/ActionButtons";

type Props = {
  enderecos: EnderecoType[];
  icon: string;
  title: string;
  subtitle: string;
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
  fillForm: (data: EnderecoType) => void;
  tipoEndereco: string;
};

const ViewEnderecosAccordion: React.FC<Props> = ({
  enderecos,
  icon,
  title,
  subtitle,
  setIsCadastrando,
  fillForm,
  tipoEndereco,
}) => {
  return (
    <ViewSection
      icon={<Image src={icon} alt="Bookly" width={30} height={30} />}
      title={title}
      subtitle={subtitle}
      footer={
        <CadastrarEnderecoResidencialButton
          setIsCadastrando={setIsCadastrando}
        />
      }
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
                      <ActionButtons
                        endereco={endereco}
                        fillForm={fillForm}
                        tipoEndereco={tipoEndereco}
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

export default ViewEnderecosAccordion;
