// Subject page JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Week navigation functionality
    const weekNavItems = document.querySelectorAll('.week-nav-item');
    const weekSections = document.querySelectorAll('.week-section');
    
    // Smooth scrolling for week navigation
    weekNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active state
                weekNavItems.forEach(navItem => navItem.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Progress bar animations
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const targetWidth = bar.style.width || '0%';
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 500);
        });
    }
    
    // Animate progress bars when page loads
    setTimeout(animateProgressBars, 1000);
    
    // Scroll spy for week navigation
    function updateActiveWeek() {
        let current = '';
        weekSections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        weekNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveWeek);
    updateActiveWeek(); // Initial call
    
    // Topic card hover effects
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Action button hover effects
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Download week function
function downloadWeek(weekNumber) {
    // Show a message for now - you can implement actual PDF generation later
    alert(`Download functionality for Week ${weekNumber} coming soon! 📥`);
    
    // You could implement actual PDF generation here using libraries like jsPDF
    // or redirect to a server endpoint that generates PDFs
}

// Notify me function
function notifyMe(weekName) {
    const email = prompt('Enter your email to be notified when ' + weekName + ' is available:');
    
    if (email && validateEmail(email)) {
        // Store the email for notifications (you'd typically send this to a backend)
        localStorage.setItem('notifyEmail_' + weekName.replace(/\s+/g, ''), email);
        
        alert('Thanks! We\'ll notify you at ' + email + ' when ' + weekName + ' is available. 📧');
        
        // You could implement actual email notification here
        // by sending the email to your backend service
    } else if (email) {
        alert('Please enter a valid email address.');
    }
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Subject statistics animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const numericValue = parseInt(finalValue);
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = Math.ceil(numericValue / 20);
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                stat.textContent = currentValue + (isPercentage ? '%' : '');
            }, 100);
        }
    });
}

// Animate stats when the subject header comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});

// Observe the subject stats
const subjectStats = document.querySelector('.subject-stats');
if (subjectStats) {
    observer.observe(subjectStats);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + number keys to navigate to weeks
    if (e.altKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const weekId = 'week' + e.key;
        const weekElement = document.getElementById(weekId);
        if (weekElement) {
            weekElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Escape key to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Add keyboard shortcut hints
function showKeyboardHints() {
    const hints = document.createElement('div');
    hints.className = 'keyboard-hints';
    hints.innerHTML = `
        <div class="hints-content">
            <h4>⌨️ Keyboard Shortcuts</h4>
            <ul>
                <li><kbd>Alt</kbd> + <kbd>1-4</kbd> - Navigate to weeks</li>
                <li><kbd>Esc</kbd> - Scroll to top</li>
            </ul>
        </div>
    `;
    hints.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        font-size: 0.8rem;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(hints);
    
    setTimeout(() => {
        hints.style.opacity = '1';
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hints.style.opacity = '0';
        setTimeout(() => {
            if (hints.parentNode) {
                hints.parentNode.removeChild(hints);
            }
        }, 300);
    }, 5000);
}

// Show keyboard hints on page load
setTimeout(showKeyboardHints, 3000);