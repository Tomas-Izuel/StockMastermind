import { SaleSchema } from "@/schemas/sale.schema";

export const getAllSales = async () => {
  const response = await fetch("http://localhost:8080/sale", {
    cache: "no-cache",
  });
  const data = await response.json();
  const sales = SaleSchema.array().parse(data);
  return sales;
};

export const createSale = async (sale: any) => {
  console.log(sale);
  const response = await fetch("http://localhost:8080/sale", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sale),
  });
  const data = await response.json();
  return data;
};
