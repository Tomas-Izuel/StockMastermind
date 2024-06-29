import { DemandSchema } from "@/schemas/demand.schema";

export const getAllDemands = async () => {
  const response = await fetch("http://localhost:8080/demand-history", {
    cache: "no-cache",
  });
  const data = await response.json();
  return DemandSchema.array().parse(data);
};
