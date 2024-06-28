import ArticleWrapper from "@/components/clients/ArticleWrapper";
import Await from "@/components/common/Await";
import { getAllArticles } from "@/services/article.service";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const ArticlePage = () => {
  const articles = getAllArticles();
  return (
    <main className=" flex flex-col gap-10">
      <header className="flex justify-between items-center">
        <h1>Articulos</h1>
        <Link href={"/articles/create"}>
          <Button color="primary">
            <PlusCircleIcon className="w-6 h-6" /> Crear
          </Button>
        </Link>
      </header>
      <Await promise={articles}>
        {(articles) => <ArticleWrapper articles={articles} />}
      </Await>
    </main>
  );
};

export default ArticlePage;
