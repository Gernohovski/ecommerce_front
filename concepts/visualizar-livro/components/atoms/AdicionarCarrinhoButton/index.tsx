import { Button } from "@/components/ui/button";
import useAdicionarItemCarrinho from "@/concepts/carrinho/hooks/useAdicionarItemCarrinho";
import { LivroDetalhado } from "@/concepts/livros/types/types";
import errorMessage from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { toast } from "react-toastify";

type AdicionarCarrinhoButtonProps = {
  livro: LivroDetalhado;
};

const AdicionarCarrinhoButton: React.FC<AdicionarCarrinhoButtonProps> = ({
  livro,
}) => {
  const useQuery = useQueryClient();
  const { mutate } = useAdicionarItemCarrinho(
    localStorage.getItem("cliente") ?? ""
  );

  const handleButtonClick = useCallback(
    (livroId: number) => {
      mutate(
        { livroId: livroId, quantidade: 1 },
        {
          onSuccess: () => {
            toast.success("Livro adicionado ao carrinho.");
            useQuery.invalidateQueries({ queryKey: ["getCarrinho"] });
            useQuery.invalidateQueries({ queryKey: ["getLivros"] });
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
    <div className="flex justify-between">
      <Button
        asChild
        className="w-[160px] h-[40px]"
        disabled={livro.quantidade == 0}
      >
        <button
          onClick={() => handleButtonClick(Number(livro.id))}
          disabled={livro.quantidade == 0}
        >
          <div className="flex items-center gap-2">
            <span>Adicionar ao carrinho</span>
          </div>
        </button>
      </Button>
    </div>
  );
};

export default AdicionarCarrinhoButton;
