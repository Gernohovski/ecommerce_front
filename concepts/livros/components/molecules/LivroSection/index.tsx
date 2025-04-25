import { Button } from "@/components/ui/button";
import useAdicionarItemCarrinho from "@/concepts/carrinho/hooks/useAdicionarItemCarrinho";
import { LivroDetalhado } from "@/concepts/livros/types/types";
import errorMessage from "@/utils/error-message";
import { formatCurrency } from "@/utils/format-currency";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "react-toastify";
import CategoriaTagChip from "../../atoms/CategoriaTagChip";

type Props = {
  livro: LivroDetalhado;
};

const LivroSection: React.FC<Props> = ({ livro }) => {
  const router = useRouter();
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
          },
          onError: (error) => {
            errorMessage(error);
          },
        }
      );
    },
    [mutate, useQuery]
  );

  const viewLivroRedirect = useCallback(
    (livroId: number) => {
      router.push(`/visualizar-livro/${livroId}`);
    },
    [router]
  );

  return (
    <div className="flex flex-col w-[160px] min-h-[260px]">
      <div className="w-[160px] h-[250px] flex items-center justify-center overflow-hidden">
        <Image
          onClick={() => viewLivroRedirect(Number(livro.id))}
          src={livro.capa}
          width={160}
          height={240}
          alt={livro.titulo}
          className="object-cover cursor-pointer"
        />
      </div>
      <span
        onClick={() => viewLivroRedirect(Number(livro.id))}
        className="text-base font-medium w-full h-[50px] cursor-pointer hover:text-primary hover:underline"
      >
        {livro.titulo}
      </span>
      <span className="text-sm font-normal mb-2 w-full text-ellipsis overflow-hidden whitespace-nowrap">
        {livro.autor.nome}
      </span>
      <span className="text-[18px] font-medium mb-[2px]">
        {formatCurrency(livro.valorVenda)}
      </span>
      <div className="flex gap-1 mb-4">
        {livro.categorias
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .map((categoria) => (
            <CategoriaTagChip key={categoria.id} categoria={categoria.nome} />
          ))}
      </div>
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

export default LivroSection;
