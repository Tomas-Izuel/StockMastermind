import { z } from "zod";
import { transform } from "./articles.schema";

export const SaleArticleSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  price: z.number(),
  sale_id: z.number(),
  article_id: z.number(),
});

export const SaleSchema = z.object({
  id: z.number(),
  calification: z.number().optional(),
  date: z.string(),
  total: z.number(),
  client_id: z.number(),
  sale_articles: SaleArticleSchema.array(),
});

export const SaleCreateSchema = z.object({
  // date: Date;
  // total?: number;
  // client_id: number;
  // articles: {
  //   article_id: number;
  //   quantity: number;
  //   price: number;
  // }[];
  client_id: z.string().transform(transform),
  articles: z.array(
    z.object({
      article_id: z.string().transform(transform),
      quantity: z.number(),
      price: z.number(),
    })
  ),
});
