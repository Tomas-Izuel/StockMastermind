import { SaleArticleSchema, SaleSchema } from "@/schemas/sale.schema";
import { z } from "zod";

export type Sale = z.infer<typeof SaleSchema>;
export type SaleArticle = z.infer<typeof SaleArticleSchema>;
