import ListTemplate from "@/components/ui/list-template";
import { useFetchLivros } from "@/concepts/livros/hooks/useFetchLivros";
import AutoresFilter from "../../molecules/AutoresFilter";
import CondicoesFilter from "../../molecules/CondicoesFilter";
import IdiomasFIlter from "../../molecules/IdiomasFIlter";
import PrecosFilter from "../../molecules/PrecosFilter";
import LivrosList from "../LivrosList";

const LivrosPage: React.FC = () => {
  const { data: livros } = useFetchLivros();
  const filters = [
    <PrecosFilter key="precos" />,
    <CondicoesFilter key="condicoes" />,
    <AutoresFilter key="autores" />,
    <IdiomasFIlter key="idiomas" />,
  ];
  return (
    <div>
      <ListTemplate filters={filters}>
        <LivrosList livros={livros} />
      </ListTemplate>
    </div>
  );
};

export default LivrosPage;
