// src/pages/api/client.ts
import { createClient } from "@/services/client.service";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return new Response(null, { status: 400, statusText: "Invalid body" });
  }

  try {
    const response = await createClient(body);
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
