import { DataTable } from "@/components/ui/data-table";
import { useListarClienteContext } from "@/concepts/admin/contexts/ListarClienteContext";
import { ClienteResponse } from "@/concepts/cadastro/types";
import { formatDate } from "@/utils/format-date";
import { ColumnDef } from "@tanstack/react-table";

const ClienteDataTable: React.FC = () => {
  const { clientes } = useListarClienteContext();
  const columns: ColumnDef<ClienteResponse>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 50,
    },
    {
      accessorKey: "nome",
      header: "Nome",
      size: 160,
    },
    {
      accessorKey: "cpf",
      header: "CPF",
      size: 160,
    },
    {
      accessorKey: "dataNascimento",
      header: "Data de nascimento",
      size: 150,
      cell: (info) => formatDate(String(info.getValue())),
    },
    {
      accessorKey: "genero.nome",
      header: "Gênero",
      size: 120,
    },
    {
      accessorKey: "email",
      header: "E-mail",
      size: 200,
    },
  ];
  return (
    <div className="container mx-auto py-5">
      {clientes ? (
        <DataTable
          columns={columns}
          data={clientes}
          emptyText="Não foram encontrados clientes para a sua busca."
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ClienteDataTable;
