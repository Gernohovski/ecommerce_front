import { DataTable } from "@/components/ui/data-table";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import ActionButtons from "@/concepts/minha-conta/EnderecoResidencial/components/molecules/ActionButtons";
import { ColumnDef } from "@tanstack/react-table";

const ViewEnderecosDataTable: React.FC = () => {
  const { enderecos } = useEnderecoEntregaContext();
  const columns: ColumnDef<EnderecoType>[] = [
    {
      accessorKey: "cep",
      header: "CEP",
      size: 160,
    },
    {
      accessorKey: "tipoLogradouro",
      header: "Tipo lograouro",
      size: 120,
    },
    {
      accessorKey: "logradouro",
      header: "Logradouro",
      size: 300,
    },
    {
      accessorKey: "residenceType",
      header: "Tipo residência",
      size: 160,
    },
    {
      accessorKey: "number",
      header: "Número",
      size: 150,
    },
    {
      id: "actions",
      header: "Ações",
      size: 80,
      cell: ({ row }) => {
        const endereco = row.original;
        return (
          <div className="flex items-center justify-center">
            <ActionButtons endereco={endereco.id ?? ""} />
          </div>
        );
      },
    },
  ];
  return (
    <div className="container mx-auto">
      <DataTable
        columns={columns}
        data={enderecos}
        emptyText="Nenhum endereço residencial adicionado."
      />
    </div>
  );
};

export default ViewEnderecosDataTable;
