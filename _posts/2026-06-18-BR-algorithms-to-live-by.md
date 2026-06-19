---
layout: post
title: "Algorithms to Live By: A Guide to Human Decision-Making"
author: jens
categories: [ Book Review, Science ]
image: assets/images/algorithms-to-live-by/cover_algorithms_main.png
---

> Life is full of choices. In "Algorithms to Live By", Brian Christian and Tom Griffiths look at how algorithmic approaches can solve everyday human dilemmas. This post breaks down the core principles behind these algorithms and how they can be applied in real-world scenarios to navigating daily chaos.

![Optimal Stopping 37% Rule Graph](/assets/images/algorithms-to-live-by/optimal-stopping-graph.png)

## Introduction

We frequently face the frustration of not knowing when to stop searching and finally commit—whether we are looking for a parking spot, interviewing job candidates, or trying to sell a house. 

Looking at more options gives us more data, but waiting too long means we might pass up the best choice entirely. In computer science, this is known as an **Optimal Stopping** problem. Fortunately, math offers elegant strategies to beat the stress of overthinking.
The first chapter centers on a classic mathematical puzzle known as the *Secretary Problem*. The math assumes you can only evaluate one applicant at a time, you must make an immediate hire-or-fire decision, and once you reject someone, you can never go back. To solve this, the authors introduce a set of rules that apply to a wide variety of real-world scenarios.

---

## Chapter 1: Optimal Stopping

We frequently face the frustration of not knowing when to stop searching and finally commit - wether we are looking for an appartment, interviewing job candidates, or trying to sell a house. Looking at more options gives us more data, but waiting too long means we might pass up the best choice entirely. 
Fortunately, math offers an elegant approach to beat the stress of overthinking. This problem is known as an **Optimal Stopping** problem.

### The Look-Then-Leap Rule
To maximize your chances of picking the absolute best person from a pool of options, the book outlines the **Look-Then-Leap Rule**:
* **The Look Phase:** You set aside a specific portion of your pool as pure research. You gather data to establish a baseline of what a "good" candidate looks like. During this phase, you cannot commit to anyone, no matter how amazing they seem.
* **The Leap Phase:** The second this phase ends, you prepare to strike. The very next candidate you meet who outperforms the highest baseline from your look phase gets chosen on the spot.

> But whats the threshold? Does it apply to a large number of candidates? Or a long period of time? Or a large distance between candidates?

### How the Math Leads to 37%
To understand where this magic number comes from, the authors break down what happens to your chances of success as the number of applicants increases:

* **1 Applicant:** Your chances of picking the best applicant are **100%**, because you have no other choice.
* **2 Applicants:** Your chances drop to **50%**. Whether you pick the first person blindly or reject the first and leap to the second, you are essentially flipping a coin. 
* **3 Applicants:** This is where the strategy shifts. If you hire blindly, your odds are 1 in 3 (33%). However, if you use a "Look Phase" of exactly **one** applicant (which is 33% of the pool), you gather data on Candidate 1. Then you move to the "Leap Phase." If Candidate 2 is better than Candidate 1, you hire them. If not, you are forced to hire Candidate 3. This optimal strategy boosts your chances of getting the absolute best candidate back up to **50%**.

### Scaling the 37% Rule to Any Parameter
Mathematically, the precise dividing line between looking and leaping is **37%** (derived from $1/e$). The beauty of this rule is that it doesn't care what parameter you are measuring; it scales perfectly to numbers of options, total time, or spatial distance:
* **By Applicants (Number):** If you are interviewing 100 applicants, interview and reject the first 37 to set your baseline. From applicant 38 onward, hire the first person who beats that baseline.
* **By Days (Time):** If you give yourself 30 days to find an apartment, spend the first 11 days (37%) just viewing places without signing anything. On day 12, sign the very first place that beats everything you saw in that first week and a half.

Following this strategy yields a fascinating mathematical symmetry: in a completely random pool, it gives you a **37% chance of picking the absolute best option**. While that might sound low, it is the highest possible mathematical probability of success.

### No-Information vs. Full-Information
The 37% rule operates under a **No-Information** constraint—meaning you have zero context about the overall market and can only judge candidates relative to one another. You don't know if the first applicant is a genius or terrible until you see more people.

However, the math changes completely when you have **Full-Information**. Imagine you are looking at applicants' standardized test scores, where you know exactly what a "perfect 100" means without needing a baseline. When you have access to objective, absolute data, you no longer need a "Look Phase." Instead, the math switches to a **Threshold Rule**. You instantly hire the first person who crosses a specific statistical benchmark based on how many applicants are left. If you have many candidates left, your threshold is incredibly high; as you run out of candidates, your standards mathematically drop.

### The True Cost of Time (Waiting Costs)
In pure mathematical puzzles, time is free. In human life, it isn't. Every day an apartment sits empty, a landlord loses rent. Every minute you spend looking for a better parking spot, you waste gas and energy. 

When Christian and Griffiths introduce **Waiting Costs** into the equation, the optimal strategy changes significantly:

> The moment searching costs you something—whether it's energy, time, or cash—the algorithm tells you to **leap much sooner**. 

If the cost of continuing the search outweighs the tiny mathematical chance of finding a slightly better option, the look phase shrinks well below 37%. The algorithm adapts to reality: a "good enough" choice today is frequently superior to a perfect choice next month. 

### Real-World Applications
Optimal stopping isn't just a thought experiment; it shows up across countless everyday dilemmas:
* **House Selling:** A seller must decide whether to accept the current offer or keep the house on the market, balancing the hope of a higher bid against the ongoing cost of mortgage payments.
* **When to Park:** Drivers use optimal stopping intuitively as they approach a destination, transitioning from a "look" phase (assessing lot fullness) to a "leap" phase (grabbing the next available spot close to the door).
* **Dating and Marriage:** The rule famously applies to the "marriage problem," calculating how many years one should spend dating around to understand the dating pool before actively looking to settle down.