import InfoList, { InfoItem } from "@/components/ui/info-list";
import ViewSection from "@/components/ui/view-section";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useFetchListarGeneros } from "@/concepts/cadastro/DadosBasicos/hooks/useFetchListarGeneros";
import { useFetchListarTiposTelefone } from "@/concepts/cadastro/DadosBasicos/hooks/useFetchListarTiposTelefone";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import EditarDadosBasicosButton from "../../atoms/EditarDadosBasicosButton";

const ViewDadosBasicosSection: React.FC = () => {
  const { name, gender, birthDate, ddd, telephone, telephoneType } =
    useDadosBasicosContext();
  const { data: generos } = useFetchListarGeneros();
  const { data: tiposTelefone } = useFetchListarTiposTelefone();
  const dadosBasicos: InfoItem[] = [
    { label: "Nome", value: name },
    {
      label: "Gênero",
      value:
        generos?.find((genero) => genero.id === Number(gender))?.nome || "",
    },
    { label: "Data de nascimento", value: formatDate(birthDate) ?? "" },
    { label: "DDD", value: ddd },
    { label: "Telefone", value: telephone },
    {
      label: "Tipo do telefone",
      value:
        tiposTelefone?.find(
          (tipoTelefone) => tipoTelefone.id === Number(telephoneType)
        )?.nome || "",
    },
  ];
  return (
    <ViewSection
      icon={
        <Image src="/icons/document.svg" alt="Bookly" width={30} height={30} />
      }
      title="Dados básicos"
      subtitle="Visualize seus dados básicos"
      footer={<EditarDadosBasicosButton />}
    >
      <InfoList data={dadosBasicos} columns={3} />
    </ViewSection>
  );
};

export default ViewDadosBasicosSection;
