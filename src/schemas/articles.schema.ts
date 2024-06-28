import { z } from "zod";
import { FamilySchema } from "./family.schema";

const transform = (val: string) => {
  const numberVal = Number(val);
  if (isNaN(numberVal)) {
    throw new Error("Invalid number");
  }
  return numberVal;
};

export const ArticleSchema = z.object({
  id: z.number(),
  name: z.string(),
  model: z.string(),
  brand: z.string(),
  description: z.string().nullable(),
  storage_cost: z.number(),
  stock: z.number().nullable(),
  price: z.number().nullable(),
  security_stock: z.number().nullable(),
  max_stock: z.number().nullable(),
  request_point: z.number().nullable(),
  family_id: z.number(),
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
