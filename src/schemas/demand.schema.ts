import { z } from "zod";

export const DemandSchema = z.object({
  id: z.number(),
  period: z.string().datetime(),
  quantity_demand: z.number(),
  article_id: z.number(),
});
