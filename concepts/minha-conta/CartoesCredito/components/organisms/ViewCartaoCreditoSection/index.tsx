import ViewSection from "@/components/ui/view-section";
import Image from "next/image";
import SalvarEdicaoCartaoCreditoButton from "../../atoms/SalvarEdicaoCartaoCreditoButton";
import FirstLine from "../../molecules/FirstLine";
import CreditoDataTable from "../CartaoCreditoDataTable";

const ViewCartaoCreditoSection: React.FC = () => {
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
        subtitle="Cadastre, visualize e edite os dados do seu cartão de crédito"
      >
        <FirstLine />
        <div className="flex justify-end">
          <SalvarEdicaoCartaoCreditoButton />
        </div>
        <CreditoDataTable />
      </ViewSection>
    </div>
  );
};

export default ViewCartaoCreditoSection;
