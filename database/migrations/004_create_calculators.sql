CREATE TABLE IF NOT EXISTS calculators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  is_popular INTEGER NOT NULL DEFAULT 0 CHECK (is_popular IN (0, 1)),
  compare_with_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(compare_with_json)),
  seo_title TEXT NOT NULL,
  seo_description TEXT NOT NULL,
  seo_keywords_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(seo_keywords_json)),
  seo_content TEXT NOT NULL DEFAULT '',
  editorial_intro TEXT,
  benchmark_context_json TEXT CHECK (benchmark_context_json IS NULL OR json_valid(benchmark_context_json)),
  steps_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(steps_json)),
  formula_json TEXT NOT NULL CHECK (json_valid(formula_json)),
  faqs_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(faqs_json)),
  renderer_key TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_calculators_status_sort
  ON calculators (status, sort_order, name);

CREATE INDEX IF NOT EXISTS idx_calculators_category_status_sort
  ON calculators (category, status, sort_order, name);

CREATE INDEX IF NOT EXISTS idx_calculators_popular_status
  ON calculators (is_popular DESC, status, sort_order);

CREATE TRIGGER IF NOT EXISTS trg_calculators_updated_at
AFTER UPDATE ON calculators
FOR EACH ROW
WHEN NEW.updated_at = OLD.updated_at
BEGIN
  UPDATE calculators
  SET updated_at = CURRENT_TIMESTAMP
  WHERE id = NEW.id;
END;
