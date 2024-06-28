import { createSale } from "@/services/sales.service";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return Response.error();
  }
  const response = createSale(body);
  return Response.json(response);
}
