import Section from "@/components/ui/section";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";
import SecondLine from "../../molecules/SecondLine";

const DadosBasicosSection: React.FC = () => {
  return (
    <Section
      icon={
        <Image src="/icons/document.svg" alt="Bookly" width={30} height={30} />
      }
      title="Dados básicos"
      subtitle="Preencha seus dados básicos"
    >
      <FirstLine></FirstLine>
      <SecondLine></SecondLine>
    </Section>
  );
};

export default DadosBasicosSection;
