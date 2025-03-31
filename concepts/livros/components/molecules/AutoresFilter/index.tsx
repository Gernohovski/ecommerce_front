import FilterCheckbox from "@/components/ui/filter-checkbox";
import { useFetchAutores } from "@/concepts/livros/hooks/useFetchAutores";
import { useMemo } from "react";

const AutoresFilter: React.FC = () => {
  const { data } = useFetchAutores();
  const autores = useMemo(() => {
    return data?.map((autor) => ({
      value: String(autor.id),
      label: autor.nome,
    }));
  }, [data]);
  return (
    <div className="flex flex-col">
      <FilterCheckbox options={autores} filterTitle="Autores"></FilterCheckbox>
    </div>
  );
};

export default AutoresFilter;
