import { ClientSchema, CreateClientSchema } from "@/schemas/client.schema";
import { z } from "zod";

export type Client = z.infer<typeof ClientSchema>;

export type CreateClient = z.infer<typeof CreateClientSchema>;