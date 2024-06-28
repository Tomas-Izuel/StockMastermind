import { z } from "zod";
import { FamilySchema } from "./family.schema";

export const ArticleSchema = z.object({
  id: z.number(),
  name: z.string(),
  model: z.string(),
  brand: z.string(),
  description: z.string(),
  storage_cost: z.number(),
  stock: z.number().nullable(),
  price: z.number().nullable(),
  security_stock: z.number().nullable(),
  max_stock: z.number().nullable(),
  request_point: z.number().nullable(),
  family_id: z.number(),
  family: FamilySchema.nullable(),
});
