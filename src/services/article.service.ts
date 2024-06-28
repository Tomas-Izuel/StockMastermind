import { ArticleSchema } from "@/schemas/articles.schema";
import { Article } from "@/types/article";

export const getAllArticles = async () => {
  const response = await fetch("http://localhost:8080/article", {
    cache: "no-cache",
  });
  const data = await response.json();
  return ArticleSchema.array().parse(data);
};

export const createArticle = async (article: Article) => {
  const response = await fetch("http://localhost:8080/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
  const data = await response.json();
  console.log(response);
  return ArticleSchema.parse(data);
};
