import { Button } from "@/components/ui/button";
import useFiltrarVendas from "@/concepts/dashboard/hooks/useFiltrarVendas";
import { FiltrarVendasResponse } from "@/concepts/dashboard/hooks/useFiltrarVendas/types";
import { useFetchCategorias } from "@/concepts/livros/hooks/useFetchCategorias";
import errorMessage from "@/utils/error-message";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import DashboardPageSection from "../../molecules/DashboardPageSection";
import RelatorioVendaSection from "../../molecules/RelatorioVendaSection";

const DashboardPage: React.FC = () => {
  const dataAtual = new Date();
  const dataMenosSeisMeses = new Date();
  dataMenosSeisMeses.setMonth(dataAtual.getMonth() - 6);
  const [dataInicio, setDataInicio] = useState<Date>(dataMenosSeisMeses);
  const [dataFim, setDataFim] = useState<Date>(dataAtual);
  const [vendas, setVendas] = useState<FiltrarVendasResponse>();
  const { data: categorias } = useFetchCategorias();
  const categoriasValidas = categorias ? categorias : [];
  const { mutate, status } = useFiltrarVendas();

  const isLoading = useMemo(() => {
    return status === "pending";
  }, [status]);

  useEffect(() => {
    handleButtonClick();
  }, []);

  const categoriasId = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const [categoriasSelecionadas, setCategoriasSelecionadas] =
    useState<string[]>(categoriasId);

  function formatDateToMonthYear(date: Date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}`;
  }

  const filtros = useMemo(() => {
    return {
      dataInicio: formatDateToMonthYear(dataInicio),
      dataFim: formatDateToMonthYear(dataFim),
      categoriasId: categoriasSelecionadas,
    };
  }, [dataInicio, dataFim, categoriasSelecionadas]);

  const handleButtonClick = async () => {
    mutate(filtros, {
      onSuccess: (response) => {
        setVendas(response);
      },
      onError: (error) => {
        errorMessage(error);
      },
    });
  };

  return (
    <div className="flex m-6 gap-4">
      <DashboardPageSection
        categorias={categoriasValidas}
        dataInicio={dataInicio}
        setDataInicio={setDataInicio}
        dataFim={dataFim}
        setDataFim={setDataFim}
        categoriasSelecionadas={categoriasSelecionadas}
        setCategoriasSelecionadas={setCategoriasSelecionadas}
        vendas={vendas}
        isLoading={isLoading}
        searchButton={
          <Button variant="default" id="search-button" className="h-[40px]">
            <Image
              onClick={handleButtonClick}
              src="/icons/search.svg"
              width={20}
              height={20}
              alt="Search"
            ></Image>
          </Button>
        }
      />
      <RelatorioVendaSection vendas={vendas} />
    </div>
  );
};

export default DashboardPage;
