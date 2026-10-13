CREATE TABLE IF NOT EXISTS site_pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  page_type TEXT NOT NULL DEFAULT 'WebPage',
  seo_title TEXT NOT NULL,
  seo_description TEXT NOT NULL,
  keywords_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(keywords_json)),
  canonical_path TEXT NOT NULL,
  body_html TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_site_pages_status_slug ON site_pages(status, slug);

CREATE TRIGGER IF NOT EXISTS site_pages_set_updated_at
AFTER UPDATE ON site_pages
FOR EACH ROW
WHEN NEW.updated_at = OLD.updated_at
BEGIN
  UPDATE site_pages SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;
