import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useListarClienteContext } from "@/concepts/admin/contexts/ListarClienteContext";
import { useListarClientes } from "@/concepts/admin/hooks/useListarClientes";
import { ClienteResponse } from "@/concepts/cadastro/types";
import { formatDate } from "@/utils/format-date";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import ClientesTableEmpty from "../../molecules/ClientesTableEmpty";

const ClienteDataTable: React.FC = () => {
  const { termo, setTermo, page, size, setClientes, clientes } =
    useListarClienteContext();
  const [unfetchetedTermo, setUnfetchetTermo] = useState<string>(termo);

  const { data, isLoading, isError } = useListarClientes({
    page: page,
    size: size,
    termoPesquisa: unfetchetedTermo,
  });

  const handleButtonClick = useCallback(() => {
    setUnfetchetTermo(termo);
  }, [setUnfetchetTermo, termo]);

  useEffect(() => {
    setClientes(data);
  }, [setClientes, data]);

  const component = useMemo(() => {
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
    if (isError) return <ClientesTableEmpty />;
    if (isLoading) return <Skeleton className="w-[1098px] h-[70px]" />;
    if (!!clientes) return <DataTable columns={columns} data={clientes} />;
  }, [clientes, isError, isLoading]);

  return (
    <div className="flex flex-col-reverse gap-6">
      {component}
      <div className="flex justify-center gap-6">
        <Input
          id="filter-client-input"
          className="min-w-[1022px] max-w-[1022px]"
          placeholder="Insira uns dos dados de identificação do cliente para busca"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        ></Input>
        <Button onClick={handleButtonClick}>
          <Image
            src="/icons/search.svg"
            width={20}
            height={20}
            alt="Search"
          ></Image>
        </Button>
      </div>
    </div>
  );
};

export default ClienteDataTable;
