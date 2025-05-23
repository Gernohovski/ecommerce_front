import Section from "@/components/ui/section";
import { useCadastrarClienteContext } from "@/concepts/cadastro/CadastrarCliente/contexts/CadastrarClienteContext";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";
import SecondLine from "../../molecules/SecondLine";

const DadosBasicosSection: React.FC = () => {
  const { errors } = useCadastrarClienteContext();
  return (
    <Section
      icon={
        <Image src="/icons/document.svg" alt="Bookly" width={30} height={30} />
      }
      title="Dados básicos"
      subtitle="Preencha seus dados básicos"
    >
      <FirstLine errors={errors} />
      <SecondLine errors={errors} />
    </Section>
  );
};

export default DadosBasicosSection;
