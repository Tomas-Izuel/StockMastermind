import { CreateOrderSchema, OrderSchema } from "@/schemas/order.schema";
import { z } from "zod";

export type Order = z.infer<typeof OrderSchema>;

export type CreateOrder = z.infer<typeof CreateOrderSchema>;