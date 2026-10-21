UPDATE blog_posts
SET
  image_url = '/blog-image/' || slug,
  image_alt = title
WHERE status = 'published';
