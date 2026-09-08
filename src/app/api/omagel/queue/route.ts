import { handleChat, handleStats } from "@/src/lib/omagel/api";

export function GET() {
  return handleStats();
}

export function POST(request: Request) {
  return handleChat(request, "queue");
}
