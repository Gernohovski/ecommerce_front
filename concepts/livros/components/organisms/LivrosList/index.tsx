import { LivroDetalhado } from "@/concepts/livros/types/types";
import LivroSection from "../../molecules/LivroSection";

type Props = {
  livros?: LivroDetalhado[];
};

const LivrosList: React.FC<Props> = ({ livros }) => {
  return (
    <div className="grid grid-cols-5 p-6 w-full">
      {livros?.map((livro) => (
        <LivroSection key={livro.id} livro={livro} />
      ))}
    </div>
  );
};

export default LivrosList;
