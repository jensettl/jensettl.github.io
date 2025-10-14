---
layout: post
title:  "Automation of a Customer Order Process"
author: jens
categories: [ Automation, BPMN, Camunda, Java ]
image: assets/images/bpmn-customer-order/cover_bpmn.jpg
---

Part of a class in university was to model and automate a customer order process using BPMN (Business Process Model and Notation) and Camunda. The goal was to create a workflow that handles customer orders from initiation to completion, including various decision points and tasks. The customers were simulated using a simple JSON server. 

## BPMN Diagram

The following BPMN diagram illustrates the customer order process:

![BPMN Diagram](/assets/images/bpmn-customer-order/bpmn_customer_order.png)

### Process Steps

1. **Order Received**: The process starts when a customer places an order.
2. **Check for completeness**: Human in the loop task to verify if the order details are complete.
3. **Check creditworthiness**: Automated task to check the customer's creditworthiness using an external service.
4. **Set order conditions**: Use a DMN (Decision Model and Notation) table to determine the order conditions based on the credit check results.
5. **Prepare order**: Automated task to prepare the order for shipment and create invoice.
6. **Ship order**: Human in the loop task to handle the shipping of the order.


## Implementation
The process was implemented using Camunda BPM platform with Java for the service tasks. 
The code and BPMN files are publicly available on my GitHub repository: [GitHub - bpmn-customer-order](https://github.com/jensettl/Kundenauftrag_Process_BPMN/tree/master)
