---
layout: post
title:  "Pydantic Basics for Data Validation in Python"
author: jens
categories: [ Python, Pydantic, Data Validation ]
image: assets/images/pydantic/cover_pydantic.png
---

**Pydantic** is a Python library for **data validation and settings management** using Python type annotations.  
It ensures that the data you work with in your application is valid, well-structured, and type-safe.  

---

## When is it used?
- Validating and parsing **input data** (e.g., JSON payloads in APIs).  
- Defining **configurations** and environment variables.  
- Ensuring type safety in Python applications.  
- Used heavily in frameworks like **FastAPI**.  

---

## Example: Using Pydantic
```python
  from pydantic import BaseModel, EmailStr

  # Define a data model
  class User(BaseModel):
      id: int
      name: str
      email: EmailStr
      is_active: bool = True  # default value

  # Parse and validate input data
  data = {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com"
  }

  user = User(**data)

  print(user)           # id=1 name='Alice' email='alice@example.com' is_active=True
  print(user.dict())    # Convert to dictionary
  print(user.json())    # Convert to JSON

```

👉 If invalid data is provided (e.g., wrong type, bad email), Pydantic raises a validation error automatically.

## Conclusion

Pydantic makes working with structured data in Python safe, clean, and reliable.
Whether building APIs, loading configs, or just want strict type enforcement.