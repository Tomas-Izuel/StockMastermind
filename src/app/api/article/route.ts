import { createArticle } from "@/services/article.service";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return Response.error();
  }
  const response = createArticle(body);
  return Response.json(response);
}
