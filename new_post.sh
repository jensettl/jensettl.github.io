#!/bin/bash
# Create a new post in its own folder: _posts/<section>/<date>-<PREFIX>-<slug>/
# Put the cover (cover.png) and any other images or downloads in that folder
# and reference them by file name only, e.g. ![Diagram](diagram.png).

set -e

usage() {
  echo "Usage: $0 <project|article|review> <slug> [\"Post title\"]"
  echo "Example: $0 project heic-converter \"Local HEIC-JPEG Converter\""
  exit 1
}

[ $# -lt 2 ] && usage

TYPE=$1
SLUG=$2
TITLE=${3:-"Your post title"}

case "$TYPE" in
  project) SECTION=projects; PREFIX=PRJ ;;
  article) SECTION=articles; PREFIX=TOP ;;
  review)  SECTION=reviews;  PREFIX=BR ;;
  *) usage ;;
esac

# Slugs become URLs: lowercase letters, digits and hyphens only
if ! [[ "$SLUG" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "Slug must be lowercase words joined by hyphens, e.g. my-new-post"
  exit 1
fi

NAME="$(date +%Y-%m-%d)-${PREFIX}-${SLUG}"
DIR="_posts/${SECTION}/${NAME}"
FILE="${DIR}/${NAME}.md"

if [ -e "$DIR" ]; then
  echo "Already exists: $DIR"
  exit 1
fi

mkdir -p "$DIR"

# layout, author and type come from the defaults in _config.yml
cat > "$FILE" <<EOL
---
title: "${TITLE}"
categories: [ ]
tags: [ ]
image: cover.png
---

Short intro: this paragraph is used as the excerpt on the home and projects pages.

## First section

![Image description](image.png)
EOL

echo "Created  $FILE"
echo "Next:    add ${DIR}/cover.png (posts without it just show no cover)"
