import { LivroDetalhado } from "@/concepts/livros/types/types";
import Image from "next/image";

type ViewLivroCapaProps = {
  livro: LivroDetalhado;
};

const ViewLivroCapa: React.FC<ViewLivroCapaProps> = ({ livro }) => {
  return (
    <div>
      <div className="w-[221px] h-[331px] flex overflow-hidden">
        <Image src={livro?.capa} alt={livro?.titulo} width={221} height={331} />
      </div>
    </div>
  );
};

export default ViewLivroCapa;
