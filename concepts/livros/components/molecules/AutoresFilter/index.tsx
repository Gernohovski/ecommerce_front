import FilterCheckbox from "@/components/ui/filter-checkbox";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import { useFetchAutores } from "@/concepts/livros/hooks/useFetchAutores";
import { useMemo } from "react";

const AutoresFilter: React.FC = () => {
  const { filtros, setFiltros } = useFiltrosContext();

  const { data } = useFetchAutores();
  const autores = useMemo(() => {
    return data?.map((autor) => ({
      value: String(autor.id),
      label: autor.nome,
    }));
  }, [data]);

  const handleAutorChange = (value: string, checked: boolean) => {
    setFiltros((prevFiltros) => {
      if (checked) {
        return {
          ...prevFiltros,
          autoresId: [...prevFiltros.autoresId, value],
        };
      } else {
        return {
          ...prevFiltros,
          autoresId: prevFiltros.autoresId.filter((autor) => autor !== value),
        };
      }
    });
  };

  return (
    <div className="flex flex-col">
      <FilterCheckbox
        options={autores}
        filterTitle="Autores"
        onChange={handleAutorChange}
        selectedValues={filtros.autoresId}
      ></FilterCheckbox>
    </div>
  );
};

export default AutoresFilter;
