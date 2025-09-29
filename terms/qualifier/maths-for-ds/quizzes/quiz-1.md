# Mathematics for Data Science - Practice Quiz 1

## Quiz: Calculus and Linear Algebra Fundamentals

**Instructions:** Choose the best answer for each question. This quiz covers basic concepts in calculus and linear algebra that are fundamental to data science.

---

### Question 1: Limits
What is the value of lim(x→3) (x² - 9)/(x - 3)?

A) 0  
B) 3  
C) 6  
D) Undefined

**Answer:** C) 6

**Explanation:** 
```
lim(x→3) (x² - 9)/(x - 3) = lim(x→3) [(x+3)(x-3)]/(x-3) 
                          = lim(x→3) (x+3) 
                          = 3+3 = 6
```

---

### Question 2: Derivatives
Find the derivative of f(x) = 3x⁴ - 2x² + 5x - 1

A) 12x³ - 4x + 5  
B) 12x³ - 4x + 5x  
C) 3x³ - 2x + 5  
D) 12x² - 4x + 5

**Answer:** A) 12x³ - 4x + 5

**Explanation:** Using the power rule:
- d/dx(3x⁴) = 12x³
- d/dx(-2x²) = -4x  
- d/dx(5x) = 5
- d/dx(-1) = 0

---

### Question 3: Chain Rule
What is the derivative of f(x) = sin(2x³)?

A) cos(2x³)  
B) 6x²cos(2x³)  
C) 6x²sin(2x³)  
D) 2cos(2x³)

**Answer:** B) 6x²cos(2x³)

**Explanation:** Using chain rule: d/dx[sin(u)] = cos(u) × du/dx
where u = 2x³, so du/dx = 6x²
Therefore: f'(x) = cos(2x³) × 6x² = 6x²cos(2x³)

---

### Question 4: Vector Operations
Given vectors u = [2, -1, 3] and v = [1, 4, -2], find u · v (dot product).

A) [2, -4, -6]  
B) 0  
C) -4  
D) 5

**Answer:** C) -4

**Explanation:** 
u · v = (2)(1) + (-1)(4) + (3)(-2) = 2 - 4 - 6 = -4

---

### Question 5: Matrix Multiplication
Calculate the product of matrices A = [[2, 1], [3, 4]] and B = [[1], [2]]

A) [[4], [11]]  
B) [[2, 2], [6, 8]]  
C) [[5], [7]]  
D) Cannot be multiplied

**Answer:** A) [[4], [11]]

**Explanation:** 
For 2×2 matrix times 2×1 matrix:
- Row 1: (2)(1) + (1)(2) = 2 + 2 = 4
- Row 2: (3)(1) + (4)(2) = 3 + 8 = 11
Result: [[4], [11]]

---

### Question 6: Probability
If P(A) = 0.3, P(B) = 0.4, and A and B are independent events, what is P(A ∩ B)?

A) 0.7  
B) 0.12  
C) 0.1  
D) 0.06

**Answer:** B) 0.12

**Explanation:** For independent events: P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12

---

### Question 7: Normal Distribution
In a standard normal distribution (μ = 0, σ = 1), approximately what percentage of data falls within one standard deviation of the mean?

A) 50%  
B) 68%  
C) 95%  
D) 99.7%

**Answer:** B) 68%

**Explanation:** This is part of the 68-95-99.7 rule:
- 68% within 1 standard deviation
- 95% within 2 standard deviations  
- 99.7% within 3 standard deviations

---

### Question 8: Optimization
Find the critical points of f(x) = x³ - 6x² + 9x + 2

A) x = 1, x = 3  
B) x = -1, x = 3  
C) x = 0, x = 6  
D) x = 2, x = 4

**Answer:** A) x = 1, x = 3

**Explanation:** 
Critical points occur where f'(x) = 0
f'(x) = 3x² - 12x + 9 = 0
3(x² - 4x + 3) = 0
3(x - 1)(x - 3) = 0
Therefore x = 1 and x = 3

---

### Question 9: Matrix Properties
What is the transpose of matrix A = [[1, 2, 3], [4, 5, 6]]?

A) [[1, 4], [2, 5], [3, 6]]  
B) [[6, 5, 4], [3, 2, 1]]  
C) [[1, 2, 3], [4, 5, 6]]  
D) [[4, 5, 6], [1, 2, 3]]

**Answer:** A) [[1, 4], [2, 5], [3, 6]]

**Explanation:** Transpose exchanges rows and columns:
Original: 2×3 matrix becomes 3×2 matrix
A^T[i,j] = A[j,i]

---

### Question 10: Integration Application
What is the definite integral ∫₀¹ 2x dx?

A) 0  
B) 1  
C) 2  
D) x²

**Answer:** B) 1

**Explanation:** 
∫ 2x dx = x² + C
∫₀¹ 2x dx = [x²]₀¹ = 1² - 0² = 1

---

## Quiz Results

**Scoring:**
- 9-10 correct: Excellent! You have a strong foundation
- 7-8 correct: Good! Review the topics you missed
- 5-6 correct: Fair. Focus on practicing more problems
- Below 5: Need more study. Review fundamental concepts

**Key Topics to Review Based on Common Mistakes:**

1. **Chain Rule**: Remember to multiply by the derivative of the inner function
2. **Vector Operations**: Dot product gives a scalar, not a vector
3. **Matrix Multiplication**: Check dimensions and multiply row × column
4. **Independence**: P(A ∩ B) = P(A) × P(B) only for independent events
5. **Critical Points**: Set derivative equal to zero and solve

**Next Steps:**
- If you scored well: Try Quiz 2 (Probability and Statistics Focus)
- If you need review: Go back to the relevant sections in the main notes
- Practice more problems in areas where you made mistakes

**Additional Practice Problems:**
1. Find lim(x→0) sin(3x)/x
2. Differentiate f(x) = ln(cos(x))
3. If A = [[2, 1], [0, 3]], find A²
4. In a normal distribution with μ = 50, σ = 10, find P(X > 60)

---

*More quizzes available: Quiz 2 (Statistics Focus), Quiz 3 (Linear Algebra Focus), Quiz 4 (Integration and Applications)*