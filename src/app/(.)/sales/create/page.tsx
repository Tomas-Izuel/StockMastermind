import CreateSaleForm from "@/components/sale/CreateSaleForm";
import { getAllArticles } from "@/services/article.service";
import { getAllClients } from "@/services/client.service";

const CreateSale = async () => {
  const clients = await getAllClients();
  const articles = await getAllArticles();
  return (
    <main className="">
      <h1>Registrar venta</h1>
      <CreateSaleForm client={clients} articles={articles} />
    </main>
  );
};

export default CreateSale;
