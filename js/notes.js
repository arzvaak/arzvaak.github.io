// Notes-specific JavaScript

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

// Mini quiz functionality
document.addEventListener('DOMContentLoaded', function() {
    // Quiz option handling
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizFeedback = document.querySelector('.quiz-feedback');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const isCorrect = this.dataset.answer === 'correct';
            
            // Remove previous states
            quizOptions.forEach(opt => {
                opt.classList.remove('correct', 'wrong');
                opt.disabled = true;
            });
            
            // Show result
            if (isCorrect) {
                this.classList.add('correct');
                quizFeedback.querySelector('.correct-feedback').style.display = 'block';
                quizFeedback.querySelector('.wrong-feedback').style.display = 'none';
            } else {
                this.classList.add('wrong');
                // Also highlight the correct answer
                document.querySelector('[data-answer="correct"]').classList.add('correct');
                quizFeedback.querySelector('.correct-feedback').style.display = 'none';
                quizFeedback.querySelector('.wrong-feedback').style.display = 'block';
            }
            
            quizFeedback.style.display = 'block';
        });
    });
    
    // Table of contents active link highlighting
    const tocLinks = document.querySelectorAll('.toc a');
    const sections = document.querySelectorAll('.note-section, .subsection');
    
    function highlightTOC() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightTOC);
    highlightTOC(); // Initial highlight
    
    // Smooth scrolling for TOC links
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Progress bar animation
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = progressBar.style.width || '25%';
        }, 1000);
    }
    
    // Next/Previous week navigation
    const nextBtn = document.querySelector('.nav-btn.next');
    const prevBtn = document.querySelector('.nav-btn.prev');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            // For now, just show an alert - you can implement week navigation later
            alert('Week 2 coming soon! 📚');
        });
    }
    
    // Add copy functionality to formula cards
    const formulaCards = document.querySelectorAll('.formula-card');
    formulaCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle animation to show it was clicked
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });
    
    // Add hover effects to example boxes
    const exampleBoxes = document.querySelectorAll('.example-box');
    exampleBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Add loading animation for MathJax
document.addEventListener('DOMContentLoaded', function() {
    // Show loading indicator for math
    const mathElements = document.querySelectorAll('.math-formula, .formula');
    mathElements.forEach(element => {
        element.style.opacity = '0.5';
    });
    
    // Wait for MathJax to load
    if (window.MathJax) {
        MathJax.startup.promise.then(() => {
            mathElements.forEach(element => {
                element.style.opacity = '1';
                element.style.transition = 'opacity 0.3s ease';
            });
        });
    }
});