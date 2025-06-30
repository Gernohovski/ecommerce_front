import Section from "@/components/ui/section";
import { usePedidosFiltrosContext } from "@/concepts/meus-pedidos/contexts/PedidosFiltrosContext";
import { useFetchPedidos } from "@/concepts/meus-pedidos/hooks/useFetchPedidos";
import { useFetchSituacoesPedido } from "@/concepts/pedidos/hooks/useFetchSituacoesPedido";
import Image from "next/image";
import { useCallback } from "react";
import PedidosAdminDataTable from "../../molecules/PedidosAdminDataTable";
import { PedidosAdvancedFilter } from "../../molecules/PedidosAdvancedFilter";

const ViewPedidosAdminSection: React.FC = () => {
  const { data: pedidos } = useFetchPedidos();
  const { data: situacoes } = useFetchSituacoesPedido();
  const { setFiltros } = usePedidosFiltrosContext();

  const handleAdvancedFilterChange = useCallback(
    (situacoesId: string[]) => {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        situacoesId,
      }));
    },
    [setFiltros]
  );

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
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <PedidosAdvancedFilter
              onFilterChange={handleAdvancedFilterChange}
              situacoes={situacoes}
            />
          </div>
        </div>
        <PedidosAdminDataTable pedidos={pedidos} />
      </Section>
    </div>
  );
};

export default ViewPedidosAdminSection;
