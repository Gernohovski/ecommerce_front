import ViewSection from "@/components/ui/view-section";
import FirstLine from "@/concepts/cadastro/DadosBasicos/components/molecules/FirstLine";
import SecondLine from "@/concepts/cadastro/DadosBasicos/components/molecules/SecondLine";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import Image from "next/image";
import FormDadosBasicosFooter from "../../molecules/FormDadosBasicosFooter";

const FormDadosBasicosSection: React.FC = () => {
  const { errors } = useDadosBasicosContext();
  return (
    <ViewSection
      icon={
        <Image src="/icons/document.svg" alt="Bookly" width={30} height={30} />
      }
      title="Dados básicos"
      subtitle="Edite seus dados básicos"
      footer={<FormDadosBasicosFooter />}
    >
      <FirstLine errors={errors}></FirstLine>
      <SecondLine errors={errors}></SecondLine>
    </ViewSection>
  );
};

export default FormDadosBasicosSection;
