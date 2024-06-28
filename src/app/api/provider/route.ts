import { createProvider } from "@/services/provider.service";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return Response.error();
  }
  const response = createProvider(body);
  return Response.json(response);
}
