import { ProviderSchema } from "@/schemas/provider.schema";
import { CreateProvider } from "@/types/provider";

export const getAllProviders = async () => {
  const response = await fetch("http://localhost:8080/provider", {
    cache: "no-cache",
  });
  const data = await response.json();
  return ProviderSchema.array().parse(data);
};

export const createProvider = async (provider: CreateProvider) => {
  const response = await fetch("http://localhost:8080/provider", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(provider),
  });
  return response.ok;
};

export const addArticlesToProvider = async (
  data: { providerId: string; articles: any }[],
  id: string
) => {
  const response = await fetch(
    `http://localhost:8080/provider/${id}/add-articles`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.ok;
};
