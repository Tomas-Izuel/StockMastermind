import { createOrder } from "@/services/order.service";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return Response.error();
  }
  const response = await createOrder(body);
  return Response.json(response);
}
