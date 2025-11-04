---
layout: post
title: "[PROJECT] Git Workshop for Students"
author: jens
categories: [ GitHub, Git ]
image: assets/images/PRJ-git-workshop/cover-github.png
---

> The Git Workshop was created to help new students get comfortable using Git and GitHub. It covers the basics—like committing, merging, and pushing — as well as more advanced concepts such as branching and rebasing.  
>  
> My role was to write several chapters and help supervise the workshop on-site, answering questions and guiding participants along the way.

💡 In this post, I’ll revisit the main topics and summarize what we covered. If you want to dive deeper, check out the full course on [GitHub](https://github.com/SimonKienzler/git-workshop).

---

## 1. Configuring Git: Telling Git Who You Are

Before using Git, it is essential to configure user information so that commits can be properly attributed.  
This can be done with the following commands:

```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
```

The `--global` flag applies these settings to all repositories on the system.  
To set user information for a single project, omit this flag and run the command within the repository directory.

---

## 2. Creating a Repository from the Command Line

A new Git repository can be created directly from the terminal:

```bash
  git init
```

This initializes an empty repository in the current folder.  
Existing files can then be tracked and versioned.

---

## 3. Adding Files and Making Commits

To start tracking changes, files must be staged and committed.

```bash
  git add filename
  git commit -m "Initial commit"
```

The **git add** command stages files, while **git commit** saves the changes with a descriptive message.  
To add all modified files at once, use:

```bash
  git add .
```

---

## 4. Useful Commands Before Committing

Several commands provide valuable information about a repository’s current state:

```bash
  git status
```
Displays which files are staged, modified, or untracked.

```bash
  git log
```
Shows the commit history, including authors, messages, and timestamps.

```bash
  git fetch
```
Downloads new data from a remote repository without merging it.

```bash
  git checkout <branch>
```
Switches between branches or restores files to a previous state.

These commands help ensure that commits are made intentionally and with awareness of the project’s context.

---

## 5. The Correct Way to Merge

When combining changes from different branches, merging should be done carefully to maintain a clean history.

```bash
  git checkout main
  git merge feature-branch
```

Before merging, it is recommended to fetch the latest updates and ensure the main branch is up to date.  
Clear and well-tested branches simplify the merging process.

---

## 6. Merge Requests (Pull Requests)

In collaborative environments, direct merges into the main branch are usually avoided.  
Instead, contributors open **merge requests** (also known as **pull requests**) on GitHub or similar platforms.  

These requests allow team members to review code, discuss changes, and ensure quality before integration.  
Once approved, the changes are merged into the main branch through the platform’s interface.

---

## 7. Handling Merge Conflicts

Merge conflicts occur when multiple branches modify the same section of code.  
Git marks these conflicts in the affected files, allowing developers to review and manually resolve them.

```bash
  <<<<<<< HEAD
  current branch changes
  =======
  incoming branch changes
  >>>>>>> feature-branch
```

After editing and resolving conflicts, the process is completed with:

```bash
  git add .
  git commit
```

Proper conflict resolution ensures the repository remains stable and consistent.

---

## 8. The Role of .gitignore

The `.gitignore` file defines which files or directories should not be tracked by Git.  
Typical examples include temporary files, build artifacts, and system-specific data.

Example `.gitignore` content:

```
  # Ignore compiled files
  *.o
  *.exe

  # Ignore dependencies
  node_modules/

  # Ignore system files
  .DS_Store
```

Maintaining a clear `.gitignore` file keeps the repository clean and reduces unnecessary clutter.

---

### Summary

The Git Workshop provides a structured introduction to essential Git concepts — from configuration and commits to branching, merging, and conflict resolution.  
By following these practices, new contributors can manage their code efficiently and collaborate effectively in version-controlled environments.