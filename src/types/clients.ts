import { ArticleSchema } from "@/schemas/articles.schema";
import { z } from "zod";

export type Article = z.infer<typeof ArticleSchema>;
