import Section from "@/components/ui/section";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";

const CreditCardSection: React.FC = () => {
  return (
    <Section
      icon={
        <Image
          src="/icons/credit-card.svg"
          alt="Bookly"
          width={30}
          height={30}
        />
      }
      title="Cartões de crédito"
      subtitle="Preencha os dados do seu cartão de crédito"
    >
      <FirstLine></FirstLine>
    </Section>
  );
};

export default CreditCardSection;
