# Statistics for Data Science - IITM Qualifier

## Table of Contents
1. [Descriptive Statistics](#descriptive-statistics)
2. [Probability Distributions](#probability-distributions)
3. [Hypothesis Testing](#hypothesis-testing)
4. [Regression Analysis](#regression-analysis)
5. [Practice Quizzes](#practice-quizzes)

---

## Descriptive Statistics

### 1.1 Measures of Central Tendency

#### Mean (Arithmetic Average)
**Population Mean**: μ = (Σx_i) / N
**Sample Mean**: x̄ = (Σx_i) / n

#### Median
- Middle value when data is ordered
- For odd n: median = middle value
- For even n: median = (middle two values) / 2

#### Mode
- Most frequently occurring value
- Can have no mode, one mode, or multiple modes

#### Example Dataset
Data: [2, 4, 4, 6, 8, 10, 12]
- Mean: (2+4+4+6+8+10+12)/7 = 46/7 ≈ 6.57
- Median: 6 (middle value)
- Mode: 4 (appears twice)

### 1.2 Measures of Variability

#### Range
Range = Maximum value - Minimum value

#### Variance
**Population Variance**: σ² = Σ(x_i - μ)² / N
**Sample Variance**: s² = Σ(x_i - x̄)² / (n-1)

#### Standard Deviation
**Population**: σ = √σ²
**Sample**: s = √s²

#### Coefficient of Variation
CV = (Standard Deviation / Mean) × 100%

#### Example Calculation
Data: [2, 4, 6, 8, 10]
- Mean: x̄ = 6
- Variance: s² = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] / (5-1) = 40/4 = 10
- Standard Deviation: s = √10 ≈ 3.16
- CV = (3.16/6) × 100% ≈ 52.7%

### 1.3 Measures of Shape

#### Skewness
- **Symmetric**: Skewness ≈ 0
- **Right-skewed**: Skewness > 0 (tail extends right)
- **Left-skewed**: Skewness < 0 (tail extends left)

#### Kurtosis
- **Mesokurtic**: Normal distribution (kurtosis = 3)
- **Leptokurtic**: Heavy tails (kurtosis > 3)
- **Platykurtic**: Light tails (kurtosis < 3)

---

## Probability Distributions

### 2.1 Discrete Distributions

#### Binomial Distribution
**Parameters**: n (trials), p (success probability)
**PMF**: P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
**Mean**: μ = np
**Variance**: σ² = np(1-p)

#### Example: Quality Control
A factory produces items with 5% defect rate. In a batch of 20 items:
- P(exactly 2 defects) = C(20,2) × (0.05)² × (0.95)¹⁸ ≈ 0.189
- Expected defects = 20 × 0.05 = 1

#### Poisson Distribution
**Parameter**: λ (average rate)
**PMF**: P(X = k) = (λ^k × e^(-λ)) / k!
**Mean**: μ = λ
**Variance**: σ² = λ

#### Example: Call Center
Average 3 calls per minute. Probability of exactly 5 calls in a minute:
P(X = 5) = (3⁵ × e^(-3)) / 5! = (243 × 0.0498) / 120 ≈ 0.101

### 2.2 Continuous Distributions

#### Normal Distribution
**Parameters**: μ (mean), σ² (variance)
**PDF**: f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²))

#### Standard Normal Distribution
- μ = 0, σ = 1
- Z = (X - μ) / σ (standardization)

#### Properties
- 68% of data within μ ± σ
- 95% of data within μ ± 2σ
- 99.7% of data within μ ± 3σ

#### Example: IQ Scores
IQ scores: μ = 100, σ = 15
- P(IQ > 115) = P(Z > 1) ≈ 0.159
- P(85 < IQ < 115) = P(-1 < Z < 1) ≈ 0.683

#### Exponential Distribution
**Parameter**: λ (rate parameter)
**PDF**: f(x) = λe^(-λx), x ≥ 0
**Mean**: μ = 1/λ
**Variance**: σ² = 1/λ²

---

## Hypothesis Testing

### 3.1 Basic Concepts

#### Null and Alternative Hypotheses
- **H₀**: Null hypothesis (status quo, no effect)
- **H₁** or **Hₐ**: Alternative hypothesis (what we want to prove)

#### Types of Errors
- **Type I Error (α)**: Rejecting true H₀
- **Type II Error (β)**: Failing to reject false H₀
- **Power**: 1 - β (probability of correctly rejecting false H₀)

#### Significance Level
Common levels: α = 0.05, 0.01, 0.10

### 3.2 One-Sample Tests

#### One-Sample t-test
**Test Statistic**: t = (x̄ - μ₀) / (s/√n)
**Degrees of Freedom**: df = n - 1

#### Example: Coffee Shop
A coffee shop claims average waiting time is 5 minutes.
Sample: n = 25, x̄ = 5.8, s = 2.1
H₀: μ = 5, H₁: μ ≠ 5

```
t = (5.8 - 5) / (2.1/√25) = 0.8 / 0.42 = 1.905
df = 24, critical value (α = 0.05, two-tailed) = ±2.064
Since |1.905| < 2.064, fail to reject H₀
```

### 3.3 Two-Sample Tests

#### Independent Samples t-test
**Assumptions**: 
- Independent samples
- Normal distributions
- Equal variances (or use Welch's t-test)

**Test Statistic**: t = (x̄₁ - x̄₂) / (sp√(1/n₁ + 1/n₂))
where sp = √[((n₁-1)s₁² + (n₂-1)s₂²) / (n₁+n₂-2)]

#### Paired Samples t-test
For matched pairs or before/after measurements:
**Test Statistic**: t = d̄ / (sd/√n)
where d̄ = mean of differences, sd = standard deviation of differences

### 3.4 Chi-Square Tests

#### Goodness of Fit Test
Tests if observed frequencies match expected frequencies:
**Test Statistic**: χ² = Σ((Observed - Expected)² / Expected)
**df** = number of categories - 1

#### Test of Independence
Tests if two categorical variables are independent:
**Test Statistic**: χ² = ΣΣ((Oij - Eij)² / Eij)
**df** = (rows - 1) × (columns - 1)

---

## Regression Analysis

### 4.1 Simple Linear Regression

#### Model
Y = β₀ + β₁X + ε

#### Least Squares Estimates
**Slope**: b₁ = Σ[(xi - x̄)(yi - ȳ)] / Σ(xi - x̄)²
**Intercept**: b₀ = ȳ - b₁x̄

#### Example: Sales and Advertising
Data: Advertising (X) vs Sales (Y)
```
X: [1, 2, 3, 4, 5]
Y: [2, 4, 6, 8, 10]

x̄ = 3, ȳ = 6
b₁ = [(1-3)(2-6) + (2-3)(4-6) + ... + (5-3)(10-6)] / [(1-3)² + (2-3)² + ... + (5-3)²]
   = [(-2)(-4) + (-1)(-2) + (0)(0) + (1)(2) + (2)(4)] / [4 + 1 + 0 + 1 + 4]
   = [8 + 2 + 0 + 2 + 8] / 10 = 20/10 = 2
b₀ = 6 - 2(3) = 0

Regression equation: Y = 0 + 2X = 2X
```

### 4.2 Correlation

#### Pearson Correlation Coefficient
r = Σ[(xi - x̄)(yi - ȳ)] / √[Σ(xi - x̄)² × Σ(yi - ȳ)²]

#### Interpretation
- r = 1: Perfect positive correlation
- r = 0: No linear correlation
- r = -1: Perfect negative correlation
- |r| > 0.7: Strong correlation
- 0.3 < |r| < 0.7: Moderate correlation
- |r| < 0.3: Weak correlation

### 4.3 Regression Diagnostics

#### R-squared (Coefficient of Determination)
R² = 1 - (SSE/SST)
where SSE = Σ(yi - ŷi)², SST = Σ(yi - ȳ)²

#### Residual Analysis
- **Linearity**: Residuals vs fitted values plot should show no pattern
- **Normality**: Normal probability plot of residuals
- **Homoscedasticity**: Constant variance of residuals
- **Independence**: No correlation between residuals

---

## Practice Quizzes

### Quiz 1: Descriptive Statistics
1. Calculate mean, median, and mode for: [1, 3, 3, 6, 7, 8, 9]
2. Find the standard deviation for: [2, 4, 6, 8, 10]
3. If a dataset has mean = 50 and standard deviation = 10, what percentage of data lies between 40 and 60?

### Quiz 2: Probability Distributions
1. A coin is flipped 10 times. What's the probability of getting exactly 6 heads?
2. In a Poisson distribution with λ = 4, find P(X = 2)
3. For a normal distribution with μ = 100 and σ = 15, find P(X > 115)

### Quiz 3: Hypothesis Testing
1. Test H₀: μ = 20 vs H₁: μ ≠ 20 given: n = 25, x̄ = 22, s = 5, α = 0.05
2. Interpret a p-value of 0.03 when α = 0.05
3. What is the relationship between Type I error and significance level?

### Quiz 4: Regression
1. Given the regression equation ŷ = 3 + 2x, interpret the slope and intercept
2. If r = 0.8, what does this tell us about the relationship between X and Y?
3. What does R² = 0.64 mean in the context of regression?

### Solutions

**Quiz 1:**
1. Mean = 5.29, Median = 6, Mode = 3
2. s = √[(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²]/(5-1) = √(40/4) = √10 ≈ 3.16
3. Approximately 68% (within one standard deviation)

**Quiz 2:**
1. P(X = 6) = C(10,6) × (0.5)⁶ × (0.5)⁴ = 210 × (0.5)¹⁰ ≈ 0.205
2. P(X = 2) = (4² × e⁻⁴)/2! = (16 × 0.0183)/2 ≈ 0.147
3. P(X > 115) = P(Z > 1) ≈ 0.159

**Quiz 3:**
1. t = (22-20)/(5/√25) = 2/1 = 2; |t| = 2 < 2.064 (critical value), fail to reject H₀
2. p < α, so reject H₀ (statistically significant result)
3. Type I error rate equals the significance level α

**Quiz 4:**
1. Slope = 2 (Y increases by 2 units for each unit increase in X); Intercept = 3 (Y = 3 when X = 0)
2. Strong positive correlation between X and Y
3. 64% of the variance in Y is explained by the regression model

---

## Quick Reference

### Key Formulas
- **Sample Mean**: x̄ = Σxi / n
- **Sample Variance**: s² = Σ(xi - x̄)² / (n-1)
- **Standard Error**: SE = s / √n
- **Confidence Interval**: x̄ ± t(α/2,df) × SE
- **t-statistic**: t = (x̄ - μ₀) / (s/√n)

### Distribution Properties
- **Normal**: Bell-shaped, symmetric, μ ± σ contains 68%
- **Binomial**: n trials, p success rate, mean = np
- **Poisson**: λ parameter, mean = variance = λ
- **Chi-square**: Right-skewed, df determines shape

### Critical Values (α = 0.05)
- **Z**: ±1.96 (two-tailed), 1.645 (one-tailed)
- **t (df=20)**: ±2.086 (two-tailed), 1.725 (one-tailed)
- **Chi-square (df=1)**: 3.841

---

*Next: Advanced statistical methods and multivariate analysis*

**📊 Study Tips:**
- Practice with real datasets to understand concepts
- Use statistical software (R, Python, Excel) for calculations
- Focus on interpretation, not just computation
- Understand when to use each test and their assumptions