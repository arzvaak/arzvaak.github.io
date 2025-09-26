# Python Programming - Complete Guide

## Chapter 1: Getting Started with Python

### 1.1 Introduction

Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data science, artificial intelligence, and automation.

#### Why Python?
- **Easy to learn**: Simple, readable syntax
- **Versatile**: Used in many domains
- **Large community**: Extensive libraries and support
- **Cross-platform**: Runs on Windows, macOS, Linux

### 1.2 Python Basics

#### Variables and Data Types

```python
# Integer
age = 25

# Float
price = 19.99

# String
name = "Arzvaak"

# Boolean
is_student = True

# List
subjects = ["Math", "Physics", "Computer Science"]

# Dictionary
student_info = {
    "name": "John",
    "age": 20,
    "grade": "A"
}
```

#### Basic Operations

```python
# Arithmetic operations
a = 10
b = 3

print(a + b)    # Addition: 13
print(a - b)    # Subtraction: 7
print(a * b)    # Multiplication: 30
print(a / b)    # Division: 3.333...
print(a // b)   # Floor division: 3
print(a % b)    # Modulus: 1
print(a ** b)   # Exponentiation: 1000
```

## Chapter 2: Control Structures

### 2.1 Conditional Statements

```python
# If-elif-else statement
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")
```

### 2.2 Loops

#### For Loop
```python
# Iterating over a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")

# Using range()
for i in range(5):
    print(f"Number: {i}")

# Range with start, stop, step
for i in range(2, 10, 2):
    print(i)  # Prints: 2, 4, 6, 8
```

#### While Loop
```python
# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# While loop with condition
number = 1
while number <= 100:
    if number % 15 == 0:
        print("FizzBuzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print(number)
    number += 1
```

## Chapter 3: Functions

### 3.1 Defining Functions

```python
# Simple function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameter
def greet_with_title(name, title="Mr."):
    return f"Hello, {title} {name}!"

# Function with multiple parameters
def calculate_area(length, width):
    """Calculate the area of a rectangle."""
    return length * width

# Function with variable arguments
def sum_all(*args):
    return sum(args)

# Function with keyword arguments
def create_profile(**kwargs):
    profile = {}
    for key, value in kwargs.items():
        profile[key] = value
    return profile

# Examples
print(greet("Alice"))
print(greet_with_title("Smith", "Dr."))
print(calculate_area(5, 3))
print(sum_all(1, 2, 3, 4, 5))
print(create_profile(name="John", age=25, city="Mumbai"))
```

### 3.2 Lambda Functions

```python
# Lambda function
square = lambda x: x ** 2
print(square(5))  # Output: 25

# Using lambda with map()
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers)  # Output: [1, 4, 9, 16, 25]

# Using lambda with filter()
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4]
```

## Chapter 4: Data Structures

### 4.1 Lists

```python
# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# List methods
fruits.append("grape")          # Add to end
fruits.insert(1, "mango")       # Insert at index
fruits.remove("banana")         # Remove first occurrence
fruits.pop()                    # Remove and return last item
fruits.pop(0)                   # Remove and return item at index

# List comprehensions
squares = [x ** 2 for x in range(10)]
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print(squares)      # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(even_squares) # [0, 4, 16, 36, 64]
```

### 4.2 Dictionaries

```python
# Creating dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "courses": ["Math", "Physics", "CS"]
}

# Dictionary methods
student["grade"] = "A"              # Add/update
student.update({"gpa": 3.8})        # Update multiple
name = student.get("name", "Unknown") # Safe get
courses = student.pop("courses")    # Remove and return

# Dictionary comprehensions
word_lengths = {word: len(word) for word in ["hello", "world", "python"]}
print(word_lengths)  # {'hello': 5, 'world': 5, 'python': 6}
```

### 4.3 Sets

```python
# Creating sets
fruits = {"apple", "banana", "orange"}
numbers = set([1, 2, 3, 4, 5])

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2           # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2    # {3, 4}
difference = set1 - set2      # {1, 2}
symmetric_diff = set1 ^ set2  # {1, 2, 5, 6}
```

## Chapter 5: Object-Oriented Programming

### 5.1 Classes and Objects

```python
class Student:
    # Class variable
    school_name = "IIT Madras"
    
    def __init__(self, name, age, student_id):
        # Instance variables
        self.name = name
        self.age = age
        self.student_id = student_id
        self.courses = []
    
    def add_course(self, course):
        self.courses.append(course)
    
    def get_info(self):
        return f"Student: {self.name}, Age: {self.age}, ID: {self.student_id}"
    
    def __str__(self):
        return f"{self.name} (ID: {self.student_id})"

# Creating objects
student1 = Student("Alice", 20, "CS001")
student2 = Student("Bob", 21, "CS002")

# Using methods
student1.add_course("Data Structures")
student1.add_course("Algorithms")

print(student1.get_info())
print(student1.courses)
```

### 5.2 Inheritance

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # Call parent constructor
        self.student_id = student_id
        self.gpa = 0.0
    
    def study(self, subject):
        return f"{self.name} is studying {subject}"
    
    def introduce(self):  # Override parent method
        return f"Hi, I'm {self.name}, a student with ID {self.student_id}"

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
    
    def teach(self):
        return f"{self.name} is teaching {self.subject}"

# Using inheritance
student = Student("Alice", 20, "CS001")
teacher = Teacher("Dr. Smith", 45, "Computer Science")

print(student.introduce())
print(student.study("Python"))
print(teacher.introduce())
print(teacher.teach())
```

## Chapter 6: File Handling and Error Management

### 6.1 File Operations

```python
# Writing to a file
def write_to_file(filename, content):
    try:
        with open(filename, 'w') as file:
            file.write(content)
        print(f"Successfully wrote to {filename}")
    except IOError:
        print(f"Error writing to {filename}")

# Reading from a file
def read_from_file(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        print(f"File {filename} not found")
        return None
    except IOError:
        print(f"Error reading from {filename}")
        return None

# Working with CSV files
import csv

def write_csv(filename, data):
    with open(filename, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Name', 'Age', 'Grade'])  # Header
        writer.writerows(data)

def read_csv(filename):
    students = []
    with open(filename, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            students.append(row)
    return students

# Example usage
student_data = [
    ['Alice', 20, 'A'],
    ['Bob', 21, 'B'],
    ['Charlie', 19, 'A']
]

write_csv('students.csv', student_data)
students = read_csv('students.csv')
print(students)
```

### 6.2 Exception Handling

```python
# Basic try-except
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Invalid input types")
        return None

# Multiple exceptions
def process_list(numbers):
    try:
        total = sum(numbers)
        average = total / len(numbers)
        return average
    except TypeError:
        print("Error: Input must be a list of numbers")
    except ZeroDivisionError:
        print("Error: List cannot be empty")
    except Exception as e:
        print(f"Unexpected error: {e}")

# Custom exceptions
class InvalidGradeError(Exception):
    def __init__(self, grade):
        self.grade = grade
        super().__init__(f"Invalid grade: {grade}. Grade must be between 0 and 100.")

def validate_grade(grade):
    if not 0 <= grade <= 100:
        raise InvalidGradeError(grade)
    return grade

# Using custom exception
try:
    grade = validate_grade(105)
except InvalidGradeError as e:
    print(e)
```

## Practice Problems

### Problem 1: Student Management System
Create a student management system with the following features:
1. Add new students
2. Display all students
3. Search for a student by ID
4. Calculate average GPA

### Problem 2: File Processing
Write a program that:
1. Reads a text file
2. Counts the frequency of each word
3. Writes the results to a new file

### Problem 3: Data Analysis
Given a list of student scores:
1. Calculate mean, median, and mode
2. Find students above and below average
3. Generate a grade distribution report

## Quick Reference

### Common Built-in Functions
```python
len()       # Length of sequence
max()       # Maximum value
min()       # Minimum value
sum()       # Sum of numbers
sorted()    # Return sorted list
enumerate() # Add counter to iterable
zip()       # Combine iterables
type()      # Get object type
isinstance() # Check if object is instance of class
```

### String Methods
```python
str.upper()     # Convert to uppercase
str.lower()     # Convert to lowercase
str.strip()     # Remove whitespace
str.split()     # Split into list
str.join()      # Join list into string
str.replace()   # Replace substring
str.find()      # Find substring position
```

---

*Next: Advanced Python Topics - Decorators, Generators, and Context Managers*