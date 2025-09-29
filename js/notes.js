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
    
    // AGGRESSIVE DARK THEME ENFORCEMENT - Force override all light backgrounds
    function forceDarkTheme() {
        const lightBackgroundColors = [
            '#dcfce7', '#fecaca', '#dbeafe', '#fef3c7', '#f1f5f9', '#ecfdf5',
            '#eff6ff', '#f0f8ff', '#fef2f2', '#e0f2fe', '#fff3cd', '#f8f9fa',
            '#ffffff', '#fff', '#ffeaa7', '#e3f2fd', '#d4edda', '#f8d7da',
            '#e0e0e0', '#ddd6fe', '#f0f9ff', '#f8fafc', '#e5e7eb', '#f3f4f6',
            '#fde68a', '#f0fdf4', '#e0e7ff', '#f1f8e9', '#e8f5e8', '#fff3e0',
            '#ffecb3', '#fce4ec', '#f8bbd9', '#fff9c4', '#ffcdd2', '#c8e6c9',
            '#f3e5f5'
        ];
        
        // Target all elements with problematic classes
        const problematicSelectors = [
            '.example-item',
            '.example-item.positive',
            '.example-item.negative', 
            '.example-item.integers',
            '.example-item.decimals',
            '.factor',
            '.step-card',
            '.density-step',
            '.factorization-row',
            '.demonstration',
            '.infinite-density',
            '.common-factors',
            '.powers',
            '.factors',
            '.step',
            '.find-gcd',
            '.gcd-result',
            '.divide',
            '.fraction-equivalence'
        ];
        
        problematicSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.setProperty('background', '#1f2937', 'important');
                element.style.setProperty('background-color', '#1f2937', 'important');
                element.style.setProperty('color', '#f9fafb', 'important');
                element.style.setProperty('border-color', '#374151', 'important');
            });
        });
        
        // Force override any element with light background colors
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const bgColor = computedStyle.backgroundColor.trim();

            const forceDark = () => {
                element.style.setProperty('background', '#1f2937', 'important');
                element.style.setProperty('background-color', '#1f2937', 'important');
                element.style.setProperty('color', '#f9fafb', 'important');
                element.style.setProperty('border-color', '#374151', 'important');
            };

            // Treat any semi-transparent white as light
            if (/rgba?\(\s*255\s*,\s*255\s*,\s*255(\s*,\s*0?\.\d+)?\s*\)/i.test(bgColor)) {
                forceDark();
                return;
            }

            // Convert rgb to hex for exact match checks
            if (bgColor.startsWith('rgb')) {
                const nums = bgColor.match(/\d+/g);
                if (nums && nums.length >= 3) {
                    const hex = '#' + nums.slice(0, 3).map(n => {
                        const h = parseInt(n, 10).toString(16);
                        return h.length === 1 ? '0' + h : h;
                    }).join('');

                    if (lightBackgroundColors.includes(hex.toLowerCase())) {
                        forceDark();
                        return;
                    }

                    // Explicitly catch rgb(241,245,249) == #f1f5f9
                    if (hex.toLowerCase() === '#f1f5f9') {
                        forceDark();
                        return;
                    }
                }
            }
        });
    }
    
    // Run immediately and also after a short delay to catch any dynamic content
    forceDarkTheme();
    setTimeout(forceDarkTheme, 100);
    setTimeout(forceDarkTheme, 500);
    setTimeout(forceDarkTheme, 1000);
    
    // Also run when any new content is added to the page
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                setTimeout(forceDarkTheme, 50);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});