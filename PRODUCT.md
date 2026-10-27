# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters and employers.** They check Jens' skills and projects before or during a
  job process. They arrive with limited time and need to see quickly what he builds and how he thinks.
- **Jens himself.** The site is also his learning journal: a place to document and consolidate what
  he learns, builds, reads and watches.
- Readers who land on a single article through search are not a named target audience, but
  "learn something useful" is a confirmed success outcome, so articles must work on their own.

## Product Purpose

jensettl.com is Jens' business card and blog in one. The blog feed stays the main surface; a
separate Projects page highlights the work he wants to be judged by.

After a few minutes, a visitor should:

- know what Jens can build, shown through real projects;
- be able to get in touch;
- have learned something useful from a post;
- have a reason to come back or follow (new posts, RSS).

## Positioning

Process thinking first: understanding and improving business processes (BPM/BPMN, process mining,
RPA), currently with AI and automation (n8n, Python, LLM tools) as the main means. Around that, the
site is an honest journal of the general IT topics that come up along the way. It is a builder's
and learner's record, not a polished agency portfolio.

## Operating Context

- Three kinds of posts, each with its own section and URL: **projects** (coding projects Jens built),
  **articles** (topics he read about, watched, including YouTube videos and talks, or tried out) and
  **reviews** (books, so far in the same subject area).
- Posts are written with an AI writing assistant that follows `CLAUDE.md` and the `write-post` skill
  (`.claude/skills/write-post/SKILL.md`). The assistant must not invent experience, opinions or numbers.
- Topics are grouped into eight categories (AI, Automation, Python, Web Development, Process
  Management, Tools, Learning, Book Review); specific technologies are tags.
- Some posts offer downloads (cheat sheets, n8n workflow JSON, PDFs).

## Capabilities and Constraints

- Static Jekyll 4 site, hosted for free on GitHub Pages under the custom domain jensettl.com, deployed
  by GitHub Actions on every push to `main`. **Must stay free to host**: no paid services.
- **English only**, for posts and interface.
- Post URLs are permanent: `/projects/<slug>/`, `/articles/<slug>/`, `/reviews/<slug>/`; older
  `/PRJ-…`, `/TOP-…`, `/BR-…` URLs redirect and must keep working. Files in `assets/download/` keep
  their URLs.
- Built on the Memoirs theme (Bootstrap 4, jQuery); Bootstrap is vendored and not edited directly.
- Site search runs client-side (lunr). Comments, analytics and newsletter are off; they are
  optional and only switched on with Jens' own accounts.
- **Contact channels:** email (ettljens@gmail.com) and GitHub (github.com/jensettl). No LinkedIn
  or CV download for now.

## Brand Commitments

- The **JE logo** stays part of the identity.
- Site name: "Jens' Blog"; author name shown as "Jens".
- Voice: first person, practical, starting from a real problem or interest; no hype. The detailed
  writing rules live in the `write-post` skill.

## Evidence on Hand

- 30 published posts in `_posts/`: 12 projects, 17 articles, 1 book review, each with its own cover image.
- Code for several projects on GitHub (github.com/jensettl), linked from the posts.
- Downloads in `assets/download/` and in post folders (cheat sheets, n8n workflows).
- Avatar (`assets/images/avatar-jens.png`) and logo (`assets/images/logo_black_cropped.png`).
- **Absent, do not fabricate:** testimonials, employer or client names, metrics, certifications, a CV,
  a LinkedIn profile, or quotes. The Ollama resume analyzer project is still a placeholder post, and
  "How I Built This Blog" contains `TODO(jens)` notes that only Jens can fill.

## Product Principles

1. **Projects prove the skill.** A recruiter should find real projects within seconds, with what was
   built, how, and what Jens learned.
2. **Process before tool.** Frame work around the process or problem being improved; AI and
   automation are the means, not the headline.
3. **An honest journal.** Posts may be small or in progress; never inflate expertise or invent results.
4. **Easy to reach.** Email and GitHub are always findable, from any page.
5. **Free, static and durable.** No paid services, no broken links: URLs and downloads stay stable.

## Accessibility & Inclusion

WCAG 2.1 AA is a firm requirement: text contrast, keyboard operation, visible focus and screen
reader labels on every page.
