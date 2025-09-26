# Linear Algebra - Complete Notes

## Chapter 1: Vectors and Vector Spaces

### 1.1 Introduction to Vectors

A vector is a mathematical object that has both magnitude and direction. In linear algebra, we often work with vectors in n-dimensional space.

#### Definition
A vector **v** in ℝⁿ is an ordered n-tuple of real numbers:
**v** = (v₁, v₂, ..., vₙ)

#### Examples
- 2D vector: **v** = (3, 4)
- 3D vector: **w** = (1, -2, 5)

### 1.2 Vector Operations

#### Addition
For vectors **u** = (u₁, u₂, ..., uₙ) and **v** = (v₁, v₂, ..., vₙ):
**u** + **v** = (u₁ + v₁, u₂ + v₂, ..., uₙ + vₙ)

#### Scalar Multiplication
For scalar c and vector **v** = (v₁, v₂, ..., vₙ):
c**v** = (cv₁, cv₂, ..., cvₙ)

#### Example Problem
Given **u** = (2, -1, 3) and **v** = (1, 4, -2), find **u** + **v** and 3**u**.

**Solution:**
- **u** + **v** = (2+1, -1+4, 3+(-2)) = (3, 3, 1)
- 3**u** = (3×2, 3×(-1), 3×3) = (6, -3, 9)

### 1.3 Dot Product

The dot product of two vectors **u** and **v** is:
**u** · **v** = u₁v₁ + u₂v₂ + ... + uₙvₙ

#### Properties
1. **u** · **v** = **v** · **u** (commutative)
2. **u** · (**v** + **w**) = **u** · **v** + **u** · **w** (distributive)
3. c(**u** · **v**) = (c**u**) · **v** = **u** · (c**v**)

### 1.4 Vector Spaces

A vector space V over a field F is a set equipped with two operations (addition and scalar multiplication) that satisfy eight axioms:

#### Axioms
1. **Closure under addition**: If **u**, **v** ∈ V, then **u** + **v** ∈ V
2. **Associativity of addition**: (**u** + **v**) + **w** = **u** + (**v** + **w**)
3. **Commutativity of addition**: **u** + **v** = **v** + **u**
4. **Identity element**: There exists **0** ∈ V such that **v** + **0** = **v**
5. **Inverse elements**: For each **v** ∈ V, there exists **-v** such that **v** + (**-v**) = **0**
6. **Closure under scalar multiplication**: If **v** ∈ V and c ∈ F, then c**v** ∈ V
7. **Distributivity**: c(**u** + **v**) = c**u** + c**v**
8. **Scalar multiplication identity**: 1**v** = **v**

## Chapter 2: Linear Independence and Basis

### 2.1 Linear Combinations

A vector **v** is a linear combination of vectors **v₁**, **v₂**, ..., **vₖ** if:
**v** = c₁**v₁** + c₂**v₂** + ... + cₖ**vₖ**

for some scalars c₁, c₂, ..., cₖ.

### 2.2 Linear Independence

Vectors **v₁**, **v₂**, ..., **vₖ** are linearly independent if the only solution to:
c₁**v₁** + c₂**v₂** + ... + cₖ**vₖ** = **0**

is c₁ = c₂ = ... = cₖ = 0.

#### Example
Are the vectors **v₁** = (1, 2, 3), **v₂** = (0, 1, 2), **v₃** = (1, 0, 1) linearly independent?

**Solution:**
Set up the equation: c₁(1, 2, 3) + c₂(0, 1, 2) + c₃(1, 0, 1) = (0, 0, 0)

This gives us the system:
- c₁ + c₃ = 0
- 2c₁ + c₂ = 0  
- 3c₁ + 2c₂ + c₃ = 0

Solving this system shows that c₁ = c₂ = c₃ = 0, so the vectors are linearly independent.

### 2.3 Basis and Dimension

A basis for a vector space V is a set of vectors that:
1. Spans V (every vector in V can be expressed as a linear combination)
2. Is linearly independent

The dimension of V is the number of vectors in any basis for V.

## Chapter 3: Matrices

### 3.1 Matrix Operations

#### Matrix Addition
For matrices A = [aᵢⱼ] and B = [bᵢⱼ] of the same size:
(A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ

#### Matrix Multiplication
For A (m×n) and B (n×p), the product AB is an m×p matrix where:
(AB)ᵢⱼ = Σₖ aᵢₖbₖⱼ

### 3.2 Special Matrices

- **Identity Matrix**: I = [δᵢⱼ] where δᵢⱼ = 1 if i=j, 0 otherwise
- **Zero Matrix**: O = [0] (all entries are zero)
- **Transpose**: Aᵀ where (Aᵀ)ᵢⱼ = aⱼᵢ

## Practice Problems

### Problem 1
Find the linear combination 2**u** - 3**v** + **w** where:
- **u** = (1, -2, 4)
- **v** = (3, 0, -1)  
- **w** = (-1, 5, 2)

### Problem 2
Determine if the following vectors form a basis for ℝ³:
- **v₁** = (1, 0, 1)
- **v₂** = (0, 1, 1)
- **v₃** = (1, 1, 0)

### Problem 3
Calculate the matrix product:
```
[2  1] [1  3]
[0 -1] [2  0]
```

---

## Quick Reference Formulas

- **Vector magnitude**: ||**v**|| = √(v₁² + v₂² + ... + vₙ²)
- **Distance between points**: d = ||**u** - **v**||
- **Matrix determinant (2×2)**: det(A) = ad - bc for A = [a b; c d]
- **Matrix inverse (2×2)**: A⁻¹ = (1/det(A))[d -b; -c a]

---

*Next: Chapter 4 - Eigenvalues and Eigenvectors*