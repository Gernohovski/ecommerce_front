import { LivroDetalhado } from "@/concepts/livros/types/types";
import ViewLivroCapa from "../../molecules/ViewLivroCapa";
import ViewLivroInfos from "../../molecules/ViewLivroInfos";

type ViewLivroProps = {
  livro: LivroDetalhado;
};

const ViewLivroSection: React.FC<ViewLivroProps> = ({ livro }) => {
  return (
    <div className="p-6 bg-white flex flex-col m-6 rounded-[20px] shadow-md">
      <div className="flex gap-4">
        <ViewLivroCapa livro={livro} />
        <ViewLivroInfos livro={livro} />
      </div>
    </div>
  );
};

export default ViewLivroSection;
