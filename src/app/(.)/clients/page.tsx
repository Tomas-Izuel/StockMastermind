// src/pages/clients/index.tsx
import ClientWrapper from "@/components/clients/ClientWrapper";
import Await from "@/components/common/Await";
import { getAllClients } from "@/services/client.service";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const ClientPage = () => {
  const clients = getAllClients();
  return (
    <main className="flex flex-col gap-10">
      <header className="flex justify-between items-center">
        <h1>Clientes</h1>
        <Link href={"/clients/create"}>
          <Button color="primary">
            <PlusCircleIcon className="w-6 h-6" /> Crear
          </Button>
        </Link>
      </header>
      <Await promise={clients}>
        {(clients) => <ClientWrapper clients={clients} />}
      </Await>
    </main>
  );
};

export default ClientPage;
