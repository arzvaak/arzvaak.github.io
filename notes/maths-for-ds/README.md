# Mathematics for Data Science - IITM Qualifier

## Table of Contents
1. [Calculus Fundamentals](#calculus-fundamentals)
2. [Linear Algebra Basics](#linear-algebra-basics)  
3. [Probability Theory](#probability-theory)
4. [Optimization Methods](#optimization-methods)
5. [Practice Quizzes](#practice-quizzes)

---

## Calculus Fundamentals

### 1.1 Limits and Continuity

#### Definition of Limit
The limit of a function f(x) as x approaches a value 'a' is:

lim(x→a) f(x) = L

This means f(x) gets arbitrarily close to L as x gets arbitrarily close to a.

#### Properties of Limits
- **Sum Rule**: lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)
- **Product Rule**: lim(x→a) [f(x) · g(x)] = lim(x→a) f(x) · lim(x→a) g(x)
- **Quotient Rule**: lim(x→a) [f(x)/g(x)] = lim(x→a) f(x) / lim(x→a) g(x), provided lim(x→a) g(x) ≠ 0

#### Example Problem
Find lim(x→2) (x² - 4)/(x - 2)

**Solution:**
```
lim(x→2) (x² - 4)/(x - 2) = lim(x→2) (x + 2)(x - 2)/(x - 2)
                           = lim(x→2) (x + 2)
                           = 2 + 2 = 4
```

### 1.2 Derivatives

#### Definition
The derivative of f(x) at point x is:
f'(x) = lim(h→0) [f(x + h) - f(x)]/h

#### Basic Derivatives
- d/dx (c) = 0 (constant rule)
- d/dx (x^n) = nx^(n-1) (power rule)
- d/dx (e^x) = e^x
- d/dx (ln x) = 1/x
- d/dx (sin x) = cos x
- d/dx (cos x) = -sin x

#### Chain Rule
If y = f(g(x)), then dy/dx = f'(g(x)) · g'(x)

#### Applications in Data Science
- **Gradient Descent**: Uses derivatives to minimize cost functions
- **Optimization**: Finding maximum/minimum values of functions
- **Rate of Change**: Understanding how variables change with respect to each other

---

## Linear Algebra Basics

### 2.1 Vectors

#### Vector Definition
A vector is an ordered list of numbers: **v** = [v₁, v₂, ..., vₙ]

#### Vector Operations
- **Addition**: **u** + **v** = [u₁ + v₁, u₂ + v₂, ..., uₙ + vₙ]
- **Scalar Multiplication**: c**v** = [cv₁, cv₂, ..., cvₙ]
- **Dot Product**: **u** · **v** = u₁v₁ + u₂v₂ + ... + uₙvₙ

#### Example
Given **u** = [2, 3, 1] and **v** = [1, -2, 4]:
- **u** + **v** = [3, 1, 5]
- 2**u** = [4, 6, 2]
- **u** · **v** = 2(1) + 3(-2) + 1(4) = 2 - 6 + 4 = 0

### 2.2 Matrices

#### Matrix Operations
- **Addition**: [A + B]ᵢⱼ = Aᵢⱼ + Bᵢⱼ
- **Multiplication**: [AB]ᵢⱼ = Σₖ AᵢₖBₖⱼ
- **Transpose**: [A^T]ᵢⱼ = Aⱼᵢ

#### Applications in Data Science
- **Data Representation**: Each row represents a data point, columns represent features
- **Transformations**: Rotating, scaling, and translating data
- **Dimensionality Reduction**: PCA uses eigenvalues and eigenvectors

---

## Probability Theory

### 3.1 Basic Probability

#### Sample Space and Events
- **Sample Space (Ω)**: Set of all possible outcomes
- **Event (A)**: Subset of the sample space
- **Probability**: P(A) = Number of favorable outcomes / Total number of outcomes

#### Properties
- 0 ≤ P(A) ≤ 1
- P(Ω) = 1
- P(∅) = 0
- P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

### 3.2 Conditional Probability

#### Definition
P(A|B) = P(A ∩ B) / P(B), provided P(B) > 0

#### Bayes' Theorem
P(A|B) = P(B|A) · P(A) / P(B)

#### Example: Medical Diagnosis
- Disease prevalence: P(D) = 0.01
- Test sensitivity: P(+|D) = 0.99
- Test specificity: P(-|D̄) = 0.95

Find P(D|+):
```
P(D|+) = P(+|D) · P(D) / P(+)
where P(+) = P(+|D)·P(D) + P(+|D̄)·P(D̄)
         = 0.99×0.01 + 0.05×0.99 = 0.0594
Therefore: P(D|+) = (0.99×0.01) / 0.0594 ≈ 0.167
```

### 3.3 Common Distributions

#### Normal Distribution
- **PDF**: f(x) = (1/σ√(2π)) · e^(-(x-μ)²/(2σ²))
- **Parameters**: μ (mean), σ² (variance)
- **68-95-99.7 Rule**: 68% within 1σ, 95% within 2σ, 99.7% within 3σ

#### Binomial Distribution
- **PMF**: P(X = k) = C(n,k) · p^k · (1-p)^(n-k)
- **Parameters**: n (trials), p (success probability)
- **Mean**: μ = np
- **Variance**: σ² = np(1-p)

---

## Optimization Methods

### 4.1 Single Variable Optimization

#### Finding Critical Points
1. Find f'(x) = 0
2. Check second derivative: f''(x) > 0 (minimum), f''(x) < 0 (maximum)

#### Example
Minimize f(x) = x² - 4x + 5
```
f'(x) = 2x - 4 = 0
x = 2
f''(x) = 2 > 0, so x = 2 is a minimum
f(2) = 4 - 8 + 5 = 1
```

### 4.2 Multivariable Optimization

#### Gradient Vector
For f(x, y): ∇f = [∂f/∂x, ∂f/∂y]

#### Critical Points
Set ∇f = 0 and solve the system of equations.

#### Applications
- **Machine Learning**: Minimizing cost functions
- **Statistics**: Maximum likelihood estimation
- **Economics**: Utility maximization

---

## Practice Quizzes

### Quiz 1: Limits and Derivatives
1. Find lim(x→0) sin(x)/x
2. Find the derivative of f(x) = x³ + 2x² - 5x + 1
3. Use the chain rule to find d/dx[sin(x²)]

### Quiz 2: Linear Algebra
1. Calculate the dot product of [1, 2, 3] and [4, -1, 2]
2. Find the transpose of matrix [[1, 2], [3, 4]]
3. Multiply matrices [[1, 2], [3, 4]] and [[2], [1]]

### Quiz 3: Probability
1. If P(A) = 0.3 and P(B) = 0.4, and A and B are independent, find P(A ∩ B)
2. A coin is flipped 5 times. What's the probability of getting exactly 3 heads?
3. Apply Bayes' theorem to find P(A|B) given P(B|A) = 0.8, P(A) = 0.3, P(B) = 0.5

### Solutions
**Quiz 1:**
1. lim(x→0) sin(x)/x = 1 (standard limit)
2. f'(x) = 3x² + 4x - 5
3. d/dx[sin(x²)] = cos(x²) · 2x = 2x cos(x²)

**Quiz 2:**
1. [1, 2, 3] · [4, -1, 2] = 1(4) + 2(-1) + 3(2) = 4 - 2 + 6 = 8
2. [[1, 2], [3, 4]]^T = [[1, 3], [2, 4]]
3. [[1, 2], [3, 4]] × [[2], [1]] = [[4], [10]]

**Quiz 3:**
1. P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12
2. P(X = 3) = C(5,3) × (0.5)³ × (0.5)² = 10 × 0.125 × 0.25 = 0.3125
3. P(A|B) = (0.8 × 0.3) / 0.5 = 0.24 / 0.5 = 0.48

---

## Quick Reference

### Essential Formulas
- **Derivative of e^(ax)**: ae^(ax)
- **Derivative of ln(ax)**: a/x
- **Integration by parts**: ∫u dv = uv - ∫v du
- **Normal distribution mean**: μ
- **Normal distribution variance**: σ²
- **Standard error**: σ/√n

### Key Concepts for Exams
1. **L'Hôpital's Rule**: For indeterminate forms 0/0 or ∞/∞
2. **Matrix inverse**: A⁻¹ exists if det(A) ≠ 0
3. **Independence**: P(A ∩ B) = P(A) × P(B)
4. **Central Limit Theorem**: Sample means approach normal distribution

---

*Next: Advanced topics in multivariate calculus and matrix decomposition*

**📝 Study Tips:**
- Practice daily problems from each section
- Focus on understanding concepts, not just memorizing formulas  
- Use graphing tools to visualize functions and their derivatives
- Connect mathematical concepts to data science applications