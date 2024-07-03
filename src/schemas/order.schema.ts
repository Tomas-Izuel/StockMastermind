import { z } from "zod";

export const transform = (val: string) => {
  const numberVal = Number(val);
  if (isNaN(numberVal)) {
    throw new Error("Invalid number");
  }
  return numberVal;
};

export const OrderSchema = z.object({
  id: z.number(),
  quantity: z.number().nullable(),
  subtotal: z.number().nullable(),
  total: z.number().nullable(),
  article_id: z.number().nullable(),
  provider_id: z.number().nullable(),
  status_id: z.number().nullable(),
});

export const CreateOrderSchema = z.object({
  quantity: z.string().transform(transform),
  article_id: z.string().transform(transform),
  provider_id: z.string().transform(transform),
});
