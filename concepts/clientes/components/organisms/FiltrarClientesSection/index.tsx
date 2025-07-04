import Section from "@/components/ui/section";
import Image from "next/image";
import ClienteDataTable from "../ClienteDataTable";
const FiltrarClientesSection: React.FC = () => {
  return (
    <div className="p-6">
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
        <ClienteDataTable />
      </Section>
    </div>
  );
};

export default FiltrarClientesSection;
