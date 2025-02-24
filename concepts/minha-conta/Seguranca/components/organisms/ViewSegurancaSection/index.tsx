import ViewSection from "@/components/ui/view-section";
import Image from "next/image";
import EditarSegurancaButton from "../../atoms/EditarSegurancaButton";
import FirstLine from "../../molecules/FirstLine";

const ViewSegurancaSection: React.FC = () => {
  return (
    <ViewSection
      icon={<Image src="/icons/lock.svg" alt="Bookly" width={30} height={30} />}
      title="Segurança"
      subtitle="Edite suas informações de segurança"
      footer={<EditarSegurancaButton />}
    >
      <FirstLine></FirstLine>
    </ViewSection>
  );
};

export default ViewSegurancaSection;
