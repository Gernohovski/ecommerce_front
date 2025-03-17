import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InfoList, { InfoItem } from "@/components/ui/info-list";
import { Switch } from "@/components/ui/switch";
import ViewSection from "@/components/ui/view-section";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import useTornarEnderecoPrincipal from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useTornarEnderecoPrincpal";
import errorMessage, { APIError } from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback } from "react";
import { toast } from "react-toastify";
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
  const { mutate } = useTornarEnderecoPrincipal();
  const queryClient = useQueryClient();

  const handleButtonClick = useCallback(
    (endereco: EnderecoType) => {
      mutate(
        {
          id: Number(endereco.id),
          clienteId: Number(localStorage.getItem("cliente")),
          tipoEndereco: tipoEndereco,
        },
        {
          onSuccess: () => {
            toast.success("Endereço definido como principal!");
            queryClient.invalidateQueries({ queryKey: ["getCliente"] });
          },
          onError: (error) => {
            errorMessage(error as APIError);
          },
        }
      );
    },
    [mutate, queryClient, tipoEndereco]
  );

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
                <div className="flex items-center justify-between">
                  <AccordionTrigger
                    id={`endereco-accordion-${index}`}
                  >{`${endereco.shortPhrase}: ${endereco.logradouro}, ${endereco.number}`}</AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <span>Principal:</span>
                    <Switch
                      id={`switch-endereco-principal-${index}`}
                      checked={endereco.principal}
                      onCheckedChange={() => {
                        handleButtonClick(endereco);
                      }}
                      disabled={endereco.principal}
                    />
                  </div>
                </div>

                <AccordionContent>
                  <div className="flex flex-col gap-6">
                    <InfoList data={enderecoData} columns={3} />
                    <div className="flex justify-end">
                      <ActionButtons
                        endereco={endereco}
                        fillForm={fillForm}
                        tipoEndereco={tipoEndereco}
                        isPrincipal={endereco.principal}
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
