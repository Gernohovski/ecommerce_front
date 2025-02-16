import Section from "@/components/ui/section";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";
import SecondLine from "../../molecules/SecondLine";
import ThirdLine from "../../molecules/ThirdLine";

const EnderecoResidencialSection: React.FC = () => {
  return (
    <Section
      icon={
        <Image src="/icons/map-pin.svg" alt="Bookly" width={30} height={30} />
      }
      title="Endereço residencial"
      subtitle="Preencha os dados do seu endereço residencial"
    >
      <FirstLine></FirstLine>
      <SecondLine></SecondLine>
      <ThirdLine></ThirdLine>
    </Section>
  );
};

export default EnderecoResidencialSection;
