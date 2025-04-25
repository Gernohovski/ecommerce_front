import { LivroDetalhado } from "@/concepts/livros/types/types";
import { formatCurrency } from "@/utils/format-currency";

type PrecoLivroLabelProps = {
  livro: LivroDetalhado;
};

const PrecoLivroLabel: React.FC<PrecoLivroLabelProps> = ({ livro }) => {
  return (
    <div>
      <span className="text-xl font-medium">
        {formatCurrency(livro.valorVenda)}
      </span>
    </div>
  );
};

export default PrecoLivroLabel;
