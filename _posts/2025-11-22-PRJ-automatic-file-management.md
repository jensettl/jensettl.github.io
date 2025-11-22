---
layout: post
title: "[PROJECT] Automatic File Management — Organize, Automate with Python Scripting"
author: jens
categories: [ Python ]
image: assets/images/PRJ-automatic-file-management/cover_automatic-file-management.png
---

> Python can be an amazing tool for automating simple, repetitive tasks on your computer with minimal effort. One tidious task i often face is keeping my downloads folder organized. Over time, it can become cluttered with various file types, making it difficult to find what I need quickly. 

In this project, I developed a Python script that **automatically organizes files in my downloads folder into subfolders** based on their file types. This not only helps keep my workspace tidy but also saves me time and effort in managing my files.

## Features of the Automatic File Management Script

- **File Type Detection**: The script identifies files based on their extensions (e.g., .pdf, .jpg, .docx) and categorizes them accordingly.
- **Dynamic Folder Creation**: If a folder for a specific file type does not exist, the script creates it automatically.
- **Scheduled Execution**: The script can be set to run at regular intervals using task schedulers (like cron on Linux or Task Scheduler on Windows).
- **Logging**: It maintains a log of moved files for easy tracking and debugging.

## How it Works

![How the Automatic File Management Script Works](/assets/images/PRJ-automatic-file-management/automatic-file-management-diagram.png)

