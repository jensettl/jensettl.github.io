#!/bin/bash

# Exit if anything fails
set -e

# Check if name argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <name> [title]"
  exit 1
fi

# Input variables
NAME=$1
TITLE=${2:-"Your Blog Post Title"} # default if not provided
DATE=$(date +"%Y-%m-%d")
FILENAME="_posts/${DATE}-${NAME}.md"
IMAGE_DIR="assets/images/${NAME}"

# Create image directory if it doesn't exist
mkdir -p "$IMAGE_DIR"

# Create markdown file with boilerplate frontmatter
cat > "$FILENAME" <<EOL
---
layout: post
title:  "${TITLE}"
author: jens
categories: [ Python ]
image: ${IMAGE_DIR}/cover_${NAME}.png
---

# ${TITLE}

Write your content here...
EOL

echo "✅ Created new post: $FILENAME"
echo "📂 Images folder: $IMAGE_DIR"