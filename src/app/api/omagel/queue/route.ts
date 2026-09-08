import { handleChat } from "@/src/lib/omagel/api";

export function POST(request: Request) {
  return handleChat(request, "queue");
}
