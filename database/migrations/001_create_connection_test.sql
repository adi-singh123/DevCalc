CREATE TABLE IF NOT EXISTS devcalc_connection_test (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO devcalc_connection_test (message)
SELECT 'DevCalc SQL migration read/write verification'
WHERE NOT EXISTS (
  SELECT 1
  FROM devcalc_connection_test
  WHERE message = 'DevCalc SQL migration read/write verification'
);
