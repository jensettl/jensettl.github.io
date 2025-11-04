---
layout: post
title:  "Comprehensive Guide to Using the Blog Post Template"
author: jens
categories: [ Coding, Lifestyle ]
image: assets/images/blog-post.jpg
beforetoc: "Additional Information here."
---

Template instructions for creating a blog post

## Header: Specify Metadata of your post

After creating the markdown file for your post, add the following header to the top of the file.

```bash
  ---
  layout: post
  title:  "Title of your post"
  author: jens
  categories: [ Category 1, Category 2 ]
  tags: [ Tag 1, Tag 2 ]
  rating: 4.5
  image: path/to/image.jpg
  beforetoc: "Short paragraph to add additional information to your post"
  toc: true # Summary
  pin: true # Pin the post to the top of the blog
  ---
```

### Custom elements: Note, Warning, Tip 

I added custom elements to highlight specific parts of your post. You can use them as follows:

<div class="note">
  <b>Note:</b> This is a note.
</div>

```html
  <div class="note">
    <b>Note:</b> This is a note.
  </div>  
```

<div class="warning">
  <b>Warning:</b> This is a warning.
</div>

```html
  <div class="warning">
    <b>Warning:</b> This is a warning.
  </div>
```

<div class="tip">
  <b>Tip:</b> This is a tip.
</div>

```html
  <div class="tip">
    <b>Tip:</b> This is a tip.
  </div>
```
