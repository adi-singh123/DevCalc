import "server-only";

import { createClient, type Client } from "@libsql/client";

declare global {
  // Reuse the connection during Next.js development hot reloads.
  var devcalcTursoClient: Client | undefined;
}

function getRequiredEnvironmentVariable(name: "TURSO_DATABASE_URL" | "TURSO_AUTH_TOKEN") {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function createTursoClient() {
  return createClient({
    url: getRequiredEnvironmentVariable("TURSO_DATABASE_URL"),
    authToken: getRequiredEnvironmentVariable("TURSO_AUTH_TOKEN"),
  });
}

export function getTursoClient(): Client {
  globalThis.devcalcTursoClient ??= createTursoClient();
  return globalThis.devcalcTursoClient;
}
