---
name: Jens' Blog
description: A lab notebook for projects, articles and book reviews on processes, automation and AI.
colors:
  highlighter-teal: "#40FFDC"
  ink-teal: "#007d66"
  ink-teal-deep: "#005c4b"
  ink: "#111111"
  body-text: "#212529"
  reading-text: "#222222"
  paper: "#f4f4f4"
  surface: "#ffffff"
  faint-surface: "#fafafa"
  hover-wash: "#f5f5f5"
  hairline: "#e8e8e8"
  card-edge: "rgba(17, 17, 17, 0.07)"
  chip-border: "#dddddd"
  muted: "#5f6368"
  nav-slate: "#4a5560"
  code-surface: "#272822"
  tint-project: "#d9fff7"
  tint-article: "#f1ecdf"
  tint-review: "#e8e6f7"
  note-surface: "#eef6fd"
  note-border: "#b7d7f3"
  note-ink: "#0b5394"
  tip-surface: "#ebf8ef"
  tip-border: "#b4e2c1"
  tip-ink: "#1e6b34"
  warning-surface: "#fff4e5"
  warning-border: "#f6cf98"
  warning-ink: "#8a4b00"
typography:
  display:
    fontFamily: "Sen, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "50px"
    fontWeight: 500
    lineHeight: 1.2
  headline:
    fontFamily: "Sen, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "50px"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Sen, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.75
  body-ui:
    fontFamily: "Sen, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  nav:
    fontFamily: "Sen, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
  label:
    fontFamily: "Sen, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  code: "3px"
  sm: "6px"
  md: "8px"
  download: "10px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "20px"
  lg: "30px"
  xl: "50px"
  section: "120px"
components:
  post-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.lg}"
    padding: "20px"
  type-label-project:
    backgroundColor: "{colors.tint-project}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.6px 9.6px"
  type-label-article:
    backgroundColor: "{colors.tint-article}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.6px 9.6px"
  type-label-review:
    backgroundColor: "{colors.tint-review}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.6px 9.6px"
  topic-chip:
    textColor: "{colors.body-text}"
    rounded: "{rounded.pill}"
    padding: "4.8px 13.6px"
  topic-chip-hover:
    backgroundColor: "{colors.hover-wash}"
  nav-link:
    textColor: "{colors.nav-slate}"
    typography: "{typography.nav}"
  nav-link-current:
    textColor: "{colors.ink}"
  link:
    textColor: "{colors.ink-teal}"
  link-hover:
    textColor: "{colors.ink-teal-deep}"
  pagination-page-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    size: "40px"
  project-list-item:
    rounded: "{rounded.lg}"
    padding: "20px 24px"
  callout-note:
    backgroundColor: "{colors.note-surface}"
    textColor: "{colors.reading-text}"
    rounded: "{rounded.sm}"
    padding: "0.9em 1.1em"
  callout-tip:
    backgroundColor: "{colors.tip-surface}"
    textColor: "{colors.reading-text}"
    rounded: "{rounded.sm}"
    padding: "0.9em 1.1em"
  callout-warning:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.reading-text}"
    rounded: "{rounded.sm}"
    padding: "0.9em 1.1em"
  download-box:
    backgroundColor: "{colors.faint-surface}"
    rounded: "{rounded.download}"
    padding: "14px 16px"
  code-block:
    backgroundColor: "{colors.code-surface}"
    rounded: "{rounded.md}"
---

# Design System: Jens' Blog

## Overview

**Creative North Star: "The Lab Notebook"**

The site reads like a well-kept lab notebook: light paper, careful notes in two hands, and one
bright highlighter that marks what matters. Projects, articles and book reviews sit side by side as
entries in the same notebook, each tagged with what kind of entry it is. Work in progress is
welcome here; the design should make an unfinished entry look honest, not broken.

The mood is calm and tidy, curious and personal, technical and precise. Most of every screen is
light grey paper and white sheets; colour arrives only as the highlighter and as soft tints that
classify entries. The interface speaks in Sen, a friendly geometric sans; the long reading text
inside posts switches to Source Serif 4, so reading feels like reading and not like using an app.
Code blocks are dark slabs set into the light page, the only dark surfaces in the system.

This is a personal site, not a company's: never a dark "hacker" terminal look, and never busy or
cluttered with widgets, popups or ads.

**Key Characteristics:**
- Light paper background with white sheets that have a hairline edge; they lift only when you reach for them.
- One signature accent, Highlighter Teal, used to mark, never to write.
- Two typefaces with strict jobs: Sen for interface and headings, Source Serif 4 for reading.
- Entries labelled by type with small tinted pills (project, article, review).
- Generous whitespace and a single reading column inside posts.
- WCAG 2.1 AA contrast on every text colour.

## Colors

A near-monochrome paper palette with one electric highlighter and a set of quiet classification tints.

### Primary
- **Highlighter Teal** (#40FFDC): the signature. It marks rather than writes: the swipe that fills
  behind a card title on hover, the underline under the current navigation item, text selection,
  hover fill on pagination. Its tint is the project label background.
- **Ink Teal** (#007d66): the same teal darkened until it can carry text. All links and the
  "See my projects" call to action. **Deep Ink Teal** (#005c4b) is its hover state.

### Neutral
- **Ink** (#111111): headings, the logo, the current pagination page, emphasis.
- **Body Text** (#212529): default interface text on cards and pages.
- **Reading Text** (#222222): article body text.
- **Paper** (#f4f4f4): the page background everywhere.
- **Surface** (#ffffff): cards, the side rail, the footer, the side menu.
- **Faint Surface** (#fafafa) and **Hover Wash** (#f5f5f5): resting and hover fills for secondary
  containers (download box, topic chips, project thumbnails).
- **Hairline** (#e8e8e8), **Card Edge** (ink at 7%) and **Chip Border** (#dddddd): the only borders: project list rows, feed cards and topic chips.
- **Muted** (#5f6368): secondary text such as post counts and the footer theme credit.
- **Nav Slate** (#4a5560): resting navigation links.
- **Code Surface** (#272822): Monokai code blocks, the one dark surface.

### Classification tints
- **Project Mint** (#d9fff7), **Article Parchment** (#f1ecdf), **Review Lilac** (#e8e6f7):
  backgrounds of the type labels. Each always means the same entry type.
- **Callouts**: note (blue: surface #eef6fd, border #b7d7f3, label #0b5394), tip (green: #ebf8ef,
  #b4e2c1, #1e6b34), warning (amber: #fff4e5, #f6cf98, #8a4b00).

### Named Rules
**The Highlighter Rule.** Highlighter Teal never carries text; at 1.3:1 on white it can't. It marks
backgrounds, underlines and selection. Any readable teal text uses Ink Teal.

**The Stable Meaning Rule.** A tint means one thing everywhere: mint is always a project, parchment
always an article, lilac always a review, blue/green/amber always note/tip/warning. Never reuse a
tint for decoration.

## Typography

**Display Font:** Sen (with system-ui, Segoe UI, sans-serif)
**Body Font:** Source Serif 4 (with Georgia, Times New Roman, serif)

**Character:** Sen is round, open and a little playful: the friendly voice of the notebook's
headings and margins. Source Serif 4 is a calm text serif with optical sizes, built for long reading.

### Hierarchy
- **Display** (500, 50px, 1.2; 35px below 576px): the homepage greeting only.
- **Headline** (700, 50px, 1.2; 35px below 768px): post titles.
- **Title** (700, 22px, 1.4): card titles in the feed; 28px on the featured first card, 18px on the two small cards beside it.
- **Body** (400, 19px, 1.75; 17px below 480px): article text in Source Serif 4, in a column of at
  most 700px (about 68 characters). Paragraphs are separated by 1.5em; headings inside articles
  switch back to Sen with 2em above and 0.6em below.
- **Body UI** (400, 16px, 1.7): card excerpts, page text, lists.
- **Label** (700, 12px, 0.04em, uppercase): type labels on cards and posts.

### Named Rules
**The Two Hands Rule.** Sen writes the interface; Source Serif 4 writes the reading text. Cards,
lists, navigation and headings stay in Sen, even inside posts. The serif appears only in article
body text and the post's opening summary quote (in italic).

**The No Fallback Face Rule.** Never set visible text in a system default face (Arial, Times New
Roman). If a component needs a font, it uses one of the two.

## Layout

A fixed 80px white rail runs down the left edge with the menu button at the top and search at the
bottom (on phones below 600px the rail collapses into a top bar). Content sits in a centred
container: 80% wide from 768px, capped at 1140px from 1440px.

- **Header:** logo left, main navigation right, from 768px. Below that, the side menu is the only navigation.
- **Feed:** a three-column grid with 30px gaps. On the first page, the newest entry spans two columns
  and two rows, the next two stack beside it. Two columns below 1024px, one below 768px.
- **Post:** a single reading column (740px including 20px side padding), with the cover image up to 940px wide.
- **Overview pages** (projects, articles, reviews): a single list of rows.
- **Rhythm:** 30px between cards, 50px around the feed and cover images, 120px before the footer.

**The Notebook Margin Rule.** Reading text never runs wider than the 700px column, however wide the
screen. Width belongs to the feed, not to the text.

## Elevation & Depth

Flat by default. White sheets lie on grey paper, defined by a hairline edge (ink at 7%) rather than
a shadow. Depth appears only as a response to interaction: a card the pointer or keyboard reaches
rises 4px and casts a short, soft shadow. A featured image may carry an optional soft float.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 1px 2px rgba(17,17,17,.04), 0 14px 32px -12px rgba(17,17,17,.22)`): feed cards on hover and keyboard focus, with `translateY(-4px)` over 0.35s (ease-out `cubic-bezier(0.22, 1, 0.36, 1)`); the hairline edge fades out as the shadow takes over.
- **Hover lift** (`box-shadow: 0 4px 16px rgba(0,0,0,0.08)`): project list rows on hover, together with a darker border.
- **Image float** (`box-shadow: 0 7px 50px 0 rgba(84,110,122,.15)`): opt-in for a post's featured image (`imageshadow: true`).

### Named Rules
**The Flat-at-Rest Rule.** Nothing carries a shadow while the page is still; a hairline edge is the
most a resting surface gets. A shadow is an answer to the pointer or the keyboard, never decoration.

## Shapes

Soft and friendly. Feed cards and post cover images have 12px corners, code blocks 8px; all three
follow one switch, `$card-radius` in `assets/css/theme.scss` (0 restores the original square look).
Pills (999px) for type labels, topic chips and pagination; gently rounded containers for callouts
(6px), project thumbnails (8px), the download box (10px) and project list rows (12px). Inline code
has a 3px radius. Avatars and pagination circles are fully round. Form fields from Bootstrap stay
square (its rounding is switched off).

**The Soft Edge Rule.** Every surface uses soft corners (6–12px) and pills for anything label-like.
Card-like surfaces change shape together through `$card-radius`, never one at a time.

## Components

### Post cards
White sheets that let the cover image and title do the work, and react as one object.
- **Shape:** 12px corners, hairline Card Edge, no shadow at rest; the cover image is clipped to the corners.
- **Content:** cover image (240px tall, cropped from the top; 16:10 on phones), type label, title, excerpt, author and date.
- **One link:** the whole card opens the post (the title link is stretched over the card); the type label stays its own link above it. The image link is hidden from keyboard and screen readers, so each card has two tab stops: label and title.
- **Hover / keyboard focus:** the card rises 4px with the Card Lift shadow, the cover image scales to 103% inside its corners, and Highlighter Teal fills in behind the title like a marker stroke (0.6s). Keyboard focus also draws the Ink Teal outline around the whole card. With reduced motion, only the shadow and highlight remain.

### Type labels
Small tinted pills that say what kind of entry this is.
- **Style:** Label type in Ink on the type's tint (mint, parchment, lilac), pill shape.
- **Behaviour:** links to the overview of that type; slightly darker on hover.

### Topic chips
- **Style:** outlined pills with Chip Border, Body Text, and the post count in Muted.
- **Hover:** border turns Ink, background Hover Wash.

### Navigation
- **Header (from 768px):** Sen 16px in Nav Slate; hover turns Ink with a faint underline; the current
  section is Ink, bold, with a 2px Highlighter Teal underline.
- **Side menu:** opens from the menu button over a dark scrim; links in Nav Slate, the current page in bold Ink.
- **Pagination:** 40px circles; the current page is a solid Ink circle with white text, others a
  faint grey fill that turns Highlighter Teal on hover.

### Links
Ink Teal, Deep Ink Teal on hover. Inside articles, links are underlined (1px, 0.2em offset).

### Callouts
Note, tip and warning boxes in posts: tinted surface, 1px border of the same hue all round, 6px
corners, the bold label in the hue's ink colour. Never a thick stripe on one side.

### Project list rows
The overview pages' signature: a horizontal row with a 120×90px rounded thumbnail, title, excerpt,
category badges and date, in a Hairline-bordered 12px container that lifts on hover.

### Download box
A faint grey 10px box with a file-type icon, file name, type and size, and a "Download" link in Ink Teal.

### Code blocks
Dark Monokai slabs (Code Surface), square, 15px monospace. Inline code is Ink on a light grey (#e8e8e8) background with 3px corners.

## Do's and Don'ts

### Do:
- **Do** use Highlighter Teal only as a mark: underline, hover swipe, selection, tint.
- **Do** set every readable teal in Ink Teal (#007d66), which passes 4.5:1 on Paper and Surface.
- **Do** keep reading text in Source Serif 4 at 19px within a 700px column.
- **Do** label every entry with its type pill, using the fixed tint for that type.
- **Do** keep surfaces flat at rest with at most a hairline edge; lift cards (Card Lift) only on hover or keyboard focus.
- **Do** give components soft corners (6–12px) and pills for labels; change card corners only through `$card-radius`.
- **Do** show keyboard focus with the 2px Ink Teal outline at 2px offset.

### Don't:
- **Don't** set text in Highlighter Teal (#40FFDC).
- **Don't** introduce a dark "hacker" or terminal look; dark surfaces are only for code.
- **Don't** add clutter: no widget sidebars, popups, banners or ads.
- **Don't** use a thick coloured stripe on one side of callouts, cards or list items.
- **Don't** use Arial, Times New Roman or other system faces for visible text.
- **Don't** reuse a classification tint for decoration.
- **Don't** add resting shadows to cards.
- **Don't** make only part of a card clickable; a card that lifts is one link.
