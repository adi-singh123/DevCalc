import "dotenv/config";
import { config } from "dotenv";
import { createClient } from "@libsql/client";

config({ path: ".env.local", override: false });

const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();

if (!url || !authToken) {
  throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required in .env.local.");
}

const client = createClient({ url, authToken });

try {
  const result = await client.execute("SELECT 1 AS connected");
  const connected = Number(result.rows[0]?.connected) === 1;

  if (!connected) {
    throw new Error("Turso returned an unexpected connection-check result.");
  }

  console.log("Turso connection successful.");
} finally {
  client.close();
}
