import { OrderSchema, CreateOrderSchema } from "@/schemas/order.schema";
import { Order, CreateOrder } from "@/types/order";

export const getAllOrders = async () => {
  const response = await fetch("http://localhost:8080/order", {
    cache: "no-cache",
  });
  const data = await response.json();
  return OrderSchema.array().parse(data);
};

export const createOrder = async (order: CreateOrder) => {
  const response = await fetch("http://localhost:8080/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  console.log(response);
  return OrderSchema.parse(data);
};
