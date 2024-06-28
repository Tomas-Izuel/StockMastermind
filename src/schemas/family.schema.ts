import { z } from "zod";

export const FamilySchema = z.object({
  id: z.number(),
  name: z.string(),
});
