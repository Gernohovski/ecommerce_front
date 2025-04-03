import { Button } from "@/components/ui/button";
import { LivroDetalhado } from "@/concepts/livros/types/types";
import { formatCurrency } from "@/utils/format-currency";
import Image from "next/image";
import CategoriaTagChip from "../../atoms/CategoriaTagChip";

type Props = {
  livro: LivroDetalhado;
};

const LivroSection: React.FC<Props> = ({ livro }) => {
  return (
    <div className="flex flex-col w-[160px] min-h-[260px]">
      <div className="w-[160px] h-[250px] flex items-center justify-center overflow-hidden">
        <Image
          src={livro.capa}
          width={160}
          height={240}
          alt={livro.titulo}
          className="object-cover"
        />
      </div>
      <span className="text-base font-medium w-full h-[50px]">
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
      <Button asChild className="w-[160px] h-[40px]">
        <div className="flex items-center gap-2">
          <span>Adicionar ao carrinho</span>
        </div>
      </Button>
    </div>
  );
};

export default LivroSection;
