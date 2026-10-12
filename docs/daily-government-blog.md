# Automated government blog publishing

The workflow in `.github/workflows/daily-government-blog.yml` selects a current
official source, generates and validates an article, and inserts it directly
into Turso. It does not modify the repository, open a pull request, or require a
site deployment.

## Required GitHub Actions secrets

- `NVIDIA_API_KEY`
- `TURSO_DATABASE_URL`
- `TURSO_AUTH_TOKEN`

Add them under **Repository settings > Secrets and variables > Actions**. The
workflow runs on its schedule and can also be started with **Run workflow**.

## Publication behavior

Only an article that passes the generator's source, SEO, structure, FAQ and content
validation is inserted with `status = 'published'`. Generation uses a fact ledger,
a corrective editorial pass, an adversarial fact-check pass and deterministic checks
for repetition, malformed text and risky unsupported inference. Thin official updates
remain concise instead of being padded to an arbitrary word count. The website, article route,
metadata, RSS and sitemap read `blog_posts` from Turso. Their cache refreshes
within 60 seconds, so no build or redeploy is required.

The primary source feed is PIB RSS. If PIB blocks that endpoint, the generator falls
back to PIB's official All Press Releases page; it does not substitute third-party news.
If no article passes every check, the workflow fails without inserting a database row.

After insertion, the generator verifies the stored status, keyword count,
section count and FAQ count. The workflow then retries the production article,
`sitemap.xml` and `rss.xml` until the new canonical URL appears in all three.
The workflow fails visibly if publication or discovery verification does not
complete.

Submit `https://www.devcalc.in/sitemap.xml` to Google Search Console only once.
New database articles are added to that sitemap automatically; Google will read
the updated sitemap on its own schedule. Ordinary blog pages are not eligible
for guaranteed instant submission through Google's Indexing API.

```bash
npm run db:migrate
npm run db:blogs:check
```

Schema changes must be new numbered files under `database/migrations`. Never
modify an already-applied migration.
