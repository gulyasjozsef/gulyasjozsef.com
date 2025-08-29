// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const animatedElements = [
        { selector: '.hero-text', class: 'slide-in-left' },
        { selector: '.hero-image', class: 'slide-in-right' },
        { selector: '.about-text', class: 'slide-in-left' },
        { selector: '.about-highlights', class: 'slide-in-right' },
        { selector: '.skill-card', class: 'fade-in' },
        { selector: '.work-card', class: 'fade-in' },
        { selector: '.insight-card', class: 'fade-in' },
        { selector: '.portfolio-item', class: 'fade-in' },
        { selector: '.contact-info', class: 'slide-in-left' },
        { selector: '.contact-form-container', class: 'slide-in-right' }
    ];

    animatedElements.forEach(({ selector, class: className }) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add(className);
            element.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    submitBtn.classList.add('form-success');
    submitBtn.disabled = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        submitBtn.classList.remove('form-success');
        submitBtn.disabled = false;
    }, 3000);
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scroll-top');

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax1 = document.querySelector('.floating-1');
    const parallax2 = document.querySelector('.floating-2');
    
    if (parallax1 && parallax2) {
        const speed1 = scrolled * 0.5;
        const speed2 = scrolled * 0.3;
        
        parallax1.style.transform = `translateY(${speed1}px)`;
        parallax2.style.transform = `translateY(${speed2}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Preload images for better performance
const imageUrls = [
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Add stagger animation delay to grid items
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.skill-card, .work-card, .insight-card, .portfolio-item');
    gridItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Enhanced hover effects for cards
document.querySelectorAll('.work-card, .skill-card, .insight-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});