# DevCalc database

The Turso database schema is managed only through the numbered SQL files in
`database/migrations`. Run `npm run db:migrate` to apply pending migrations.
Never edit a migration after it has been applied; add a new numbered migration.

## `blog_posts`

| Column | Turso/SQLite type | Purpose |
| --- | --- | --- |
| `id` | `INTEGER` | Auto-incrementing internal primary key. |
| `slug` | `TEXT` | Unique public route segment for `/blog/{slug}`. |
| `title` | `TEXT` | Visible article title. |
| `seo_title` | `TEXT` | Search and social metadata title. |
| `seo_description` | `TEXT` | Search and social metadata description. |
| `description` | `TEXT` | Listing card and article introduction. |
| `category` | `TEXT` | Article category used for filtering and related content. |
| `author` | `TEXT` | Public author name. |
| `published_at` | `TEXT` | ISO date or timestamp used as the publication date. |
| `reading_time` | `TEXT` | Human-readable value such as `8 min read`. |
| `image_url` | `TEXT` | Optional site-relative or absolute hero image URL. |
| `image_alt` | `TEXT` | Optional accessible image alternative text. |
| `keywords_json` | `TEXT` (JSON) | JSON array of SEO keywords. |
| `last_verified_at` | `TEXT` | Optional ISO date/timestamp of editorial verification. |
| `effective_date` | `TEXT` | Optional rule/scheme effective date wording. |
| `sources_json` | `TEXT` (JSON) | JSON array of cited official sources. |
| `related_calculator_slugs_json` | `TEXT` (JSON) | JSON array of related calculator slugs. |
| `content_json` | `TEXT` (JSON) | Ordered article sections, paragraphs, lists, tables, images, and code. |
| `faqs_json` | `TEXT` (JSON) | JSON array of question-and-answer objects. |
| `status` | `TEXT` | `draft`, `published`, or `archived`. Public queries return only `published`. |
| `is_featured` | `INTEGER` | SQLite boolean (`0` or `1`) for featured ordering. |
| `created_at` | `TEXT` | Database creation timestamp. |
| `updated_at` | `TEXT` | Automatically maintained database update timestamp. |

JSON columns have `json_valid(...)` checks. Publication status and boolean
values also have database-level checks, and common list/category queries are
indexed.
