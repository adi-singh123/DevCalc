import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { config } from "dotenv";
import { createClient } from "@libsql/client";

config({ path: ".env.local", override: false, quiet: true });

const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();

if (!url || !authToken) {
  throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required in .env.local.");
}

const migrationsDirectory = join(process.cwd(), "database", "migrations");
const client = createClient({ url, authToken });

try {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS devcalc_schema_migrations (
      name TEXT PRIMARY KEY,
      checksum TEXT NOT NULL,
      applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const migrationNames = (await readdir(migrationsDirectory))
    .filter((name) => /^\d+.*\.sql$/i.test(name))
    .sort((left, right) => left.localeCompare(right));

  for (const name of migrationNames) {
    const sql = await readFile(join(migrationsDirectory, name), "utf8");
    const checksum = createHash("sha256").update(sql).digest("hex");
    const existing = await client.execute({
      sql: "SELECT checksum FROM devcalc_schema_migrations WHERE name = ?",
      args: [name],
    });

    if (existing.rows.length > 0) {
      if (existing.rows[0]?.checksum !== checksum) {
        throw new Error(`Applied migration ${name} has been modified. Add a new migration instead.`);
      }

      console.log(`Skipped ${name} (already applied).`);
      continue;
    }

    await client.executeMultiple(sql);
    await client.execute({
      sql: "INSERT INTO devcalc_schema_migrations (name, checksum) VALUES (?, ?)",
      args: [name, checksum],
    });
    console.log(`Applied ${name}.`);
  }

  console.log("Turso migrations are up to date.");
} finally {
  client.close();
}
