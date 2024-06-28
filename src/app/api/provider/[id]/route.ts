import { addArticlesToProvider } from "@/services/provider.service";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log("first");
  const body = await req.json();
  if (!body) {
    return Response.error();
  }
  const response = addArticlesToProvider(body, params.id);
  return Response.json(response);
}
