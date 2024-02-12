source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# Commented out gem "github-pages" as it can lead to dependency issues
# gem "github-pages", group: :jekyll_plugins

# Instead, specify individual gems required for GitHub Pages
# to avoid potential conflicts
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "hawkins"
end

# If you want to use Jekyll native, uncomment the line below.
# To upgrade, run `bundle update`.

gem "jekyll"

# Add platform-specific gem to solve potential Windows-related issues
gem "wdm", "~> 0.1.0" if Gem.win_platform?
