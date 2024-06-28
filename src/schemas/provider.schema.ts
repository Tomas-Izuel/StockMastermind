import { z } from "zod";
import { transform } from "./articles.schema";

export const ProviderSchema = z.object({
  cuit: z.number(),
  id: z.number(),
  name: z.string(),
  shipping_time: z.number(),
  shipping_cost: z.number().nullable(),
  is_default: z.boolean(),
});

export const CreateProviderSchema = z.object({
  cuit: z.string().transform(transform),
  name: z.string(),
  shipping_time: z.string().transform(transform),
  shipping_cost: z.string().transform(transform),
  is_default: z.boolean().optional().default(false),
});
