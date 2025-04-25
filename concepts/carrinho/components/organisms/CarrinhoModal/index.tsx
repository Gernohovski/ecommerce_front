import { Button } from "@/components/ui/button";
import ItensCount from "@/components/ui/itens-count";
import { ItemCarrinho } from "@/concepts/carrinho/contexts/CarrinhoContext/types";
import useRemoveItemCarrinho from "@/concepts/carrinho/hooks/useRemoveItemCarrinho";
import errorMessage from "@/utils/error-message";
import { formatCurrency } from "@/utils/format-currency";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

interface CarrinhoProps {
  isOpen: boolean;
  onClose: () => void;
  itensCarrinho?: ItemCarrinho[];
  valorCompra?: number;
}

const CarrinhoModal: React.FC<CarrinhoProps> = ({
  isOpen,
  itensCarrinho,
  valorCompra,
}) => {
  const useQuery = useQueryClient();
  const router = useRouter();
  const { mutate } = useRemoveItemCarrinho(
    localStorage.getItem("cliente") ?? ""
  );

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
    <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 top-[75px]">
      <div className="relative w-[366px] h-[632px] bg-[rgb(228,207,255)] p-6 rounded-l-[20px] shadow-lg">
        <div className="absolute -top-3 right-[60px]">
          <Image
            src="/icons/triangle.svg"
            alt="Triângulo"
            width={30}
            height={30}
          />
        </div>
        <div
          className="w-[318px] h-[490px] bg-white rounded-tl-[20px] max-h-[490px] overflow-y-auto
                      [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                      [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {itensCarrinho ? (
            itensCarrinho?.map((item, index) => (
              <div
                key={item.livro.id}
                className="flex flex-col pt-[14px] pl-[14px] gap-4"
              >
                <div className="flex gap-2">
                  <div className="w-[90px] h-[135px] flex overflow-hidden">
                    <Image
                      src={item.livro.capa}
                      alt={item.livro.titulo}
                      width={90}
                      height={135}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-8">
                      <span className="w-[140px] h-[48px] text-base font-medium line-clamp-2">
                        {item.livro.titulo}
                      </span>
                      <button
                        onClick={() => handleButtonClick(Number(item.id))}
                      >
                        <Image
                          src="/icons/trash.svg"
                          alt="Lixeira"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                    <span className="text-sm">{item.livro.autor.nome}</span>
                    <ItensCount
                      quantidade={item.quantidade}
                      itemId={Number(item.id)}
                      quantidadeMax={item.livro.quantidade}
                    />
                    <span className="text-lg justify-end">
                      {formatCurrency(item.livro.valorVenda)}
                    </span>
                  </div>
                </div>
                {index !== itensCarrinho.length - 1 && (
                  <div className="h-[3px] bg-gray-300 w-[280px]"></div>
                )}
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div className="h-[1px] bg-gray-300 "></div>
        <div className="flex flex-col w-[318px] h-[91px] bg-white rounded-bl-[20px] pt-[12px] px-[14px]">
          <span>{formatCurrency(valorCompra ?? 0)}</span>
          <Button
            className="w-[290px]"
            onClick={() => router.push("/finalizar-pedido")}
            disabled={itensCarrinho?.length == 0}
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CarrinhoModal;
