import { Label } from "@/components/ui/label";
import LineChart from "@/components/ui/linechart";
import { MonthRangeInput } from "@/components/ui/month-range-input";
import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import SectionHeader from "@/components/ui/section-header";
import { Propriedade } from "@/concepts/cadastro/types";
import { FiltrarVendasResponse } from "@/concepts/dashboard/hooks/useFiltrarVendas/types";
import { SeriesOptionsType } from "highcharts";
import Image from "next/image";
import { Dispatch, ReactNode, SetStateAction } from "react";

type DashboardPageSectionType = {
  dataInicio: Date;
  setDataInicio: Dispatch<SetStateAction<Date>>;
  dataFim: Date;
  setDataFim: Dispatch<SetStateAction<Date>>;
  categorias: Propriedade[];
  categoriasSelecionadas: string[];
  setCategoriasSelecionadas: Dispatch<SetStateAction<string[]>>;
  vendas?: FiltrarVendasResponse;
  searchButton: ReactNode;
  isLoading: boolean;
};

const DashboardPageSection: React.FC<DashboardPageSectionType> = ({
  categorias,
  dataInicio,
  setDataInicio,
  dataFim,
  setDataFim,
  vendas,
  categoriasSelecionadas,
  setCategoriasSelecionadas,
  searchButton,
  isLoading,
}) => {
  const categoryOptions: MultiSelectOption[] = categorias.map((categoria) => ({
    value: String(categoria.id),
    label: categoria.nome ?? "",
  }));

  const handleRangeChange = (range: { start: Date; end: Date }) => {
    setDataInicio(range.start);
    setDataFim(range.end);
  };

  const highchartsSeries: SeriesOptionsType[] = vendas?.series
    ? vendas?.series.map((s) => ({
        type: "line",
        name: s.name,
        data: s.data,
      }))
    : [];

  return (
    <div className="bg-white w-[1197px] h-[656px] rounded-[20px]">
      <div className="p-8">
        <div>
          <SectionHeader
            title={"Dashboard"}
            icon={
              <Image
                src="/icons/dashboard.svg"
                alt="dashboard"
                width={42}
                height={42}
              />
            }
            subtitle={"Visualize dados e gráficos de suas vendas"}
          />
          <div className="mt-4 mb-6">
            <div className="flex items-end gap-4">
              <div>
                <Label>Intervalo de exibição</Label>
                <MonthRangeInput
                  value={{ start: dataInicio, end: dataFim }}
                  onChange={handleRangeChange}
                  placeholder="Selecione o período"
                />
              </div>
              <div>
                <Label>Categorias</Label>
                <MultiSelect
                  options={categoryOptions}
                  placeholder="Categorias"
                  selectAllLabel="Selecionar todas categorias"
                  value={categoriasSelecionadas}
                  onChange={setCategoriasSelecionadas}
                />
              </div>
              <div>{searchButton}</div>
            </div>
          </div>
          <div>
            <LineChart
              isLoading={isLoading}
              graphTitle="Número de vendas por categoria"
              categories={vendas?.categories}
              series={highchartsSeries}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageSection;
