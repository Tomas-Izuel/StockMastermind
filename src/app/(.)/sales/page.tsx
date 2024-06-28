import ArticleWrapper from "@/components/article/ArticleWrapper";
import Await from "@/components/common/Await";
import SaleWrapper from "@/components/sale/ClientWrapper";
import { getAllArticles } from "@/services/article.service";
import { getAllClients } from "@/services/client.service";
import { getAllSales } from "@/services/sales.service";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const SalesPage = async () => {
  const sales = getAllSales();

  const [clients, articles] = await Promise.all([
    getAllClients(),
    getAllArticles(),
  ]);
  return (
    <main className=" flex flex-col gap-10 ">
      <header className="flex justify-between items-center">
        <h1>Ventas</h1>
        <Link href={"/sales/create"}>
          <Button color="primary">
            <PlusCircleIcon className="w-6 h-6" /> Crear
          </Button>
        </Link>
      </header>
      <Await promise={sales}>
        {(sales) => (
          <SaleWrapper
            sales={sales.map((sale) => {
              return {
                ...sale,
                calification: Math.ceil(Math.random() * 100) + 1,
              };
            })}
            clients={clients}
            articles={articles}
          />
        )}
      </Await>
    </main>
  );
};

export default SalesPage;
