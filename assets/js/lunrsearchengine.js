---
layout: null
sitemap: false
---
// Search index for assets/js/search.js: every post plus the About page.
{%- assign about = site.pages | where: "name", "about.md" %}
var documents = [
{%- for post in site.posts %}
    {"url": {{ post.url | relative_url | jsonify }}, "title": {{ post.title | jsonify }}, "type": {{ post.type | jsonify }}, "date": {{ post.date | date: "%b %-d, %Y" | jsonify }}, "body": {{ post.content | markdownify | strip_html | normalize_whitespace | jsonify }}},
{%- endfor %}
{%- for page in about %}
    {"url": {{ page.url | relative_url | jsonify }}, "title": {{ page.title | jsonify }}, "type": "", "date": "", "body": {{ page.content | markdownify | strip_html | normalize_whitespace | jsonify }}},
{%- endfor %}
];

var idx = lunr(function () {
    this.ref('id');
    this.field('title', { boost: 10 });
    this.field('body');

    documents.forEach(function (doc, i) {
        this.add({ id: i, title: doc.title, body: doc.body });
    }, this);
});
