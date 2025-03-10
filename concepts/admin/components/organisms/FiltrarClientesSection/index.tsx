import Section from "@/components/ui/section";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";
import ClienteDataTable from "../ClienteDataTable";
const FiltrarClientesSection: React.FC = () => {
  return (
    <Section
      icon={
        <Image
          src="/icons/purple-search.svg"
          alt="Bookly"
          width={30}
          height={30}
        />
      }
      title="Clientes cadastrados"
      subtitle="Visualize os clientes cadastrados"
    >
      <FirstLine />
      <ClienteDataTable />
    </Section>
  );
};

export default FiltrarClientesSection;
