import Filter from "@/components/ui/filter";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import { ReactNode, useCallback } from "react";

const PrecosFilter: React.FC = () => {
  const { setFiltros } = useFiltrosContext();
  const precos = [
    "Até R$20",
    "R$20 a R$40",
    "R$40 a R$60",
    "R$60 a R$80",
    "Mais de R$100",
  ];

  const handleFilterClick = useCallback(
    (selectedFilter: ReactNode) => {
      if (selectedFilter === "Até R$20") {
        setFiltros((prevState) => ({
          ...prevState,
          precoMin: "0",
          precoMax: "20",
        }));
      } else if (selectedFilter === "R$20 a R$40") {
        setFiltros((prevState) => ({
          ...prevState,
          precoMin: "20",
          precoMax: "40",
        }));
      } else if (selectedFilter === "R$40 a R$60") {
        setFiltros((prevState) => ({
          ...prevState,
          precoMin: "40",
          precoMax: "60",
        }));
      } else if (selectedFilter === "R$60 a R$80") {
        setFiltros((prevState) => ({
          ...prevState,
          precoMin: "60",
          precoMax: "80",
        }));
      } else if (selectedFilter === "R$60 a R$80") {
        setFiltros((prevState) => ({
          ...prevState,
          precoMin: "100",
          precoMax: "10000",
        }));
      }
    },
    [setFiltros]
  );

  return (
    <div className="flex flex-col">
      <Filter
        filters={precos}
        filterTitle="Preço"
        onClick={handleFilterClick}
      ></Filter>
    </div>
  );
};

export default PrecosFilter;
