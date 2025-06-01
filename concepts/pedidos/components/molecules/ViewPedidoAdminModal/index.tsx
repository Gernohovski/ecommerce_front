import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import {
  ItemPedido,
  PedidoResponse,
} from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import { useFetchPedidos } from "@/concepts/meus-pedidos/hooks/useFetchPedidos";
import useAlterarSituacao from "@/concepts/pedidos/hooks/useAlterarSituacao";
import useAprovarTroca from "@/concepts/pedidos/hooks/useAprovarTroca";
import { SituacaoPedidoNomeMap } from "@/constants/situacao-pedido";
import { SituacaoPedidoButtonLabelMap } from "@/constants/situacao-pedido-button-label";
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

const ViewPedidoAdminModal: React.FC<ViewPedidoModalProps> = ({
  isOpen,
  onClose,
  pedido,
}) => {
  const [page, setPage] = useState<number>(0);
  const pageSize: number = 3;
  const queryClient = useQueryClient();

  const { mutate } = useAlterarSituacao();
  const { mutate: aprovarTrocaPedido } = useAprovarTroca();
  const { refetch } = useFetchPedidos();

  const isEditavel = useMemo(() => {
    if (SituacaoPedidoButtonLabelMap[pedido.situacaoPedido.nome] === "-")
      return false;
  }, [pedido]);

  const handleAprovarTroca = useCallback(() => {
    aprovarTrocaPedido(
      { id: String(pedido.id) },
      {
        onSuccess: () => {
          toast.success("Troca aprovada com sucesso.");
          queryClient.refetchQueries({ queryKey: ["getPedidos"] });
          refetch();
          onClose();
        },
        onError: (error) => {
          errorMessage(error);
        },
      }
    );
  }, [aprovarTrocaPedido, onClose, pedido.id, queryClient, refetch]);

  const handleButtonClick = useCallback(
    (acao: string) => {
      const alterarSituacao = {
        id: String(pedido.id),
        acao,
      };
      mutate(alterarSituacao, {
        onSuccess: () => {
          toast.success("Situação alterada com sucesso.");
          queryClient.refetchQueries({ queryKey: ["getPedidos"] });
          refetch();
          onClose();
        },
        onError: (error) => {
          errorMessage(error);
        },
      });
    },
    [mutate, onClose, pedido.id, queryClient, refetch]
  );

  const footerButton = useMemo(() => {
    const buttonLabel =
      SituacaoPedidoButtonLabelMap[pedido.situacaoPedido.nome];
    if (buttonLabel.includes(",")) {
      const partes = buttonLabel.split(",");
      return (
        <div className="grid grid-cols-2 mt-2 gap-2">
          <Button
            id={`cancel-${partes[0]}`}
            variant="delete"
            onClick={() => handleButtonClick(partes[0])}
          >
            {partes[0]}
          </Button>
          <Button
            id={`confirm-${partes[1]}`}
            variant="confirm"
            onClick={
              partes[1] === "Aprovar troca"
                ? () => handleAprovarTroca()
                : () => handleButtonClick(partes[1])
            }
          >
            {partes[1]}
          </Button>
        </div>
      );
    }
    return (
      <div className="flex justify-end mt-2">
        <Button
          id={`confirm-${buttonLabel}`}
          className={
            buttonLabel === "Confirmar recebimento devolução"
              ? "w-[236px]"
              : "w-[231px]"
          }
          variant="confirm"
          onClick={() => handleButtonClick(buttonLabel)}
        >
          {buttonLabel}
        </Button>
      </div>
    );
  }, [pedido, handleButtonClick, handleAprovarTroca]);

  const totalPages = Math.ceil(pedido.carrinho.itens.length / pageSize);

  const itensPaginados = pedido.itensPedido.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  const columns: ColumnDef<ItemPedido>[] = useMemo(() => {
    if (
      pedido.situacaoPedido.nome === "troca-recebida" ||
      pedido.situacaoPedido.nome === "solicitacao-de-troca" ||
      pedido.situacaoPedido.nome === "troca-aprovada" ||
      pedido.situacaoPedido.nome === "devolucao-recebida" ||
      pedido.situacaoPedido.nome === "devolucao-solicitada" ||
      pedido.situacaoPedido.nome === "devolucao-aprovada"
    ) {
      return [
        {
          accessorKey: "nome",
          header: " Nome",
          size: 100,
          cell: ({ row }) => {
            const item = row.original;
            const livro = item.livro;
            return (
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={item.devolucaoAberta || item.trocaAberta}
                  disabled={true}
                />
                <span>{livro.titulo}</span>
              </div>
            );
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
          accessorKey: "quantidadeDevolver",
          header: "Quantidade a ser devolvida",
          cell: ({ row }) => {
            const item = row.original;
            return (
              <div className="flex justify-center items-center">
                {item.quantidadeTroca ?? item.quantidadeDevolucao}
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
              <div className="text-center">{formatCurrency(item.valor)}</div>
            );
          },
          size: 100,
        },
        {
          accessorKey: "trocaAberta",
          header: "Será devolvido",
          cell: ({ row }) => {
            const item = row.original;
            return (
              <div className="text-center">
                {item.trocaAberta || item.devolucaoAberta ? "Sim" : "Não"}
              </div>
            );
          },
          size: 100,
        },
      ];
    }
    return [
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
            <div className="text-center">{formatCurrency(item.valor)}</div>
          );
        },
        size: 100,
      },
    ];
  }, [pedido.situacaoPedido.nome]);

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
          {isEditavel ?? footerButton}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ViewPedidoAdminModal;
