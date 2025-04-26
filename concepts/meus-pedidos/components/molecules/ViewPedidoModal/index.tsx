import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ItemCarrinho } from "@/concepts/carrinho/contexts/CarrinhoContext/types";
import { PedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import { useCancelarPedido } from "@/concepts/meus-pedidos/hooks/useCancelarPedido";
import { SituacaoPedidoNomeMap } from "@/constants/situacao-pedido";
import errorMessage from "@/utils/error-message";
import { formatCurrency } from "@/utils/format-currency";
import { useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";

type ViewPedidoModalProps = {
  pedido: PedidoResponse;
  isOpen: boolean;
  onClose: () => void;
};

const ViewPedidoModal: React.FC<ViewPedidoModalProps> = ({
  isOpen,
  onClose,
  pedido,
}) => {
  const [page, setPage] = useState<number>(0);
  const pageSize: number = 3;
  const queryClient = useQueryClient();

  const { mutate } = useCancelarPedido();

  const isCancelavel = useMemo(() => {
    if (pedido.situacaoPedido.nome == "pedido-cancelado") return false;
  }, [pedido]);

  const handleButtonClick = useCallback(() => {
    mutate(String(pedido.id), {
      onSuccess: () => {
        toast.success("Pedido cancelado com sucesso.");
        queryClient.invalidateQueries({ queryKey: ["getPedidos"] });
        onClose();
      },
      onError: (error) => {
        errorMessage(error);
      },
    });
  }, [pedido.id, onClose, mutate, queryClient]);

  const totalPages = Math.ceil(pedido.carrinho.itens.length / pageSize);

  const itensPaginados = pedido.carrinho.itens.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  const columns: ColumnDef<ItemCarrinho>[] = [
    {
      accessorKey: "nome",
      header: " Nome",
      size: 100,
      cell: ({ row }) => {
        const item = row.original;
        const livro = item.livro;
        return <span>{livro.titulo}</span>;
      },
    },
    {
      accessorKey: "quantidade",
      header: "Quantidade",
      cell: ({ row }) => {
        const item = row.original;
        return (
          <div className="flex justify-center items-center">
            {item.quantidade}
          </div>
        );
      },
      size: 100,
    },
    {
      accessorKey: "valor",
      header: "Valor",
      cell: ({ row }) => {
        const item = row.original;
        return (
          <div className="text-center">
            {formatCurrency(item.livro.valorVenda * item.quantidade)}
          </div>
        );
      },
      size: 100,
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 top-[75px]">
      <div className="relative w-[518px] h-auto bg-white p-6 rounded-[20px] shadow-lg">
        <div className="flex items-top justify-between">
          <span className="font-semibold text-2xl mb-6">
            {SituacaoPedidoNomeMap[pedido.situacaoPedido.nome]}
          </span>
          <div
            className="cursor-pointer"
            onClick={() => {
              onClose();
            }}
          >
            <Image src="/icons/close.svg" alt="fechar" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <span className="font-semibold">Identificação do pedido:</span>
            <span>{`Nº ${pedido.id}`}</span>
          </div>
          <div className="flex flex-wrap">
            <span>
              <span className="font-semibold">Endereço de entrega: </span>
              {`${pedido.endereco.logradouro}, ${pedido.endereco.numero}`}
            </span>
          </div>
          <span className="font-semibold">Produtos comprados:</span>
          <DataTable
            columns={columns}
            data={itensPaginados}
            emptyText="Nenhum pedido realizado."
          />
          {pedido.carrinho.itens.length > pageSize && (
            <div className="flex gap-2 justify-center mt-2">
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
          )}
          {isCancelavel ?? (
            <div className="flex justify-end mt-2">
              <Button variant="delete" onClick={handleButtonClick}>
                Cancelar pedido
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ViewPedidoModal;
