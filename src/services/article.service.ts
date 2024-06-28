import { ArticleSchema } from "@/schemas/articles.schema";

export const getAllArticles = async () => {
  const response = await fetch("http://localhost:8080/article");
  const data = await response.json();
  return ArticleSchema.array().parse(data);
};
