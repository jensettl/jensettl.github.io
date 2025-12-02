---
layout: post
title:  "Overview of the most common nodes in n8n"
author: jens
categories: [ n8n, Tutorials ]
image: assets/images/n8n/cover_n8n-common-nodes.png
---

n8n provides a wide range of nodes that allow you to connect different services, manipulate data, and automate workflows. Here is an overview of some of the most commonly used nodes in n8n:

> This post was inspired by a youtube video from [Master 80% of n8n by Learning just these 17 Nodes](https://www.youtube.com/watch?v=tf1mnCVWJkQ). Check it out for a more detailed explanation of each node!


### 1. Trigger Nodes

![Trigger Nodes](/assets/images/n8n/trigger-nodes.png)

- **Trigger manually**: Execute workflows manually. Most of the times ussed for testing purposes.
- **Chat trigger**: Start workflows based on built-in chat messages.
- **Schedule trigger**: Start workflows at specified intervals or times.
- **On app event trigger**: Start workflows based on events from connected applications. Such as form submissions or new entries.


### 2. Storage Solutions

![Storage Solutions](/assets/images/n8n/storage-solutions.png)

- **Google Sheets**: Read from and write to Google Sheets. N8n provides various operations like adding rows, updating cells, and retrieving data. Needs authentication via OAuth2.
- **Data Table**: A built-in node for storing and retrieving data within n8n workflows. Useful for temporary data storage and manipulation.


### 3. Data Processing Nodes

![Data Processing Nodes](/assets/images/n8n/data-processing-nodes.png)

- **Edit Fields (Set)**: Modify, add, or remove fields in the data passing through the workflow.
- **Split Out**: Split data into multiple items based on specified criteria.
- **Aggregate**: Groups separate items into a single item
- **If**: Conditional logic to route data based on specified conditions. Only returns true or false branches to continue the workflow.
- **Switch**: Similar to the If node but allows for multiple branches based on different conditions.
- **Code in JavaScript or Python**: Custom code execution for advanced data manipulation and processing.
- **Merge**: Combine multiple data streams into a single stream.


### 4. Connectivity & APIs

![Connectivity & APIs](/assets/images/n8n/connectivity-apis.png)

- **HTTP Request**: Make HTTP requests to external APIs and services. Supports various methods like GET, POST, PUT, DELETE, etc.
- **Webhook Trigger**: Start workflows based on incoming HTTP requests. Useful for integrating with external services that can send webhooks.
- **Webhook Response**: Send responses back to the source of the webhook request.


### 5. AI Integration

![AI Integration](/assets/images/n8n/ai-integration.png)

- **AI Agent**: Bundle multiple AI operations into a single node. Useful for complex AI workflows. Connect a chat model, a memory storage and tools to the agent. Provide prompts to control the agent's behavior.
- **Chat Model**: Connect a chat model to your workflow. Supports various providers like OpenAI, Ollama, Antropic, and more.
- **Simple Memory**: Store and retrieve information during the workflow execution. Useful for maintaining context in AI conversations. For more complex memory management, consider using vector databases.
- **Tools**: Integrate external tools and services into your AI workflows. Examples include web search, calculations, and more.
- **Pre-built AI Nodes**: n8n offers pre-built nodes for popular AI services like Text Classification, Information Extraction, and Sentiment Analysis.

### Conclusion

These nodes represent just a fraction of the capabilities n8n offers. By combining these nodes, you can create powerful and flexible workflows to automate a wide range of tasks and processes. Experiment with different nodes to discover how they can enhance your automation projects!


> **EDIT**: A YouTube user I am subscribed to created a video based on this blog post. Check it out: [Master n8n With These 17 Essential Nodes](https://www.youtube.com/watch?v=D9MIGseFB3g). He provided additional documents and workflow examples in the video description. I link them here for your convenience:

{% include download-box.html 
   url="/assets/download/TOP-n8n-common-nodes/n8n-common-nodes.json" 
   image_url="/assets/file-types/json-icon.png"
   type="json" 
   name="n8n-Essential-Nodes.json" 
   size="942 MB"
%}

{% include download-box.html 
   url="/assets/download/TOP-n8n-common-nodes/n8n-common-nodes.pdf" 
   image_url="/assets/file-types/pdf-icon.png"
   type="pdf" 
   name="n8n-common-nodes.pdf" 
   size="636 KB"
%}