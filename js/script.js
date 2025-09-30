// Mobile Navigation Toggle (works with both static nav and injected nav)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    const setAria = (open) => {
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    const toggle = () => {
        const willOpen = navMenu.classList.contains('hidden');
        navMenu.classList.toggle('hidden');
        setAria(willOpen);
    };
    navToggle.addEventListener('click', toggle);
    navToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('#navMenu a').forEach(link => {
        link.addEventListener('click', () => {
            if (!navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
                setAria(false);
            }
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});