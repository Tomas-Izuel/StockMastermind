import { z } from "zod";
import { FamilySchema } from "./family.schema";

export const transform = (val: string) => {
  const numberVal = Number(val);
  if (isNaN(numberVal)) {
    throw new Error("Invalid number");
  }
  return numberVal;
};

export const ArticleSchema = z.object({
  id: z.number(),
  name: z.string(),
  model: z.string().nullable(),
  brand: z.string().nullable(),
  description: z.string().nullable(),
  storage_cost: z.number().nullable(),
  stock: z.number().nullable(),
  price: z.number().nullable(),
  security_stock: z.number().nullable(),
  max_stock: z.number().nullable(),
  request_point: z.number().nullable(),
  family_id: z.number().nullable(),
  family: FamilySchema.nullable(),
});

export const CreateArticleSchema = z.object({
  name: z.string(),
  model: z.string(),
  brand: z.string(),
  description: z.string().optional(),
  storage_cost: z.string().transform(transform),
  stock: z.string().transform(transform),
  price: z.string().transform(transform),
  family_id: z.string().transform(transform),
});
