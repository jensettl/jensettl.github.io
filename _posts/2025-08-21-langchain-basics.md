---
layout: post
title: "LangChain Basics"
author: jens
date: 2025-08-21
categories: [ AI, LLM ]
tags: [langchain, python, automation]
image: assets/images/langchain.jpg
toc: true
---


LangChain is an **open-source framework** that helps developers build applications with large language models (LLMs).  
It provides abstractions and integrations for working with LLMs like OpenAI, Anthropic, Cohere, and others.


## What is LangChain?

At its core, LangChain makes it easier to connect:

- **LLMs** (e.g. GPT-4, Claude, etc.)
- **Data sources** (databases, PDFs, APIs, documents, etc.)
- **Chains** (sequences of steps combining prompts, logic, and tools)
- **Agents** (LLMs that decide which tools or actions to use)

This allows you to build applications such as:

- **Chatbots & assistants**
- **Document Q&A systems**
- **Code helpers**
- **Workflow automation with LLMs**

## Where is LangChain Being Used?

Some popular use cases include:

- **Customer support chatbots** trained on company documentation
- **Research assistants** that can read PDFs or websites
- **AI-powered search engines**
- **Data analysis tools** where the LLM runs queries on your dataset
- **Prototyping AI workflows quickly**


## Basic Examples

Here are some minimal Python examples:

### 1. Simple LLM Call

```python
from langchain_openai import OpenAI

llm = OpenAI(model="gpt-3.5-turbo", temperature=0)
response = llm.invoke("Explain LangChain in one sentence.")
print(response)
```

### 2: Prompt Template + Chain

Sometimes you want to reuse a prompt in a structured way.
Here we create a PromptTemplate, pass it to an LLMChain, and use it to generate consistent outputs.

```python
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_openai import OpenAI

# Define a reusable prompt template
prompt = PromptTemplate(
    input_variables=["topic", "audience"],
    template="Explain {topic} in simple terms for {audience}."
)

llm = OpenAI(model="gpt-3.5-turbo", temperature=0.5)
chain = LLMChain(llm=llm, prompt=prompt)

# Run the chain with different inputs
print(chain.run({"topic": "quantum computing", "audience": "high school students"}))
print(chain.run({"topic": "machine learning", "audience": "software engineers"}))
```

###  3: Document Q&A (Vectorstore)

Here’s how to let an LLM answer questions over your own data using embeddings + vector search.

```python
from langchain_openai import OpenAIEmbeddings, OpenAI
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA

# Step 1: Prepare documents (could also load from PDF, DB, API)
docs = [
    "LangChain is a framework for building applications with LLMs.",
    "LangChain supports document Q&A, chatbots, and workflow automation.",
    "It integrates with vector databases like FAISS, Pinecone, Chroma."
]

# Step 2: Build embeddings + vectorstore
embeddings = OpenAIEmbeddings()
docsearch = FAISS.from_texts(docs, embeddings)

# Step 3: Build a Retrieval-based QA chain
qa = RetrievalQA.from_chain_type(
    llm=OpenAI(model="gpt-3.5-turbo", temperature=0),
    retriever=docsearch.as_retriever(),
    return_source_documents=True
)

# Step 4: Ask questions
query = "What can LangChain be used for?"
result = qa.invoke(query)

print("Answer:", result["result"])
print("\nSources:")
for doc in result["source_documents"]:
    print("-", doc.page_content)
```

###  4: Automation Workflow with an Agent

Agents allow an LLM to decide which tools to use dynamically (like calling APIs, running calculations, etc.).
Here’s a simple workflow: the agent can answer general questions and do math.

```python
from langchain_openai import OpenAI
from langchain.agents import initialize_agent, AgentType, load_tools

# Step 1: Load tools (here we add a calculator tool)
llm = OpenAI(model="gpt-3.5-turbo", temperature=0)
tools = load_tools(["llm-math"], llm=llm)

# Step 2: Initialize an agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Step 3: Run queries
print(agent.run("What's 17 times the square root of 2?"))
print(agent.run("Summarize what LangChain is in 2 sentences."))

```

💡 Here the LLM chooses when to use the calculator tool vs. just generating text.
In production, you can wire up tools like web search, APIs, databases, shell commands, etc.


## Key Takeaways

- LangChain is a toolkit for LLM apps.

- It simplifies prompt management, chaining, and external data integration.

- Supports many backends (OpenAI, Hugging Face, Anthropic, etc.).

- Great for quickly building chatbots, assistants, and AI-powered workflows.