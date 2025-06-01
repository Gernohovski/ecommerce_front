import Section from "@/components/ui/section";
import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import { usePedidosFiltrosContext } from "@/concepts/meus-pedidos/contexts/PedidosFiltrosContext";
import { useFetchPedidos } from "@/concepts/meus-pedidos/hooks/useFetchPedidos";
import Image from "next/image";
import { useEffect } from "react";
import PedidosDataTable from "../../molecules/PedidosDataTable";

const ViewPedidoSection: React.FC = () => {
  const { setFiltros } = usePedidosFiltrosContext();
  const { clienteId } = useSessionContext();

  useEffect(() => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      clienteId: String(clienteId ?? localStorage.getItem("cliente")),
    }));
  }, [setFiltros, clienteId]);

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
        title="Meus pedidos"
        subtitle="Visualize os pedidos efetuados"
      >
        <PedidosDataTable pedidos={pedidos} />
      </Section>
    </div>
  );
};

export default ViewPedidoSection;
