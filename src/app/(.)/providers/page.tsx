import ArticleWrapper from "@/components/article/ArticleWrapper";
import Await from "@/components/common/Await";
import ProviderWrapper from "@/components/providers/ProviderWrapper";
import { getAllProviders } from "@/services/provider.service";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const ProviderPage = () => {
  const providers = getAllProviders();
  return (
    <main className=" flex flex-col gap-10">
      <header className="flex justify-between items-center">
        <h1>Proveedores</h1>
        <Link href={"/providers/create"}>
          <Button color="primary">
            <PlusCircleIcon className="w-6 h-6" /> Crear
          </Button>
        </Link>
      </header>
      <Await promise={providers}>
        {(providers) => <ProviderWrapper providers={providers} />}
      </Await>
    </main>
  );
};

export default ProviderPage;
