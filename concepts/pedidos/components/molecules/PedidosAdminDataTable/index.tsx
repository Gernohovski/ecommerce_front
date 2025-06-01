import { DataTable } from "@/components/ui/data-table";
import {
  CustomPagePedidoResponse,
  PedidoResponse,
} from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import SituacaoBadge from "@/concepts/meus-pedidos/components/atoms/SituacaoBadge";
import { usePedidosFiltrosContext } from "@/concepts/meus-pedidos/contexts/PedidosFiltrosContext";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ViewPedidoAdminButton from "../../atoms/ViewPedidoAdminButton";

type PedidosAdminDataTableProps = {
  pedidos?: CustomPagePedidoResponse;
};

const PedidosAdminDataTable: React.FC<PedidosAdminDataTableProps> = ({
  pedidos,
}) => {
  const { page, setPage, size: pageSize } = usePedidosFiltrosContext();
  const pedidosValido: PedidoResponse[] = pedidos?.content
    ? pedidos.content.sort((a, b) => {
        return b.id - a.id;
      })
    : [];
  const totalPages = Math.ceil(
    (pedidos?.count ?? pedidosValido.length) / pageSize
  );

  const columns: ColumnDef<PedidoResponse>[] = [
    {
      accessorKey: "id",
      header: "Identificação do pedido",
      size: 30,
      cell: ({ row }) => {
        const pedido = row.original;
        return (
          <div className="text-center">
            <span>{`Nº ${pedido.id}`}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "endereco",
      header: "Endereço de entrega",
      cell: ({ row }) => {
        const pedido = row.original;
        const endereco = pedido.endereco;
        return (
          <div>
            <span>{`${endereco.logradouro}, ${endereco.numero} . ${endereco.bairro.nome}, ${endereco.bairro.cidade.nome} - ${endereco.bairro.cidade.estado.nome}`}</span>
          </div>
        );
      },
      size: 350,
    },
    {
      accessorKey: "dataPedido",
      header: "Data do pedido",
      cell: ({ row }) => {
        const pedido = row.original;
        return (
          <div className="text-center">{formatDate(pedido.dataPedido)}</div>
        );
      },
      size: 50,
    },
    {
      accessorKey: "valorPedido",
      header: "Valor",
      size: 50,
      cell: ({ row }) => {
        const pedido = row.original;
        return (
          <div className="text-center">
            {formatCurrency(pedido.valorPedido)}
          </div>
        );
      },
    },
    {
      accessorKey: "situacaoPedido",
      header: "Situação",
      size: 130,
      cell: ({ row }) => {
        const pedido = row.original;
        return (
          <div>
            <SituacaoBadge situacaoNome={pedido.situacaoPedido.nome} />
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Ações",
      size: 30,
      cell: ({ row }) => {
        const pedido = row.original;
        return (
          <div className="flex items-center justify-center">
            <ViewPedidoAdminButton pedido={pedido} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full space-y-4">
      <DataTable
        columns={columns}
        data={pedidosValido}
        emptyText="Nenhum pedido realizado."
      />
      <div className="flex gap-2 justify-center">
        <button
          className="flex items-center gap-1 text-sm"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          <ChevronLeft size={20} />
          Anterior
        </button>
        <div className="text-sm flex items-center px-4">
          Página {page + 1} de {totalPages}
        </div>
        <button
          className="flex items-center gap-1 text-sm"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages - 1}
        >
          Próximo
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PedidosAdminDataTable;
