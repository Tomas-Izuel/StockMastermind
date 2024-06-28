// src/schemas/client.schema.ts
import { z } from "zod";
import { transform } from "./articles.schema";

export const ClientSchema = z.object({
  id: z.number().optional(),
  name: z.string().nullable(),
  cuit: z.number().nullable(),
});

export const CreateClientSchema = z.object({
  name: z.string(),
  cuit: z.string().transform(transform),
});
