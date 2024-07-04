"use client";
import React, { FC, useMemo } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import { Article } from "@/types/article";
import { Demand } from "@/types/demand";
import { format } from "date-fns";

// Registrar los componentes necesarios de chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

interface DemandTableProps {
  demands: Demand[];
  articles: Article[];
}

const DemandTable: FC<DemandTableProps> = ({ demands, articles }) => {
  // Selecciona dos artículos aleatorios
  const [randomArticle1, randomArticle2, randomArticle3, randomArticle4] = useMemo(() => {
    const shuffled = [...articles].sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1], shuffled[2], shuffled[3]];
  }, [articles]);

  // Filtra las demandas para los artículos aleatorios seleccionados
  const filteredDemands1 = demands.filter(
    (demand) => demand.article_id === randomArticle1.id
  );

  const filteredDemands2 = demands.filter(
    (demand) => demand.article_id === randomArticle2.id
  );

  const filteredDemands3 = demands.filter(
    (demand) => demand.article_id === randomArticle3.id
  );

  const filteredDemands4 = demands.filter(
    (demand) => demand.article_id === randomArticle4.id
  );

  // Prepara los datos para los gráficos de línea
  const createLineChartData = (article: any, filteredDemands: any) => ({
    labels: filteredDemands.map((demand:any) =>
      format(new Date(demand.periods || 2), "dd/MM/yyyy")
    ), // Usando 'period' como etiquetas
    datasets: [
      {
        label: article.name,
        data: filteredDemands.map((demand:any) => demand.quantity_demand),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  });

  const lineChartData1 = createLineChartData(randomArticle1, filteredDemands1);
  const lineChartData2 = createLineChartData(randomArticle2, filteredDemands2);
  const lineChartData3 = createLineChartData(randomArticle3, filteredDemands3);
  const lineChartData4 = createLineChartData(randomArticle4, filteredDemands4);

  const pieChartData = {
    datasets: [
      {
        label: "Demanda",
        data: articles.map((article) =>
          demands
            .filter((demand) => demand.article_id === article.id)
            .reduce((acc, demand) => acc + demand.quantity_demand, 0)
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          // Puedes agregar más colores según sea necesario
        ],
      },
    ],
    labels: articles.map((article) => article.name),
  };

  return (
    <section className="flex gap-5 justify-between">
      <div className="h-[30rem] w-1/2 p-2 card-shadow-light bg-white rounded-xl">
        <Pie data={pieChartData} />
      </div>
      <article className="grid grid-cols-2 gap-5 h-[30rem] w-1/2">
        <div className="h-[14rem] w-full p-2 card-shadow-light bg-white rounded-xl">
          <Line data={lineChartData1} />
        </div>
        <div className="h-[14rem] w-full p-2 card-shadow-light bg-white rounded-xl">
          <Line data={lineChartData2} />
        </div>
        <div className="h-[14rem] w-full p-2 card-shadow-light bg-white rounded-xl">
          <Line data={lineChartData3} />
        </div>
        <div className="h-[14rem] w-full p-2 card-shadow-light bg-white rounded-xl">
          <Line data={lineChartData4} />
        </div>
      </article>
    </section>
  );
};

export default DemandTable;