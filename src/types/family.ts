import { FamilySchema } from "@/schemas/family.schema";
import { z } from "zod";

export type Family = z.infer<typeof FamilySchema>;
