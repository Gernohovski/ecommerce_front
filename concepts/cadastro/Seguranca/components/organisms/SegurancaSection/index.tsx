import Section from "@/components/ui/section";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";

const SegurancaSection: React.FC = () => {
  return (
    <Section
      icon={<Image src="/icons/lock.svg" alt="Bookly" width={30} height={30} />}
      title="Segurança"
      subtitle="Preencha suas informações de segurança"
    >
      <FirstLine></FirstLine>
    </Section>
  );
};

export default SegurancaSection;
