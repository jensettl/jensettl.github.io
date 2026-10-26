---
name: write-post
description: Create or rewrite a blog post for jensettl.com (project write-up, article or book review). Use whenever the user wants to write, draft, outline, extend or polish a post in _posts/, or turn notes, a repo or a book into a post.
---

# Writing a post for jensettl.com

The site is Jens' business card. Posts show what he builds, what he learns and how he thinks.
Your job is to help him write them in **his** voice, from **his** material, never to make up
experience he doesn't have.

## 1. Gather before writing

Ask for whatever is missing. Ask once, all together, not one question at a time:

- **Type**: project, article or review (see section 3)
- **Topic and slug**: slug = lowercase words joined by hyphens, e.g. `heic-converter`
- **Source material**: notes, a repo link or path, screenshots, book highlights, an existing draft
- **The personal angle**: why he built or read it, what was hard, what he'd do differently.
  This is what makes a post his, so it can't be invented.

If you can read the source yourself (a local repo, a GitHub link), do that before asking.

**Never invent** personal experience, opinions, results, numbers, timelines or quotes. Where
something only Jens can supply is missing, leave a visible marker and list it at the end:

```markdown
<!-- TODO(jens): how long did the migration take? -->
```

## 2. Create the post

```
_posts/<section>/<YYYY-MM-DD>-<PREFIX>-<slug>/<YYYY-MM-DD>-<PREFIX>-<slug>.md
```

| Type | section | PREFIX |
|---|---|---|
| project | `projects` | `PRJ` |
| article | `articles` | `TOP` |
| review | `reviews` | `BR` |

Use today's date. The file name becomes the URL (`/PRJ-heic-converter/`), so choose the slug
carefully. Once the post is pushed, renaming it breaks links.

Front matter: `layout`, `author` and `type` are set by the folder, so leave them out:

```yaml
---
title: "[PROJECT] Local HEIC-JPEG Converter"   # projects only get the [PROJECT] prefix
categories: [ Python ]                         # 1-2, from the list below
tags: [ heic, pillow, cli ]                    # specific tech, tools, concepts; lowercase
image: cover.png                               # file in the post folder
description: "One sentence for search results and link previews."
# rating: 4.5                                  # reviews only: 0-5 in steps of .5, shows stars
# toc: true                                    # long posts (more than about 5 sections): adds a summary box
---
```

**Categories**: choose 1-2 of: `AI`, `Automation`, `Python`, `Web Development`,
`Process Management`, `Tools`, `Learning`, `Book Review`. Anything more specific (n8n, gRPC,
Streamlit…) goes in `tags`. If nothing fits, ask instead of creating a new category.
Older posts don't follow this list yet; don't copy their categories.

## 3. Structure per type

Every post starts the same way:

1. **Summary blockquote**: 1-3 sentences, `> …`. It's the first paragraph, so it becomes the
   excerpt on the home page cards and the Projects page. Say what it is and why it matters.
2. **Hero image** right after it, if there is one (screenshot, GIF, diagram).

Then:

**Project** (`[PROJECT] …`), usually 400-900 words
- `## The Problem`: the situation or annoyance that started it, in first person
- `## The Solution` or `## How It Works`: architecture, a diagram if there is one, key decisions
- `## Features`: bullet list, **bold label**: one-line explanation
- `## Tech Stack`: short list
- `## Challenges and Learnings`: the most valuable section for a reader judging Jens' skills
- `## What's Next` (optional)
- `## Code`: link the GitHub repository

**Article** (topic explainer, tutorial or tool review), usually 500-1000 words
- `## Introduction`: why this topic, where Jens ran into it
- 3-6 `##` sections, building from concept to practice; code examples where useful
- `## Conclusion`: the takeaway in 2-4 sentences, plus when he would or wouldn't use it

**Review** (book, course), usually 800-1500 words
- `## Introduction`: what the book is, who wrote it, why Jens read it
- One `##` per big idea or chapter, each with a concrete real-world example
- `## My Takeaways`: what he actually changed or will apply
- `## Who Should Read It`
- set `rating:` in front matter only if Jens gives one

## 4. Style

- **Voice**: first person ("I built…", "I ran into…"), friendly and practical, like explaining
  to a colleague. English, consistent spelling.
- **Headings**: `##` for sections, `###` below that. Never `#`: the title is already the H1.
- **Paragraphs**: short, 2-4 sentences. Use lists for features, steps and comparisons.
- **Bold**: key terms the first time they appear, a few per section at most.
- **Callouts**: `>` blockquotes for a key insight or tip, sparingly.
- **Code**: fenced blocks with a language tag (` ```python `). Code containing `{{` or `{%`
  (n8n expressions, Jinja, Liquid) must be wrapped in `{% raw %}` … `{% endraw %}`, otherwise
  Jekyll tries to run it.
- **Links**: descriptive text (`[the GitHub repository](…)`), never "click here".
- **Keyboard keys**: `<kbd>Alt</kbd> + <kbd>Space</kbd>`.
- **Avoid**: filler openers ("In today's fast-paced world…"), hype words ("revolutionary",
  "game-changer", "seamless"), emojis, repeating the summary as the conclusion, and
  explanations a reader of this blog doesn't need.
- When editing Jens' own text, fix spelling and grammar but keep his wording and opinions.

## 5. Images and downloads

- Everything goes **in the post's folder**, named in lowercase with hyphens: `cover.png`,
  `architecture-diagram.png`, `demo.webp`.
- Reference by file name only: `![Architecture of the converter](architecture-diagram.png)`.
  Alt text describes what the image shows.
- **Cover**: `cover.png` (or `.jpg`), landscape, about 1200×630. It's used on cards and
  in link previews.
- Keep images under ~300 KB. Prefer `.webp` for screenshots and GIF-like demos.
- If an image doesn't exist yet, don't link a missing file. Leave
  `<!-- TODO(jens): screenshot of the settings dialog -->` and list it at the end.
- Downloads also go in the post folder, shown with the download box:

```liquid
{% include download-box.html
   url="cheat-sheet.pdf"
   image_url="/assets/icons/pdf-icon.png"
   type="pdf"
   name="cheat-sheet.pdf"
   size="190 KB"
%}
```

Icons available: `/assets/icons/pdf-icon.png`, `/assets/icons/json-icon.png`.

## 6. Check and hand over

1. Build: `JEKYLL_ENV=production bundle exec jekyll build`. There must be no new warnings,
   including no "Cover image … not found".
2. If the dev server is running, open the post at `http://localhost:4000/<PREFIX>-<slug>/`
   and check that the images, the card on the home page and (for projects) `/projects` look right.
3. Report to Jens:
   - the file path and future URL
   - every `TODO(jens)` left in the text
   - images he still needs to add, with the file names the post expects
4. Don't commit or push unless he asks. A push to `main` publishes the post.
