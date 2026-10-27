---
title: "How I Built This Blog with Jekyll, GitHub Pages and an AI Writing Assistant"
categories: [ Web Development ]
tags: [ jekyll, github-pages, blogging, ai-assisted-writing ]
image: cover.jpg
description: "How this blog is set up: a Jekyll theme, GitHub Pages, one folder per post and an AI assistant that follows my own writing rules."
toc: true
redirect_from: [ /TOP-template-instructions/ ]
---

> This blog runs on a free Jekyll theme, is hosted for free on GitHub Pages and lives in a single Git repository. Here is how it is set up, how I write a post, and what I changed along the way.

## Why a Static Blog

A static site generator like **Jekyll** turns Markdown files into plain HTML. There is no database and no server to maintain, and the whole site is versioned in Git: every post, image and layout change is a commit.

## The Stack

- **[Jekyll 4](https://jekyllrb.com)** builds the site from Markdown.
- **[Memoirs](https://github.com/wowthemesnet/jekyll-theme-memoirs)** by WowThemes is the theme: a clean, Medium-like layout based on Bootstrap 4.
- **GitHub Pages** hosts it, with my own domain (`jensettl.com`) set via a `CNAME` file.
- **GitHub Actions** builds and deploys the site on every push to `main`.


## From Template to My Own Site

A theme gives you a working blog in minutes, but it also ships with the author's demo content and settings. Things I changed:

- Removed the theme's demo author, pages and placeholder analytics, comment and newsletter IDs.
- Added a **Projects** page that lists every project write-up with a thumbnail and short description.
- Switched the deployment from GitHub's default Pages build to my own workflow. The default build only allows a fixed set of plugins and an older Jekyll version; my own workflow uses exactly the gems in my `Gemfile.lock`, so the live site matches what I see locally.
- Reduced dozens of one-off categories to a handful of topics, with specific technologies as tags.
- added custom CSS to make the site look more like my personal style
- added note/tip/warning boxes to highlight important points or provide additional context.
- added a download button to encourage readers to download the code.


## How a Post Is Organized

Every post lives in its own folder, together with everything it uses:

```
_posts/projects/2025-10-22-heic-converter/
  2025-10-22-heic-converter.md
  cover.png
  screenshot.png
```

The folder also decides the address: this post is published at `/projects/heic-converter/`. Images are referenced by file name only, for example `![Screenshot](screenshot.png)`, so they also show up in the Markdown preview of my editor. The plugin [jekyll-postfiles](https://github.com/nhoizey/jekyll-postfiles) copies them next to the published post. Settings that are the same for every post (layout, author, and whether it's a project, article or review) come from `defaults` in `_config.yml` instead of being repeated in each file.

The front matter of a post is short:

```yaml
---
title: "How I Built This Blog"
categories: [ Web Development ]
tags: [ jekyll, github-pages ]
image: cover.png
toc: true      # optional: adds the summary box at the top
---
```

## Writing with an AI Assistant

I write posts together with an AI coding agent ([Claude Code](https://claude.com/claude-code)) that works directly in the repository. To keep the posts consistent and in my own voice, the repo contains two instruction files:

- `CLAUDE.md` describes the project: folder structure, what must never change (like post URLs) and how to build the site.
- A **write-post skill** is the actual writing guide: which questions to ask me first, the structure for projects, articles and reviews, style rules, and how to handle images.

The most important rule: the assistant must never invent experiences, opinions or numbers. Where it needs something only I can provide, it leaves a visible to-do in the text for me to fill in.



## Custom Elements

For highlighting parts of a post I added three boxes:

<div class="note">
  <b>Note:</b> This is a note.
</div>

<div class="tip">
  <b>Tip:</b> This is a tip.
</div>

<div class="warning">
  <b>Warning:</b> This is a warning.
</div>

```html
<div class="note">
  <b>Note:</b> This is a note.
</div>
```

Use `tip` or `warning` as the class for the other two.

## Conclusion

This simple blog is a really nice practice for writing and also make my content accessible to everyone. It's a great way to learn how to write better, and it's fun to see what I can do with this. Since the world is changing at such a fast pace, it's important to stay up-to-date with new technologies and trends. This blog will help me keep up with that and share my insights with others.
