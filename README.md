# jensettl.com

Personal website and blog of Jens: projects, notes and learnings on coding, automation and technology.

Live at [jensettl.com](https://jensettl.com). Built with [Jekyll](https://jekyllrb.com) on top of the
[Memoirs theme](https://github.com/wowthemesnet/jekyll-theme-memoirs) by WowThemes (MIT, see `LICENSE.txt`).

## Local development

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## New post

```bash
./new_post.sh <slug> "Post title"
```

Creates `_posts/YYYY-MM-DD-<slug>.md` and an image folder `assets/images/<slug>/`.
Filename prefixes in use: `PRJ-` (project, listed on `/projects`), `TOP-` (topic), `BR-` (book review).

## Structure

| Path | Content |
|---|---|
| `_posts/` | Blog posts and project write-ups |
| `_pages/` | Standalone pages (about, projects, categories, tags) |
| `_layouts/`, `_includes/` | Page templates |
| `_sass/` | Styles (vendored Bootstrap 4, theme partials) |
| `assets/images/<slug>/` | Images per post |
| `assets/download/` | Files offered for download in posts |

## Deployment

Every push to `main` builds the site with the gems from `Gemfile.lock` and deploys it to GitHub Pages
(`.github/workflows/jekyll-deploy.yml`). The repository's Pages source must be set to **GitHub Actions**.

Optional integrations (Google Analytics, Disqus comments, AdSense) are configured in `_config.yml`
and stay off while their values are empty.
