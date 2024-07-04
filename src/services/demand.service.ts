import { DemandSchema } from "@/schemas/demand.schema";

export const getAllDemands = async () => {
  const response = await fetch("http://localhost:8080/demand-history", {
    cache: "no-cache",
  });
  const data = await response.json();
  return DemandSchema.array().parse(data);
};

export const calculateDemand = async (data: { periods: string, article_id: string }) => {
  try {
    const response = await fetch(`http://localhost:8080/demand/calculate?periods=${data.periods}&article_id=${data.article_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const res = await response.json();
    console.log(res)
    return res;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};