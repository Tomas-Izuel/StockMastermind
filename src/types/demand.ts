import { DemandSchema } from "@/schemas/demand.schema";
import { z } from "zod";

export type Demand = z.infer<typeof DemandSchema>;
