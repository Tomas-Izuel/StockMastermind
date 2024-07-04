import { z } from "zod";

export const DemandSchema = z.object({
  id: z.number(),
  periods: z.string().datetime().optional(),
  quantity_demand: z.number(),
  article_id: z.number(),
});

export const DemandCalculatedSchema = z.object({
  // {"demand_predicted":1100,"errors":{"MeanAbsoluteDeviation":150,"MeanSquaredError":25000,"MeanAbsolutePercentageError":13.985042735042736},"bestMethod":"PromedioMovil","security_stock":355,"request_point":550,"lot_optimum":58,"standard_deviation":177.1690968789108,"max_stock":532,"cgi":4950114896.551724
  demand_predicted: z.number().optional(),
  errors: z.object({
    MeanAbsoluteDeviation: z.number().optional(),
    MeanSquaredError: z.number().optional(),
    MeanAbsolutePercentageError: z.number().optional(),
  }),
  bestMethod: z.string().optional(),
  security_stock: z.number().optional(),
  request_point: z.number().optional(),
  lot_optimum: z.number().optional(),
  standard_deviation: z.number().optional(),
  max_stock: z.number().optional(),
})