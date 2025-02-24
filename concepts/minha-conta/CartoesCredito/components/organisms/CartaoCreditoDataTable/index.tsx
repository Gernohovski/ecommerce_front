import { DataTable } from "@/components/ui/data-table";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import { ColumnDef } from "@tanstack/react-table";
import ActionButtons from "../../molecules/ActionButtons";

const CreditoDataTable: React.FC = () => {
  const { cartoesCredito } = useCartaoCreditoContext();
  const columns: ColumnDef<CartaoCreditoType>[] = [
    {
      accessorKey: "printedName",
      header: "Nome impresso",
      size: 300,
    },
    {
      accessorKey: "cardNumber",
      header: "Número",
      size: 320,
    },
    {
      accessorKey: "securityCode",
      header: "Código de segurança",
      size: 150,
    },
    {
      accessorKey: "flag",
      header: "Bandeira",
      size: 120,
    },
    {
      id: "actions",
      header: "Ações",
      size: 80,
      cell: ({ row }) => {
        const cartaoCredito = row.original;
        return (
          <div className="flex items-center justify-center">
            <ActionButtons cartaoCredito={cartaoCredito.id ?? ""} />
          </div>
        );
      },
    },
  ];
  return (
    <div className="container mx-auto">
      <DataTable
        columns={columns}
        data={cartoesCredito}
        emptyText="Nenhum cartão de crédito adicionado."
      />
    </div>
  );
};

export default CreditoDataTable;
