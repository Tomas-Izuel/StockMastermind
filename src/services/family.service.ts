import { ArticleSchema } from "@/schemas/articles.schema";
import { FamilySchema } from "@/schemas/family.schema";

export const getAllFamilyCategories = async () => {
  const response = await fetch("http://localhost:8080/family");
  const data = await response.json();
  return FamilySchema.array().parse(data);
};
