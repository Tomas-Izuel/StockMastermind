import { ArticleSchema } from "@/schemas/articles.schema";

export const getAllArticles = async () => {
  const response = await fetch("http://localhost:8080/article");
  return ArticleSchema.array().parse(response);
};
