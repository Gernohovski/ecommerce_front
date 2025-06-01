import { DataTable } from "@/components/ui/data-table";
import { Switch } from "@/components/ui/switch";
import { LivroDetalhado } from "@/concepts/livros/types/types";
import { formatCurrency } from "@/utils/format-currency";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import EditLivroButton from "../EditLivroButton";

type EstoqueDataTableProps = {
  livros?: LivroDetalhado[];
};

const EstoqueDataTable: React.FC<EstoqueDataTableProps> = ({ livros }) => {
  const [page, setPage] = useState<number>(0);
  const pageSize = 5;
  const livrosValido: LivroDetalhado[] = livros ? livros : [];
  const totalPages = Math.ceil(livrosValido.length / pageSize);

  const livrosPaginado = livrosValido.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  const columns: ColumnDef<LivroDetalhado>[] = [
    {
      accessorKey: "id",
      header: "Identificação do livro",
      size: 30,
      cell: ({ row }) => {
        const livro = row.original;
        return (
          <div className="text-center">
            <span>{`Nº ${livro.id}`}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "titulo",
      header: "Título do livro",
      cell: ({ row }) => {
        const livro = row.original;
        return <div>{livro.titulo}</div>;
      },
      size: 300,
    },
    {
      accessorKey: "valorVenda",
      header: "Valor de venda",
      cell: ({ row }) => {
        const livro = row.original;
        return (
          <div className="text-center">{formatCurrency(livro.valorVenda)}</div>
        );
      },
      size: 100,
    },
    {
      accessorKey: "quantidade",
      header: "Quantidade",
      size: 50,
      cell: ({ row }) => {
        const livro = row.original;
        return <div className="text-center">{livro.quantidade}</div>;
      },
    },
    {
      accessorKey: "status",
      header: "Ativo",
      size: 10,
      cell: ({ row }) => {
        const livro = row.original;
        return (
          <div className="flex justify-center">
            <Switch checked={livro.ativo} />
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Ações",
      size: 30,
      cell: ({ row }) => {
        const livro = row.original;
        return (
          <div className="flex items-center justify-center">
            <EditLivroButton livroId={livro.id} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full space-y-4">
      <DataTable
        columns={columns}
        data={livrosPaginado}
        emptyText="Nenhum livro encontrado no estoque."
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

export default EstoqueDataTable;
