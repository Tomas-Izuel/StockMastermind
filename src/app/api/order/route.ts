import { createOrder, updateStatusQuantity } from "@/services/order.service";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return Response.error();
  }
  const response = await createOrder(body);
  return Response.json(response);
}

export async function PUT(req: Request) {
  const body = await req.json();
  if (!body) {
    return Response.error();
  }
  const response = await updateStatusQuantity(body.article_id,body.quantity, body.order_id);
  return Response.json(response);
}