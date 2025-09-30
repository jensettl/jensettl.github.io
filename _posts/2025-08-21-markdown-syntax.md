---
layout: post
title:  "Markdown Syntax"
author: jens
categories: [ Coding ]
tags: [ Markdown ]
image: assets/images/markdown.jpg
toc: true
---

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case.

## Basic 

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.


| Element           | Markdown Syntax |
| -----------       | :-----------: |
| Headinng          | # H1 <br> ## H2 <br> ### H3 |
| Bold Text         | ** Text ** | 
| Italic            | * Text * |
| Blockquote        | > Text |
| Ordered List      | 1. First <br> 2. Second <br> 3. Third |
| Unordered List    |    - First <br> - Second <br> - Third |
| Code              | \`Code` |
| Horizontal Rule   |   --- |
| Link              | [Text] (URL) | 
| Image             | ! [Text] (URL) |

<br>

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

| Element       | Markdown Syntax |
| -----------   | :-----------: |
| Table         | \| Header 1 \| Header 2 \| <br> \| ---- \| ----------- \| <br> \| Cell 1 \| Cell 2 \| |
| Fenced Code Block | \`\`\` <br> { <br> "firstName": "John", <br> "lastName": "Smith", <br> "age": 25 <br> } <br> ``` |
| Footnote  | Here's a sentence with a footnote. [^1] <br> [^1]: Another sentence with footnote. |
| Striketrough | \~~The world is flat.~~ |
| Escape Symbol | \\ |