import { calculateDemand } from "@/services/demand.service";

export async function POST(req: Request) {
    const body = await req.json();
    if (!body) {
      return Response.error();
    }
    const response = await calculateDemand(body);
    return Response.json(response);
  }
  