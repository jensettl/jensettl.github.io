---
layout: post
title:  "[PROJECT] Streamlining Customer Orders: A BPMN Automation Journey"
author: jens
categories: [ Automation, BPMN, Camunda, Java ]
image: assets/images/bpmn-customer-order/cover_bpmn.jpg
---

Part of a class in university was to model and automate a customer order process using BPMN (Business Process Model and Notation) and Camunda. The goal was to create a workflow that handles customer orders from initiation to completion, including various decision points and tasks. The customers were simulated using a simple JSON server. 

## The Process of Achieving BPMN Automation

As mentioned in my other post about [Enhancing Efficiency with BPM](https://jensettl.github.io/TOP-BPM-workflow-automation/) the journey to BPMN automation involved several key steps:
- **Understanding BPMN**: Familiarizing myself with BPMN notation, symbols, and best practices for modeling business processes.
- **Modeling the Process**: Using a BPMN modeling tool to create a visual representation of the customer order process, including tasks, events, gateways, and data objects.

![BPMN Diagram](/assets/images/bpmn-customer-order/bpmn_customer_order.png)

> The BPMN diagram illustrates the customer order process we designed, highlighting key tasks such as order verification, credit checks, and order fulfillment.

- **Implementing the Process**: Translating the BPMN model into executable code using Camunda BPM platform. This involved creating service tasks, user tasks, and integrating with external systems (like the JSON server for customer data).

- **Integrate Code Automation**: Writing Java code for service tasks to handle business logic, such as checking creditworthiness and preparing orders.

- **Testing and Validation**: Running simulations to ensure the process behaves as expected, identifying and fixing any issues or bottlenecks.

---
## Process Steps in Detail
---

1. **Order Received**: The process starts when a customer places an order.
2. **Check for completeness**: Human in the loop task to verify if the order details are complete.
3. **Check creditworthiness**: Automated task to check the customer's creditworthiness using an external service.
4. **Set order conditions**: Use a DMN (Decision Model and Notation) table to determine the order conditions based on the credit check results.
5. **Prepare order**: Automated task to prepare the order for shipment and create invoice.
6. **Ship order**: Human in the loop task to handle the shipping of the order.

---
## Implementation
---
The process was implemented using Camunda BPM platform with Java for the service tasks. 
The code and BPMN files are publicly available on my GitHub repository: [GitHub - bpmn-customer-order](https://github.com/jensettl/Kundenauftrag_Process_BPMN/tree/master)
