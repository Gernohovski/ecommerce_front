import Section from "@/components/ui/section";
import { useFetchPedidos } from "@/concepts/meus-pedidos/hooks/useFetchPedidos";
import Image from "next/image";
import PedidosAdminDataTable from "../../molecules/PedidosAdminDataTable";

const ViewPedidosAdminSection: React.FC = () => {
  const { data: pedidos } = useFetchPedidos();

  return (
    <div className="p-6">
      <Section
        icon={
          <Image
            src="/icons/purchases.svg"
            alt="Bookly"
            width={30}
            height={30}
          />
        }
        title="Pedidos"
        subtitle="Visualize os pedidos efetuados pelos clientes"
      >
        <PedidosAdminDataTable pedidos={pedidos} />
      </Section>
    </div>
  );
};

export default ViewPedidosAdminSection;
