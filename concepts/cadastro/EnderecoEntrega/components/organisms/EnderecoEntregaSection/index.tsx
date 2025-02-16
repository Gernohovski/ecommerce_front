import Section from "@/components/ui/section";
import FirstLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FirstLine";
import SecondLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/SecondLine";
import ThirdLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/ThirdLine";
import Image from "next/image";

const EnderecoEntregaSection: React.FC = () => {
  return (
    <Section
      icon={<Image src="/icons/box.svg" alt="Bookly" width={30} height={30} />}
      title="Endereço de entrega"
      subtitle="Preencha os dados do seu endereço de entrega"
    >
      <FirstLine></FirstLine>
      <SecondLine></SecondLine>
      <ThirdLine></ThirdLine>
    </Section>
  );
};

export default EnderecoEntregaSection;
