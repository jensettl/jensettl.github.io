# jensettl.com

Personal website of Jens: a business card plus blog with projects, articles and book reviews.
Jekyll 4 site, deployed to GitHub Pages by `.github/workflows/jekyll-deploy.yml` on every push to `main`.
A push to `main` publishes immediately, so never commit or push unless asked.

## Writing or editing posts

Use the `write-post` skill (`.claude/skills/write-post/SKILL.md`). It holds the workflow,
front matter, structure per post type and the style guide. Follow it for every new post and
for larger rewrites of existing ones.

## Structure

- `_posts/{projects,articles,reviews}/<YYYY-MM-DD>-<slug>/`: one folder per post, containing
  `<same name>.md` plus its images and downloads. The folder sets the type and the URL:
  `_posts/projects/2025-10-22-heic-converter/` is published at `/projects/heic-converter/`.
  Projects are coding projects, articles are topics Jens read, watched or tried (including
  videos), reviews are books.
- `layout`, `author` and `type` come from `defaults` in `_config.yml`: don't repeat them in posts.
- Post files are referenced by bare file name (`cover.png`, `![Alt](diagram.png)`).
  `jekyll-postfiles` publishes them at the post URL; `_plugins/post_image.rb` resolves `image:`.
- `assets/` is for site-wide files only (logo, avatar, icons, CSS, JS). Never add post images there.
- `_pages/`: about, categories, tags, and the overviews `/projects/`, `/articles/`, `/reviews/`
  (all three use `_includes/post-list.html`, filtered by `type`).

## Things that must not change without asking

- **URLs.** A post's URL is `/<type>s/<slug>/`, from its section folder and file name. Renaming
  the file or moving it to another section changes the live URL; if that's unavoidable, add the
  old URL to the post's `redirect_from` (jekyll-redirect-from). Never remove `redirect_from` entries:
  they keep the old `/PRJ-…`, `/TOP-…`, `/BR-…` links working.
- **`assets/download/`.** Older posts link files there and external sites may too.
- **`_sass/bootstrap/`.** Vendored Bootstrap 4, don't edit.

## Commands

```bash
bundle exec jekyll serve --livereload     # http://localhost:4000
JEKYLL_ENV=production bundle exec jekyll build
```

After changing posts, build and check the output for warnings. A "Cover image: … not found"
warning means the post's `image:` file is missing from its folder. Restart `serve` after
editing `_config.yml` or `_plugins/`.
