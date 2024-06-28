// src/services/client.service.ts

import { ClientSchema } from "@/schemas/clients.schema";
import { CreateClient } from "@/types/client";

export const getAllClients = async () => {
  const response = await fetch("http://localhost:8080/client", {
    cache: "no-cache",
  });
  const data = await response.json();
  return ClientSchema.array().parse(data);
};

export const createClient = async (client: CreateClient) => {
  const response = await fetch("http://localhost:8080/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });
  const data = await response.json();
  return ClientSchema.parse(data);
};
