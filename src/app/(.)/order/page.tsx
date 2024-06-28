import OrderWrapper from "@/components/order/OrderWrapper";
import Await from "@/components/common/Await";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { getAllOrders } from "@/services/order.service";

const OrderPage = () => {
  const orders = getAllOrders();
  return (
    <main className=" flex flex-col gap-10">
      <header className="flex justify-between items-center">
        <h1>Órdenes</h1>
        <Link href={"/order/create"}>
          <Button color="primary">
            <PlusCircleIcon className="w-6 h-6" /> Crear
          </Button>
        </Link>
      </header>
      <Await promise={orders}>
      {(orders) => <OrderWrapper orders={orders} />}
      </Await>
    </main>
  );
};

export default OrderPage;
