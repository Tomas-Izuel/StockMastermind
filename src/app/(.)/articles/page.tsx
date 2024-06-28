import ArticleWrapper from "@/components/clients/ArticleWrapper";
import Await from "@/components/common/Await";
import { getAllArticles } from "@/services/article.service";

const ArticlePage = () => {
  const articles = getAllArticles();
  return (
    <main className=" flex flex-col gap-10">
      <h1>Articulos</h1>
      <Await promise={articles}>
        {(articles) => <ArticleWrapper articles={articles} />}
      </Await>
    </main>
  );
};

export default ArticlePage;
