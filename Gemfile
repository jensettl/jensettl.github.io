source "https://rubygems.org"

# Jekyll version used both locally and in the GitHub Actions build.
# After changing gems, run `bundle install` and commit Gemfile.lock.
# Run locally with:
#
#     bundle exec jekyll serve
#

gem 'jekyll', '~> 4.4'

# File watcher for `jekyll serve` on Windows (skipped on Linux/CI)
gem 'wdm', '>= 0.1.0', platforms: [:windows]

group :jekyll_plugins do
    gem 'jekyll-feed'
    gem 'jekyll-sitemap'
    gem 'jekyll-paginate'
    gem 'jekyll-seo-tag'
    gem 'jekyll-archives'
    gem 'jekyll-figure'
    gem 'jekyll-postfiles'
    gem 'kramdown'
    gem 'rouge'
end
