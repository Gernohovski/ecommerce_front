import Section from "@/components/ui/section";
import { useCadastrarClienteContext } from "@/concepts/cadastro/CadastrarCliente/contexts/CadastrarClienteContext";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";

const CreditCardSection: React.FC = () => {
  const { errors } = useCadastrarClienteContext();
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
      title="Cartão de crédito"
      subtitle="Preencha os dados do seu cartão de crédito"
    >
      <FirstLine errors={errors} />
    </Section>
  );
};

export default CreditCardSection;
