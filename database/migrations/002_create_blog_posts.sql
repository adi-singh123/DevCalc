DROP TABLE IF EXISTS devcalc_connection_test;

CREATE TABLE IF NOT EXISTS blog_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  seo_title TEXT NOT NULL,
  seo_description TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  published_at TEXT NOT NULL,
  reading_time TEXT NOT NULL,
  image_url TEXT NOT NULL DEFAULT '',
  image_alt TEXT,
  keywords_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(keywords_json)),
  last_verified_at TEXT,
  effective_date TEXT,
  sources_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(sources_json)),
  related_calculator_slugs_json TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(related_calculator_slugs_json)),
  content_json TEXT NOT NULL CHECK (json_valid(content_json)),
  faqs_json TEXT NOT NULL CHECK (json_valid(faqs_json)),
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured INTEGER NOT NULL DEFAULT 0 CHECK (is_featured IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published_at
  ON blog_posts (status, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_blog_posts_category_status_published_at
  ON blog_posts (category, status, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_blog_posts_featured_status
  ON blog_posts (is_featured DESC, status, published_at DESC);

CREATE TRIGGER IF NOT EXISTS trg_blog_posts_updated_at
AFTER UPDATE ON blog_posts
FOR EACH ROW
WHEN NEW.updated_at = OLD.updated_at
BEGIN
  UPDATE blog_posts
  SET updated_at = CURRENT_TIMESTAMP
  WHERE id = NEW.id;
END;
