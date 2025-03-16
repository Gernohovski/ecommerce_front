import ViewSection from "@/components/ui/view-section";
import FirstLine from "@/concepts/cadastro/CartaoCredito/components/molecules/FirstLine";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import Image from "next/image";
import FormFooter from "../../molecules/FormFooter";

const FormCartaoCreditoSection: React.FC = () => {
  const { errors } = useCartaoCreditoContext();
  return (
    <div>
      <ViewSection
        icon={
          <Image
            src="/icons/credit-card.svg"
            alt="Bookly"
            width={30}
            height={30}
          />
        }
        title="Cartão de crédito"
        subtitle="Edite os dados do seu cartão de crédito"
        footer={<FormFooter />}
      >
        <FirstLine errors={errors} />
      </ViewSection>
    </div>
  );
};

export default FormCartaoCreditoSection;
