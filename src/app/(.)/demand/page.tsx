import DemandHeader from "@/components/demand/DemandHeader";
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
      <DemandHeader articles={articles} />
      <DemandTable demands={demands} articles={articles} />
    </main>
  );
};

export default DemandPage;
