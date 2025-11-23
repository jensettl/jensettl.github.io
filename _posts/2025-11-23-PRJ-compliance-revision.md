---
layout: post
title:  "[PROJECT] Investitgation of Company Data for Compliance"
author: jens
categories: [ Python ]
image: assets/images/PRJ-compliance-revision/cover_compliance-revision.png
---

> This post highlights a more statistical project I worked on that involved **analyzing company data to ensure compliance** with regulatory standards. The goal was to identify any discrepancies or potential issues in the data that could lead to non-compliance.

## Project Overview

The project was part of my bachelor studies, where I was tasked with investigating a real-world dataset, anonymized for confidentiality, from a company to check for compliance. Each row in the dataset represented process steps in a process flow in a sales process. The rows are also sorted chronologically. So the run from row 1 took place before row 2, and so on. We were told that the last column indicates whether a process step was compliant (1) or non-compliant (0).

We had to use JMP, a statistical analysis software, to perform the analysis. The main objectives were to:
- Explore the dataset and understand its structure.
- Identify patterns or anomalies that could indicate non-compliance.
- Generate visualizations to support our findings.

The project was completed in a team of two students, and we documented our findings in a comprehensive report.

## Key Steps in the Analysis

![Steps taken during the analysis](/assets/images/PRJ-compliance-revision/compliance-revision-steps.png) 


## Results and Findings

Both with the descicion tree and the neural network we were able to identify patterns in the data that correlated with compliance status. We achieved an accuracy of around 97% in predicting compliance based on the features in the dataset. This high accuracy indicates that the features provided were quite informative for determining compliance. 

Furthermore, we identified specific process steps that were more likely to lead to non-compliance. These insights can help the company focus their efforts on improving those areas to ensure better compliance in the future.