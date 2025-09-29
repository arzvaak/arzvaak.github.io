// Interactive Quiz JavaScript

// Quiz data
const quizData = {
    title: "Mathematics for Data Science - Week 1",
    timeLimit: 15, // minutes
    passingScore: 70,
    questions: [
        {
            id: 1,
            question: "What is the value of $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$?",
            options: [
                { id: 'a', text: '0' },
                { id: 'b', text: '3' },
                { id: 'c', text: '6' },
                { id: 'd', text: 'Undefined' }
            ],
            correct: 'c',
            explanation: "Factor the numerator: $x^2 - 9 = (x+3)(x-3)$. Then $\\lim_{x \\to 3} \\frac{(x+3)(x-3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6$"
        },
        {
            id: 2,
            question: "Find the derivative of $f(x) = 3x^4 - 2x^2 + 5x - 1$",
            options: [
                { id: 'a', text: '$12x^3 - 4x + 5$' },
                { id: 'b', text: '$12x^3 - 4x^2 + 5x$' },
                { id: 'c', text: '$3x^3 - 2x + 5$' },
                { id: 'd', text: '$12x^4 - 4x^3 + 5x^2$' }
            ],
            correct: 'a',
            explanation: "Using the power rule: $\\frac{d}{dx}(3x^4) = 12x^3$, $\\frac{d}{dx}(-2x^2) = -4x$, $\\frac{d}{dx}(5x) = 5$, $\\frac{d}{dx}(-1) = 0$"
        },
        {
            id: 3,
            question: "What is the dot product of vectors $\\vec{a} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and $\\vec{b} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$?",
            options: [
                { id: 'a', text: '8' },
                { id: 'b', text: '11' },
                { id: 'c', text: '7' },
                { id: 'd', text: '12' }
            ],
            correct: 'b',
            explanation: "Dot product: $\\vec{a} \\cdot \\vec{b} = (2)(4) + (3)(1) = 8 + 3 = 11$"
        },
        {
            id: 4,
            question: "Which of the following is the correct chain rule formula?",
            options: [
                { id: 'a', text: "$\\frac{d}{dx}[f(g(x))] = f'(x) \\cdot g'(x)$" },
                { id: 'b', text: "$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$" },
                { id: 'c', text: "$\\frac{d}{dx}[f(g(x))] = f(x) \\cdot g'(x)$" },
                { id: 'd', text: "$\\frac{d}{dx}[f(g(x))] = f'(x) + g'(x)$" }
            ],
            correct: 'b',
            explanation: "The chain rule states that the derivative of a composite function is the derivative of the outer function evaluated at the inner function, times the derivative of the inner function."
        },
        {
            id: 5,
            question: "What is the magnitude of vector $\\vec{v} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$?",
            options: [
                { id: 'a', text: '5' },
                { id: 'b', text: '7' },
                { id: 'c', text: '12' },
                { id: 'd', text: '25' }
            ],
            correct: 'a',
            explanation: "Magnitude: $|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$"
        },
        {
            id: 6,
            question: "What is $\\frac{d}{dx}(e^{2x})$?",
            options: [
                { id: 'a', text: '$e^{2x}$' },
                { id: 'b', text: '$2e^{2x}$' },
                { id: 'c', text: '$2xe^{2x-1}$' },
                { id: 'd', text: '$e^{2x-1}$' }
            ],
            correct: 'b',
            explanation: "Using the chain rule: $\\frac{d}{dx}(e^{2x}) = e^{2x} \\cdot \\frac{d}{dx}(2x) = e^{2x} \\cdot 2 = 2e^{2x}$"
        },
        {
            id: 7,
            question: "Which matrix operation is NOT commutative?",
            options: [
                { id: 'a', text: 'Matrix addition' },
                { id: 'b', text: 'Matrix multiplication' },
                { id: 'c', text: 'Scalar multiplication' },
                { id: 'd', text: 'Matrix subtraction' }
            ],
            correct: 'b',
            explanation: "Matrix multiplication is not commutative: $AB \\neq BA$ in general. Matrix addition and scalar multiplication are commutative."
        },
        {
            id: 8,
            question: "What is $\\int x^3 dx$?",
            options: [
                { id: 'a', text: '$3x^2 + C$' },
                { id: 'b', text: '$\\frac{x^4}{4} + C$' },
                { id: 'c', text: '$\\frac{x^3}{3} + C$' },
                { id: 'd', text: '$4x^4 + C$' }
            ],
            correct: 'b',
            explanation: "Using the power rule for integration: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$, so $\\int x^3 dx = \\frac{x^4}{4} + C$"
        },
        {
            id: 9,
            question: "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, what is the determinant of A?",
            options: [
                { id: 'a', text: '-2' },
                { id: 'b', text: '2' },
                { id: 'c', text: '10' },
                { id: 'd', text: '-10' }
            ],
            correct: 'a',
            explanation: "For a 2×2 matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant is $ad - bc = (1)(4) - (2)(3) = 4 - 6 = -2$"
        },
        {
            id: 10,
            question: "What is the second derivative of $f(x) = x^4 - 3x^2 + 2x$?",
            options: [
                { id: 'a', text: '$4x^3 - 6x + 2$' },
                { id: 'b', text: '$12x^2 - 6$' },
                { id: 'c', text: '$12x^2 - 6x$' },
                { id: 'd', text: '$24x$' }
            ],
            correct: 'b',
            explanation: "First derivative: $f'(x) = 4x^3 - 6x + 2$. Second derivative: $f''(x) = 12x^2 - 6$"
        }
    ]
};

// Quiz state
let quizState = {
    currentQuestion: 0,
    answers: {},
    flagged: new Set(),
    timeRemaining: quizData.timeLimit * 60, // seconds
    timerInterval: null,
    isSubmitted: false
};

// Initialize quiz
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    startTimer();
    
    // MathJax configuration
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        svg: {
            fontCache: 'global'
        }
    };
});

function initializeQuiz() {
    createQuestionNavigator();
    displayQuestion(0);
    updateProgress();
    
    // Event listeners
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitQuiz);
}

function createQuestionNavigator() {
    const grid = document.getElementById('questionGrid');
    grid.innerHTML = '';
    
    for (let i = 0; i < quizData.questions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'question-nav-btn';
        btn.textContent = i + 1;
        btn.addEventListener('click', () => goToQuestion(i));
        grid.appendChild(btn);
    }
    
    updateQuestionNavigator();
}

function displayQuestion(index) {
    const container = document.getElementById('questionContainer');
    const question = quizData.questions[index];
    
    container.innerHTML = `
        <div class="question active">
            <div class="question-header">
                <span class="question-number">Question ${index + 1} of ${quizData.questions.length}</span>
                <button class="question-flag" onclick="toggleFlag(${index})">
                    ${quizState.flagged.has(index) ? '🚩' : '⚑'}
                </button>
            </div>
            <div class="question-text">${question.question}</div>
            <div class="question-options">
                ${question.options.map(option => `
                    <div class="option ${quizState.answers[index] === option.id ? 'selected' : ''}" 
                         onclick="selectOption(${index}, '${option.id}')">
                        <div class="option-letter">${option.id.toUpperCase()}</div>
                        <div class="option-text">${option.text}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Re-render MathJax
    if (window.MathJax) {
        MathJax.typesetPromise([container]);
    }
}

function selectOption(questionIndex, optionId) {
    quizState.answers[questionIndex] = optionId;
    displayQuestion(questionIndex);
    updateQuestionNavigator();
    updateProgress();
}

function toggleFlag(questionIndex) {
    if (quizState.flagged.has(questionIndex)) {
        quizState.flagged.delete(questionIndex);
    } else {
        quizState.flagged.add(questionIndex);
    }
    displayQuestion(questionIndex);
    updateQuestionNavigator();
}

function goToQuestion(index) {
    quizState.currentQuestion = index;
    displayQuestion(index);
    updateNavigationButtons();
    updateQuestionNavigator();
}

function previousQuestion() {
    if (quizState.currentQuestion > 0) {
        quizState.currentQuestion--;
        displayQuestion(quizState.currentQuestion);
        updateNavigationButtons();
        updateQuestionNavigator();
    }
}

function nextQuestion() {
    if (quizState.currentQuestion < quizData.questions.length - 1) {
        quizState.currentQuestion++;
        displayQuestion(quizState.currentQuestion);
        updateNavigationButtons();
        updateQuestionNavigator();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = quizState.currentQuestion === 0;
    
    if (quizState.currentQuestion === quizData.questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

function updateQuestionNavigator() {
    const buttons = document.querySelectorAll('.question-nav-btn');
    buttons.forEach((btn, index) => {
        btn.className = 'question-nav-btn';
        
        if (index === quizState.currentQuestion) {
            btn.classList.add('current');
        }
        
        if (quizState.answers[index] !== undefined) {
            btn.classList.add('answered');
        }
        
        if (quizState.flagged.has(index)) {
            btn.classList.add('flagged');
        }
    });
}

function updateProgress() {
    const answered = Object.keys(quizState.answers).length;
    const total = quizData.questions.length;
    const percentage = (answered / total) * 100;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `Question ${quizState.currentQuestion + 1} of ${total}`;
    
    updateNavigationButtons();
}

function startTimer() {
    quizState.timerInterval = setInterval(() => {
        quizState.timeRemaining--;
        updateTimerDisplay();
        
        if (quizState.timeRemaining <= 0) {
            clearInterval(quizState.timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(quizState.timeRemaining / 60);
    const seconds = quizState.timeRemaining % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timer = document.getElementById('timer');
    timer.textContent = display;
    
    // Change color based on time remaining
    if (quizState.timeRemaining <= 60) {
        timer.className = 'timer danger';
    } else if (quizState.timeRemaining <= 300) {
        timer.className = 'timer warning';
    } else {
        timer.className = 'timer';
    }
}

function submitQuiz() {
    if (quizState.isSubmitted) return;
    
    clearInterval(quizState.timerInterval);
    quizState.isSubmitted = true;
    
    const results = calculateResults();
    showResults(results);
}

function calculateResults() {
    let correct = 0;
    const total = quizData.questions.length;
    const questionResults = [];
    
    quizData.questions.forEach((question, index) => {
        const userAnswer = quizState.answers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) correct++;
        
        questionResults.push({
            question: `Question ${index + 1}`,
            correct: isCorrect,
            userAnswer,
            correctAnswer: question.correct
        });
    });
    
    const score = Math.round((correct / total) * 100);
    const passed = score >= quizData.passingScore;
    
    return {
        score,
        correct,
        total,
        passed,
        timeUsed: quizData.timeLimit * 60 - quizState.timeRemaining,
        questionResults
    };
}

function showResults(results) {
    const modal = document.getElementById('resultsModal');
    const body = document.getElementById('resultsBody');
    
    const timeUsed = Math.floor(results.timeUsed / 60) + ':' + 
                    (results.timeUsed % 60).toString().padStart(2, '0');
    
    body.innerHTML = `
        <div class="results-summary">
            <div class="score-circle ${results.passed ? 'pass' : 'fail'}">
                ${results.score}%
            </div>
            <h3>${results.passed ? 'Congratulations! You passed!' : 'Keep studying and try again!'}</h3>
        </div>
        
        <div class="results-details">
            <div class="result-stat">
                <span class="result-number">${results.correct}</span>
                <span class="result-label">Correct</span>
            </div>
            <div class="result-stat">
                <span class="result-number">${results.total - results.correct}</span>
                <span class="result-label">Incorrect</span>
            </div>
            <div class="result-stat">
                <span class="result-number">${timeUsed}</span>
                <span class="result-label">Time Used</span>
            </div>
            <div class="result-stat">
                <span class="result-number">${results.passed ? 'PASS' : 'FAIL'}</span>
                <span class="result-label">Result</span>
            </div>
        </div>
        
        <div class="question-review">
            <h3>Question Review</h3>
            ${results.questionResults.map(q => `
                <div class="review-item">
                    <span class="review-question">${q.question}</span>
                    <span class="review-status ${q.correct ? 'correct' : 'wrong'}">
                        ${q.correct ? 'Correct' : 'Wrong'}
                    </span>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'flex';
}

function retakeQuiz() {
    // Reset quiz state
    quizState = {
        currentQuestion: 0,
        answers: {},
        flagged: new Set(),
        timeRemaining: quizData.timeLimit * 60,
        timerInterval: null,
        isSubmitted: false
    };
    
    // Hide modal
    document.getElementById('resultsModal').style.display = 'none';
    
    // Reinitialize
    initializeQuiz();
    startTimer();
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (quizState.isSubmitted) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            if (quizState.currentQuestion > 0) previousQuestion();
            break;
        case 'ArrowRight':
            if (quizState.currentQuestion < quizData.questions.length - 1) nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(e.key) - 1;
            const question = quizData.questions[quizState.currentQuestion];
            if (question.options[optionIndex]) {
                selectOption(quizState.currentQuestion, question.options[optionIndex].id);
            }
            break;
    }
});