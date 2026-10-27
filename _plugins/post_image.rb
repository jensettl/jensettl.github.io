# Lets a post use `image: cover.png` for a file stored in the post's own folder
# (jekyll-postfiles copies that folder next to the post's URL). The value is
# turned into a root-relative path (/projects/x/cover.png), so cards, featured
# images and og:image all work; templates add the baseurl with `relative_url`.
# A cover that doesn't exist is dropped with a warning instead of rendering broken.
Jekyll::Hooks.register :site, :post_read do |site|
  site.posts.docs.each do |post|
    image = post.data["image"]
    next if image.nil? || image.include?("/")

    if File.exist?(File.join(File.dirname(post.path), image))
      post.data["image"] = "#{post.url}#{image}"
    else
      Jekyll.logger.warn "Cover image:", "#{image} not found next to #{post.relative_path}"
      post.data.delete("image")
    end
  end
end
