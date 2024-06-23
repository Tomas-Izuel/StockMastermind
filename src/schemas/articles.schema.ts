import { z } from "zod";

export const ArticleSchema = z.object({
  name: z.string(),
  model: z.string(),
  brand: z.string(),
  storage_cost: z.number(),
  id: z.number(),
});
