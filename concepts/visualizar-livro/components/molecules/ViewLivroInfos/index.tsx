import { LivroDetalhado } from "@/concepts/livros/types/types";
import AdicionarCarrinhoButton from "../../atoms/AdicionarCarrinhoButton";
import PrecoLivroLabel from "../../atoms/PrecoLivroLabel";
import ViewSinopse from "../../atoms/ViewSinopse";

type ViewLivroInfosProps = {
  livro: LivroDetalhado;
};

const ViewLivroInfos: React.FC<ViewLivroInfosProps> = ({ livro }) => {
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium">{livro?.titulo}</span>
        <span className="text-xl">{livro?.autor.nome}</span>
        <ViewSinopse sinopse={livro?.sinopse} />
      </div>
      <div>
        <div className="flex flex-col justify-between">
          <PrecoLivroLabel livro={livro} />
          <AdicionarCarrinhoButton livro={livro} />
        </div>
      </div>
    </div>
  );
};

export default ViewLivroInfos;
