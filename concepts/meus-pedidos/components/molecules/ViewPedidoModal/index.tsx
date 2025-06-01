import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import { GhostInput } from "@/components/ui/ghost-input";
import {
  ItemPedido,
  PedidoResponse,
} from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import { useCancelarPedido } from "@/concepts/meus-pedidos/hooks/useCancelarPedido";
import { useFetchPedidos } from "@/concepts/meus-pedidos/hooks/useFetchPedidos";
import useAlterarSituacao from "@/concepts/pedidos/hooks/useAlterarSituacao";
import useSolicitarDevolucao from "@/concepts/pedidos/hooks/useSolicitarDevolucao";
import useSolicitarTroca from "@/concepts/pedidos/hooks/useSolicitarTroca";
import { SituacaoPedidoNomeMap } from "@/constants/situacao-pedido";
import { SituacaoPedidoButtonUserLabelMap } from "@/constants/situacao-pedido-button-label";
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

type ItemTroca = {
  itemPedido: ItemPedido;
  quantidade: number;
};

const ViewPedidoModal: React.FC<ViewPedidoModalProps> = ({
  isOpen,
  onClose,
  pedido,
}) => {
  const [page, setPage] = useState<number>(0);
  const [itensTroca, setItensTroca] = useState<ItemTroca[]>([]);
  const pageSize: number = 3;
  const queryClient = useQueryClient();

  const { mutate: cancelarPedido } = useCancelarPedido();
  const { mutate: alterarSituacaoPedido } = useAlterarSituacao();
  const { mutate: solicitarTrocaPedido } = useSolicitarTroca();
  const { mutate: solicitarDevolucaoPedido } = useSolicitarDevolucao();
  const { refetch } = useFetchPedidos();

  const isCancelavel = useMemo(() => {
    if (pedido.situacaoPedido.nome == "pedido-cancelado") return false;
  }, [pedido]);

  const handleChange = (
    checked: boolean,
    quantidadeMax: number,
    itemPedido: ItemPedido
  ) => {
    if (checked) {
      setItensTroca((prev) => {
        if (!prev.find((item) => item.itemPedido.id === itemPedido.id)) {
          return [
            ...prev,
            { quantidade: quantidadeMax, itemPedido: itemPedido },
          ];
        }
        return prev;
      });
    } else {
      setItensTroca((prev) =>
        prev.filter((item) => item.itemPedido.id !== itemPedido.id)
      );
    }
  };

  const handleQuantidadeChange = (
    itemPedido: ItemPedido,
    novaQuantidade: number
  ) => {
    setItensTroca((prev) =>
      prev.map((item) =>
        item.itemPedido.id === itemPedido.id
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    );
  };

  const handleCancelarPedido = useCallback(() => {
    cancelarPedido(String(pedido.id), {
      onSuccess: () => {
        toast.success("Pedido cancelado com sucesso.");
        queryClient.refetchQueries({ queryKey: ["getPedidos"] });
        refetch();
        onClose();
      },
      onError: (error) => {
        errorMessage(error);
      },
    });
  }, [pedido.id, onClose, cancelarPedido, queryClient, refetch]);

  const handleAlterarSituacaoPedido = useCallback(
    (acao: string) => {
      const alterarSituacao = {
        id: String(pedido.id),
        acao,
      };
      alterarSituacaoPedido(alterarSituacao, {
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
    [alterarSituacaoPedido, onClose, pedido.id, queryClient, refetch]
  );

  const handleSolicitarTrocaPedido = useCallback(() => {
    const solicitarTroca = {
      pedidoId: String(pedido.id),
      item: itensTroca,
    };
    solicitarTrocaPedido(solicitarTroca, {
      onSuccess: () => {
        toast.success("Solicitação de troca efetuada com sucesso.");
        queryClient.refetchQueries({ queryKey: ["getPedidos"] });
        refetch();
        onClose();
      },
      onError: (error) => {
        errorMessage(error);
      },
    });
  }, [
    solicitarTrocaPedido,
    onClose,
    pedido.id,
    queryClient,
    itensTroca,
    refetch,
  ]);

  const handleSolicitarDevolucaoPedido = useCallback(() => {
    const solicitarDevolucao = {
      pedidoId: String(pedido.id),
      item: itensTroca,
    };
    solicitarDevolucaoPedido(solicitarDevolucao, {
      onSuccess: () => {
        toast.success("Solicitação de devolução efetuada com sucesso.");
        queryClient.refetchQueries({ queryKey: ["getPedidos"] });
        refetch();
        onClose();
      },
      onError: (error) => {
        errorMessage(error);
      },
    });
  }, [
    solicitarDevolucaoPedido,
    onClose,
    pedido.id,
    queryClient,
    itensTroca,
    refetch,
  ]);

  const footerButton = useMemo(() => {
    const buttonLabel =
      SituacaoPedidoButtonUserLabelMap[pedido.situacaoPedido.nome];
    if (buttonLabel === "-") return;
    if (buttonLabel === "Cancelar pedido")
      return (
        <div className="flex justify-start mt-2">
          <Button
            id={`cancel-${buttonLabel}`}
            variant="delete"
            onClick={handleCancelarPedido}
            className="w-[231px]"
          >
            Cancelar pedido
          </Button>
        </div>
      );
    if (buttonLabel.includes(",")) {
      const partes = buttonLabel.split(",");
      return (
        <div className="grid grid-cols-3 gap-2 mt-2">
          <Button
            id={`cancel-${buttonLabel}`}
            variant="delete"
            onClick={() => {
              if (partes[0] === "Solicitar troca")
                return handleSolicitarTrocaPedido();
              return handleAlterarSituacaoPedido(partes[0]);
            }}
            disabled={itensTroca.length == 0 && partes[0] === "Solicitar troca"}
          >
            {partes[0]}
          </Button>
          <Button
            id={`cancel-${buttonLabel}`}
            variant="delete"
            onClick={() => {
              if (partes[1] === "Solicitar devolução")
                return handleSolicitarDevolucaoPedido();
              return handleAlterarSituacaoPedido(partes[1]);
            }}
            disabled={
              itensTroca.length == 0 && partes[1] === "Solicitar devolução"
            }
          >
            {partes[1]}
          </Button>
          <Button
            id={`confirm-${buttonLabel}`}
            variant="confirm"
            onClick={() => handleAlterarSituacaoPedido(partes[2])}
          >
            {partes[2]}
          </Button>
        </div>
      );
    }
    return (
      <div className="flex justify-end mt-2 w-full">
        <Button
          className="w-[231px]"
          variant="confirm"
          onClick={() => handleAlterarSituacaoPedido(buttonLabel)}
        >
          {buttonLabel}
        </Button>
      </div>
    );
  }, [
    pedido,
    handleAlterarSituacaoPedido,
    handleCancelarPedido,
    itensTroca,
    handleSolicitarTrocaPedido,
    handleSolicitarDevolucaoPedido,
  ]);

  const totalPages = Math.ceil(pedido.carrinho.itens.length / pageSize);

  const itensPaginados = pedido.itensPedido.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  const columns: ColumnDef<ItemPedido>[] = useMemo(() => {
    if (pedido.situacaoPedido.nome == "pedido-recebido") {
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
                  id={`${item.livro.titulo}`}
                  checked={itensTroca.some(
                    (i) => String(i.itemPedido.id) === String(item.id)
                  )}
                  onCheckedChange={(checked) =>
                    handleChange(checked as boolean, item.quantidade, item)
                  }
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
          accessorKey: "quantidadeTroca",
          header: "Quantidade a ser trocada/devolvida",
          cell: ({ row }) => {
            const item = row.original;
            return (
              <div className="flex justify-center items-center text-center">
                <GhostInput
                  disabled={
                    !itensTroca.find(
                      (i) => String(i.itemPedido.id) === String(item.id)
                    )
                  }
                  className="text-center"
                  value={
                    itensTroca.find(
                      (i) => String(i.itemPedido.id) === String(item.id)
                    )?.quantidade ?? ""
                  }
                  onChange={(e) =>
                    handleQuantidadeChange(item, Number(e.target.value))
                  }
                />
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
    }
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
  }, [pedido.situacaoPedido.nome, itensTroca]);

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
          {isCancelavel ?? footerButton}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ViewPedidoModal;
