# jensettl.com

Personal website and blog of Jens: projects, notes and learnings on coding, automation and technology.

Live at [jensettl.com](https://jensettl.com). Built with [Jekyll](https://jekyllrb.com) on top of the
[Memoirs theme](https://github.com/wowthemesnet/jekyll-theme-memoirs) by WowThemes (MIT, see `LICENSE.txt`).

## Local development

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## Writing posts

Posts are written with help from an AI agent. The rules it follows live in two places:

- `CLAUDE.md`: repo conventions, loaded automatically in every Claude Code session here
- `.claude/skills/write-post/SKILL.md`: the full writing guide (workflow, front matter,
  structure per post type, style). Run it with `/write-post` in Claude Code.

Every post lives in its own folder together with its files:

```
_posts/projects/2026-10-26-PRJ-heic-converter/
  2026-10-26-PRJ-heic-converter.md
  cover.png          <- front matter `image: cover.png`
  screenshot.png     <- in the text: ![Screenshot](screenshot.png)
  converter.zip      <- downloads work the same way
```

Files are referenced by name only, so they also show in the editor's Markdown preview.
`jekyll-postfiles` copies them next to the post's URL, and `_plugins/post_image.rb`
makes the `image:` cover work on cards, the post header and social previews.
`layout`, `author` and `type` (project / article / review, from the folder) come from
`defaults` in `_config.yml`. The Projects page lists every post with `type: project`.

## Structure

| Path | Content |
|---|---|
| `_posts/projects/`, `_posts/articles/`, `_posts/reviews/` | One folder per post: Markdown plus its images and downloads |
| `_pages/` | Standalone pages (about, projects, categories, tags) |
| `_layouts/`, `_includes/` | Page templates |
| `_plugins/` | Small build hooks (cover image paths) |
| `_sass/` | Styles (vendored Bootstrap 4, theme partials) |
| `assets/images/` | Site-wide images only (logo, avatar) |
| `assets/icons/` | File-type icons for the download box |
| `assets/download/` | Downloads of older posts, kept at their published URLs |

The folder a post is in doesn't change its URL: the permalink is `/:title/`, taken from the file name.

## Deployment

Every push to `main` builds the site with the gems from `Gemfile.lock` and deploys it to GitHub Pages
(`.github/workflows/jekyll-deploy.yml`). The repository's Pages source must be set to **GitHub Actions**.

Optional integrations (Google Analytics, Disqus comments, AdSense) are configured in `_config.yml`
and stay off while their values are empty.
