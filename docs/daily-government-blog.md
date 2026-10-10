# Daily government-rule blog workflow

This workflow creates one reviewable article draft each day. Every draft must contain at least 3,000 words across at least 14 main-body sections, excluding FAQs. It does not publish directly. A maintainer must check and merge the pull request before the page enters production.

## Setup

1. Revoke any API key that was pasted into chat or source control.
2. Create a restricted NVIDIA API key from NVIDIA Build.
3. In GitHub, open **Settings > Secrets and variables > Actions** and add a repository secret named `NVIDIA_API_KEY`.
4. Enable GitHub Actions and allow workflows to create pull requests under **Settings > Actions > General > Workflow permissions**.
5. Run the workflow manually once from the Actions tab. The schedule runs at 08:00 IST each day.

For local testing, copy `.env.automation.example` to `.env.local`, insert the NVIDIA key, and run `npm run blog:government:generate`. Never commit `.env.local`.

The generator discovers current releases directly from the official Press Information Bureau RSS feed, downloads the official release pages, selects one substantial primary release, then sends only that bounded source material to NVIDIA NIM. It rejects greetings, awards, promotional ceremonies and thin topics. It uses `nvidia/nemotron-3.5-lightning-30b-a3b` for selection and chunked structured writing. It reuses the stable DevCalc site artwork and does not call an image-generation service or OpenAI.

## Editorial review required

- Open every official source and confirm the article accurately reflects it.
- Confirm the notification/rule is recent and the effective date is explicit.
- Check affected people, eligibility, deadlines, exceptions, amounts and examples.
- Remove unsupported predictions or legal, tax, medical, investment or entitlement claims.
- Confirm the title is not a duplicate or near-duplicate of an existing article.
- Confirm the main body provides at least 3,000 useful words without repetition or filler.
- Run the build and preview the page on mobile and desktop.

## HTML source and indexing

Generated articles are stored in the repository and included by `generateStaticParams`. Next.js produces the title, description, headings, paragraphs, tables, FAQs, internal links and official source links as static server-rendered HTML during the production build. Search engines and users viewing page source can read the primary content without running client-side JavaScript. The same article record also creates its canonical metadata, Article and FAQ structured data, Open Graph image and image-sitemap entry.

The generator refuses to write a draft when it cannot obtain a substantial primary official source, 3,000 words of adequate original main content, or a new slug. Merging the pull request registers the page in the blog list and the Next.js sitemap automatically.
