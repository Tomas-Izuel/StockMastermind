import CreateOrderForm from "@/components/order/CreateOrderForm";
import { getAllProviders } from "@/services/provider.service";

const CreateOrder = async () => {
  const providers = await getAllProviders();
  return (
    <main className="">
      <h1>Crear orden</h1>
      <CreateOrderForm providers={providers} />
    </main>
  );
};

export default CreateOrder;
