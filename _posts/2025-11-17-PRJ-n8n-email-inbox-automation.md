---
layout: post
title: "Smart Inbox Automation with n8n — Auto-categorize Emails and Trigger Custom Actions"
author: jens
categories: [ Python ]
image: assets/images/PRJ-N8N-email-inbox-automation/cover_PRJ-N8N-email-inbox-automation.png
---

With n8n, an open-source workflow automation tool, you can fairly easy create AI powered workflows such as an workflow that automatically categorizes incoming emails and triggers custom actions based on their content. This can help you manage your inbox more efficiently and ensure important emails are prioritized.

> This project was a prove of concept and is not intended for production use. It demonstrates the capabilities of n8n and AI integration for email automation. It was build with a local ollama model with limited parameters. Upgrading to a paid OpenAI plan and using their API would yield better results.

## Prerequisites

- **N8N**: An n8n instance (self-hosted or n8n.cloud). There a many tutorials online on how to set up n8n locally. SaaS solutions like hostinger with one-click n8n installation also work well as i heard from user feedback.
- **LLM**: Since I am running this project locally for testing purposes, I used [Ollama](https://ollama.com/) with a local model (e.g., Llama 2) and an embedding model. This way I can avoid API costs and have more control over data privacy. However, for production use, I recommend either a high-parameter local model and embedding model or using a paid plan with OpenAI or another LLM provider for better performance.
- **Mail Inbox**: An email account that supports IMAP/SMTP (e.g., Gmail, Outlook)


