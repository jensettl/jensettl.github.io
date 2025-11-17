---
layout: post
title: "[PROJECT] Smart Inbox Automation with n8n — Auto-categorize Emails and Trigger Custom Actions"
author: jens
categories: [ Automation, AI, N8N, Ollama ]
image: assets/images/PRJ-n8n/cover-n8n.png
---

With n8n, an open-source workflow automation tool, you can fairly easy create AI powered workflows such as an workflow that automatically categorizes incoming emails and triggers custom actions based on their content. This can help you manage your inbox more efficiently and ensure important emails are prioritized.

> This project was a prove of concept and is not intended for production use. It demonstrates the capabilities of n8n and AI integration for email automation. It was build with a local ollama model with limited parameters. Upgrading to a paid OpenAI plan and using their API would yield better results.

## The idea for this project

I stumbled upon n8n while searching for low-code automation tools that could integrate with AI models. I watched a couple of tutorials and was impressed by its flexibility and ease of use, so I decided to explore its capabilities myself. Installations was quiet straightforward with their docker image for self-hosting. Ollamna made it easy to run local LLMs without worrying about API costs or data privacy. The AI Agent node in n8n allows me to connect to my local Ollama models seamlessly. After setting up the basics, I wanted to create a workflow that could help me manage my email inbox more efficiently. The idea was to automatically categorize incoming emails based on their content and trigger custom actions, such as sending notifications, moving emails to specific folders, or even generating automated drafts for replies.

The workflow consists of several components (This can be adjusted based on your specific needs):

![n8n workflow wireframe](/assets/images/PRJ-n8n/n8n-inbox-workflow-wireframe.png)

#### Prerequisites associated with this project

- **N8N**: An n8n instance (self-hosted or n8n.cloud). There a many tutorials online on how to set up n8n locally. SaaS solutions like hostinger with one-click n8n installation also work well as i heard from user feedback.
- **LLM**: Since I am running this project locally for testing purposes, I used [Ollama](https://ollama.com/) with a local model (e.g., Llama 2) and an embedding model. This way I can avoid API costs and have more control over data privacy. However, for production use, I recommend either a high-parameter local model and embedding model or using a paid plan with OpenAI or another LLM provider for better performance.
- **Mail Inbox**: An email account that supports IMAP/SMTP (e.g., Gmail, Outlook)



<a href="/assets/download/PRJ-n8n/n8n-inbox-agent.json" download>
    <img src="/assets/download/json_file.png" alt="n8n workflow" width="32" > n8n Workflow 
</a>



