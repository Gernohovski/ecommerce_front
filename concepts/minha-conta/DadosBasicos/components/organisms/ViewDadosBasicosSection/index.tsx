import ViewSection from "@/components/ui/view-section";
import Image from "next/image";
import EditarDadosBasicosButton from "../../atoms/EditarDadosBasicosButton";
import FirstLine from "../../molecules/FirstLine";
import SecondLine from "../../molecules/SecondLine";

const ViewDadosBasicosSection: React.FC = () => {
  return (
    <ViewSection
      icon={
        <Image src="/icons/document.svg" alt="Bookly" width={30} height={30} />
      }
      title="Dados básicos"
      subtitle="Visualize e edite seus dados básicos"
      footer={<EditarDadosBasicosButton />}
    >
      <FirstLine></FirstLine>
      <SecondLine></SecondLine>
    </ViewSection>
  );
};

export default ViewDadosBasicosSection;
