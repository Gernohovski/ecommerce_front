"use client";

import Highcharts from "@/lib/initHighcharts";
import { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TriangleAlert } from "lucide-react";
import { useMemo } from "react";
import { Spinner } from "./spinner";

type LineChartProps = {
  graphTitle: string;
  categories?: string[];
  series?: SeriesOptionsType[];
  isLoading: boolean;
};

const LineChart: React.FC<LineChartProps> = ({
  graphTitle,
  categories,
  series,
  isLoading,
}) => {
  const options = useMemo(
    () => ({
      title: {
        text: graphTitle,
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      xAxis: {
        categories,
        labels: { style: { fontSize: "12px" } },
      },
      yAxis: {
        title: { text: "" },
        labels: { style: { fontSize: "12px" } },
      },
      series,
      accessibility: {
        enabled: true,
        description: graphTitle,
      },
      responsive: {
        rules: [
          {
            condition: { maxWidth: 500 },
            chartOptions: {
              legend: { enabled: false },
            },
          },
        ],
      },
      plotOptions: {
        series: {
          marker: { radius: 4 },
          lineWidth: 2,
        },
      },
    }),
    [graphTitle, categories, series]
  );

  if (isLoading) {
    <div className="flex flex-col justify-center items-center">
      <Spinner size="medium" />
    </div>;
  }

  if (!series || series?.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-2xl font-medium mt-[160px]">
          Nenhuma venda encontrada
        </span>
        <TriangleAlert color="#7738C8" width={36} height={36} />
      </div>
    );
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
