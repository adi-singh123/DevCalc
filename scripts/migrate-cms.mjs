import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { config } from "dotenv";
import { createClient } from "@libsql/client";

config({ path: ".env.local", override: false, quiet: true });
const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();
if (!url || !authToken) throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required.");

const migrationNames = [
  "017_create_cms_images.sql",
  "018_remove_cms_login_attempts.sql",
];
const client = createClient({ url, authToken });

try {
  await client.execute("CREATE TABLE IF NOT EXISTS devcalc_schema_migrations (name TEXT PRIMARY KEY, checksum TEXT NOT NULL, applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)");

  for (const name of migrationNames) {
    const sql = await readFile(join(process.cwd(), "database", "migrations", name), "utf8");
    const checksum = createHash("sha256").update(sql).digest("hex");
    const result = await client.execute({ sql: "SELECT checksum FROM devcalc_schema_migrations WHERE name = ?", args: [name] });

    if (result.rows.length) {
      if (result.rows[0]?.checksum !== checksum) throw new Error(`${name} changed after it was applied; create a new migration instead.`);
      console.log(`${name} already applied.`);
      continue;
    }

    await client.executeMultiple(sql);
    await client.execute({ sql: "INSERT INTO devcalc_schema_migrations (name, checksum) VALUES (?, ?)", args: [name, checksum] });
    console.log(`Applied ${name}.`);
  }
} finally {
  client.close();
}
