import Section from "@/components/ui/section";
import Image from "next/image";
import { useMemo } from "react";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";
import CartoesDeCreditoEmpty from "../../atoms/CartoesDeCreditoEmpty";
import FirstLine from "../../molecules/FirstLine";
import CreditoDataTable from "../CartaoCreditoDataTable";

const CreditCardSection: React.FC = () => {
  const { cartoesCredito } = useCartaoCreditoContext();

  const hasCartoesAdicionados = useMemo(() => {
    if (cartoesCredito.length == 0) {
      return false;
    }
    return true;
  }, [cartoesCredito]);

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
      <FirstLine />
      {hasCartoesAdicionados ? <CreditoDataTable /> : <CartoesDeCreditoEmpty />}
    </Section>
  );
};

export default CreditCardSection;
