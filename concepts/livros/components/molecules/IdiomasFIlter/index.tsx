import FilterCheckbox from "@/components/ui/filter-checkbox";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import { useFetchIdiomas } from "@/concepts/livros/hooks/useFetchIdiomas";
import { useMemo } from "react";

const IdiomasFIlter: React.FC = () => {
  const { filtros, setFiltros } = useFiltrosContext();
  const { data: idiomas } = useFetchIdiomas();

  const idiomasOptions = useMemo(() => {
    return idiomas?.map((idioma) => ({
      label: idioma.nome,
      value: String(idioma.id),
    }));
  }, [idiomas]);

  const handleIdiomaChange = (value: string, checked: boolean) => {
    setFiltros((prevFiltros) => {
      if (checked) {
        return {
          ...prevFiltros,
          idioma: [...prevFiltros.idioma, value],
        };
      } else {
        return {
          ...prevFiltros,
          idioma: prevFiltros.idioma.filter((idioma) => idioma !== value),
        };
      }
    });
  };

  return (
    <div className="flex flex-col">
      <FilterCheckbox
        options={idiomasOptions}
        filterTitle="Idiomas"
        onChange={handleIdiomaChange}
        selectedValues={filtros.idioma}
      ></FilterCheckbox>
    </div>
  );
};

export default IdiomasFIlter;
