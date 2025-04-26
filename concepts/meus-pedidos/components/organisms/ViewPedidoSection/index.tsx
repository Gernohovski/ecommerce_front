import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import { usePedidosFiltrosContext } from "@/concepts/meus-pedidos/contexts/PedidosFiltrosContext";
import { useFetchPedidos } from "@/concepts/meus-pedidos/hooks/useFetchPedidos";
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
    <div className="m-6 p-6 rounded-[20px] flex flex-col gap-6 bg-white shadow-md">
      <span className="text-primary text-2xl">Meus pedidos</span>
      <PedidosDataTable pedidos={pedidos} />
    </div>
  );
};

export default ViewPedidoSection;
