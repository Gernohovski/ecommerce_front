import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import {
  CustomPageLivroResponse,
  LivroDetalhado,
} from "@/concepts/livros/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LivroSection from "../../molecules/LivroSection";

type Props = {
  livroResponse?: CustomPageLivroResponse;
};

const LivrosList: React.FC<Props> = ({ livroResponse }) => {
  const livros: LivroDetalhado[] = livroResponse?.content
    ? livroResponse.content
    : [];
  const { page, setPage, size: pageSize } = useFiltrosContext();
  const totalPages =
    Math.ceil((livroResponse?.count ?? livros.length) / pageSize) == 0
      ? 1
      : Math.ceil((livroResponse?.count ?? livros.length) / pageSize);
  return (
    <div>
      <div className="grid grid-cols-5 p-6 w-full gap-y-6">
        {livros?.map((livro) => (
          <LivroSection key={livro.id} livro={livro} />
        ))}
      </div>
      <div className="flex items-center gap-2 justify-center">
        <button
          className="flex items-center gap-1 text-sm"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          <ChevronLeft size={20} />
          Anterior
        </button>
        <div className="text-sm flex items-center py-4">
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

export default LivrosList;
