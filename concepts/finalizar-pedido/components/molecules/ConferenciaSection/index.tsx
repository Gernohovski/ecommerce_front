import { Button } from "@/components/ui/button";
import ItensCount from "@/components/ui/itens-count";
import { useCarrinhoContext } from "@/concepts/carrinho/contexts/CarrinhoContext";
import useRemoveItemCarrinho from "@/concepts/carrinho/hooks/useRemoveItemCarrinho";
import { useFinalizarPedidoContext } from "@/concepts/finalizar-pedido/contexts/FinalizarPedidoContext";
import errorMessage from "@/utils/error-message";
import { formatCurrency } from "@/utils/format-currency";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import AlterarEtapasButton from "../AlterarEtapasButton";

const ConferenciaSection: React.FC = () => {
  const { setIsSelected } = useFinalizarPedidoContext();
  const { itensCarrinho } = useCarrinhoContext();
  const useQuery = useQueryClient();
  const { mutate } = useRemoveItemCarrinho(
    localStorage.getItem("cliente") ?? ""
  );

  const handleProximaEtapa = useCallback(() => {
    setIsSelected({
      conferencia: false,
      metodoEnvio: true,
      formaPagamento: false,
    });
  }, [setIsSelected]);

  const handleButtonClick = useCallback(
    (itemId: number) => {
      mutate(
        { itemId: itemId },
        {
          onSuccess: () => {
            useQuery.invalidateQueries({ queryKey: ["getCarrinho"] });
          },
          onError: (error) => {
            errorMessage(error);
          },
        }
      );
    },
    [mutate, useQuery]
  );

  return (
    <div className="w-[731px] h-[626px] bg-white rounded-[20px] p-6 shadow-md">
      <AlterarEtapasButton />
      <span className="font-medium text-[#7738C8] text-2xl">
        Conferência de produtos
      </span>
      <div
        className="mt-8 h-[347.8px] bg-white overflow-y-auto
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {itensCarrinho.map((item) => (
          <div key={item.id} className="flex mb-4 gap-2">
            <div className="w-[29px] h-[43.5px]">
              <Image
                src={item.livro.capa}
                alt={item.livro.titulo}
                width={29}
                height={43.5}
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2">
                <span className="w-[250px] text-base font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                  {item.livro.titulo}
                </span>
                <span className="text-xs">{item.livro.autor.nome}</span>
              </div>
              <div className="flex items-center gap-6 mr-6">
                <ItensCount
                  quantidade={item.quantidade}
                  itemId={Number(item.id)}
                  quantidadeMax={item.livro.quantidade}
                />
                <span className="text-base font-medium w-[75px]">
                  {formatCurrency(item.livro.valorVenda * item.quantidade)}
                </span>
                <button onClick={() => handleButtonClick(Number(item.id))}>
                  <Image
                    src="/icons/trash.svg"
                    alt="Lixeira"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between mt-[71.2px]">
          <Button
            asChild
            className="w-[145px] h-[40px]"
            variant={"delete_disabled"}
          >
            <div className="cursor-not-allowed">
              <ArrowLeft />
              <span>Anterior</span>
            </div>
          </Button>
          <Button
            asChild
            className="w-[145px] h-[40px]"
            onClick={handleProximaEtapa}
          >
            <div>
              <span>Próximo</span>
              <ArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConferenciaSection;
