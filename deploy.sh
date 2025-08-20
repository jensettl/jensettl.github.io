#!/bin/bash
set -e

# Build the site
bundle exec jekyll build

# Go to the generated site
cd _site

# Initialize a new Git repo inside _site
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy site"

# Force push to gh-pages branch of your repo
git push --force git@github.com:jensettl/jensettl.github.io.git gh-pages

# Clean up
cd ..
rm -rf _site/.git
