import DemandTable from "@/components/demand/DemandTable";
import { getAllArticles } from "@/services/article.service";
import { getAllDemands } from "@/services/demand.service";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

const DemandPage = async () => {
  const demands = await getAllDemands();
  const articles = await getAllArticles();
  return (
    <main className=" flex flex-col gap-10">
      <header className="flex justify-between items-center">
        <h1>Demanda general</h1>

        <Button color="primary">
          <PlusCircleIcon className="w-6 h-6" /> Calcular demanda
        </Button>
      </header>
      <DemandTable demands={demands} articles={articles} />
    </main>
  );
};

export default DemandPage;
