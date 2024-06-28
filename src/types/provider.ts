import {
  CreateProviderSchema,
  ProviderSchema,
} from "@/schemas/provider.schema";
import { z } from "zod";

export type Provider = z.infer<typeof ProviderSchema>;
export type CreateProvider = z.infer<typeof CreateProviderSchema>;
