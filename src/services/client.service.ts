import { ClientSchema } from "@/schemas/client.schema";
import { Client } from "@/types/client";

export const getAllClient = async () => {
    const response = await fetch("http://localhost:8080/client", {
      method: "GET",
      cache: "no-cache",
    });
    const data = await response.json();
    return ClientSchema.array().parse(data);
};


  export const createClient = async (client: Client) => {
    const response = await fetch("http://localhost:8080/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });
    const data = await response.json();
    console.log(response);
    return ClientSchema.parse(data);

  };