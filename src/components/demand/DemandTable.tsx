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
  const [randomArticle1, randomArticle2] = useMemo(() => {
    const shuffled = [...articles].sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1]];
  }, [articles]);

  // Filtra las demandas para los artículos aleatorios seleccionados
  const filteredDemands1 = demands.filter(
    (demand) => demand.article_id === randomArticle1.id
  );

  const filteredDemands2 = demands.filter(
    (demand) => demand.article_id === randomArticle2.id
  );

  // Prepara los datos para el primer gráfico de línea
  const lineChartData1 = {
    labels: filteredDemands1.map((demand) =>
      format(new Date(demand.period), "dd/MM/yyyy")
    ), // Usando 'period' como etiquetas
    datasets: [
      {
        label: randomArticle1.name,
        data: filteredDemands1.map((demand) => demand.quantity_demand),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Prepara los datos para el segundo gráfico de línea
  const lineChartData2 = {
    labels: filteredDemands2.map((demand) =>
      format(new Date(demand.period), "dd/MM/yyyy")
    ), // Usando 'period' como etiquetas
    datasets: [
      {
        label: randomArticle2.name,
        data: filteredDemands2.map((demand) => demand.quantity_demand),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

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
      <div className="h-[30rem] w-5/6 p-2 card-shadow-light bg-white rounded-xl">
        <Pie data={pieChartData} />
      </div>
      <article className="flex flex-col h-[30rem] w-full justify-between items-center gap-5">
        <div className="h-[14rem] w-full p-2 card-shadow-light bg-white rounded-xl">
          <Line data={lineChartData1} />
        </div>
        <div className="h-[14rem] w-full p-2 card-shadow-light bg-white rounded-xl">
          <Line data={lineChartData2} />
        </div>
      </article>
    </section>
  );
};

export default DemandTable;
