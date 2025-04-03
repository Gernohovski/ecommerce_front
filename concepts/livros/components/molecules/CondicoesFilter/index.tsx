import Filter from "@/components/ui/filter";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import { ReactNode, useCallback } from "react";

const CondicoesFilter: React.FC = () => {
  const { setFiltros } = useFiltrosContext();
  const condicoes = ["Novo", "Usado"];

  const handleFilterClick = useCallback(
    (selectedFilter: ReactNode) => {
      if (selectedFilter === "Novo") {
        setFiltros((prevState) => ({
          ...prevState,
          condicao: "Novo",
        }));
      } else if (selectedFilter === "USado") {
        setFiltros((prevState) => ({
          ...prevState,
          condicao: "Usado",
        }));
      }
    },
    [setFiltros]
  );

  return (
    <div className="flex flex-col">
      <Filter
        filters={condicoes}
        filterTitle="Condição"
        onClick={handleFilterClick}
      ></Filter>
    </div>
  );
};

export default CondicoesFilter;
