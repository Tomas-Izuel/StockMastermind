import { ArticleSchema, CreateArticleSchema } from "@/schemas/articles.schema";
import { z } from "zod";

export type Article = z.infer<typeof ArticleSchema>;

export type CreateArticle = z.infer<typeof CreateArticleSchema>;
