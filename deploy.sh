#!/bin/bash

# Exit bei Fehler
set -e

# Konfiguration
REPO="git@github.com:jensettl/jensettl.github.io.git"
BRANCH="gh-pages"

# Gems installieren (falls nicht vorhanden)
bundle install

# Build Jekyll-Seite
bundle exec jekyll build

# Gehe in den _site-Ordner
cd _site

# Initialisiere Git falls nötig
if [ ! -d ".git" ]; then
    git init
    git checkout -b $BRANCH
else
    git checkout $BRANCH || git checkout -b $BRANCH
fi

# Alle Änderungen hinzufügen
git add --all
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "Keine Änderungen zum Commit"

# Push zum Remote
git push --force $REPO $BRANCH

# Zurück zum Hauptverzeichnis
cd ..
echo "Deployment abgeschlossen!"