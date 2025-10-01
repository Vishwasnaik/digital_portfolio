document.addEventListener('DOMContentLoaded', function() {

    // --- Typed.js Animation ---
    const options = {
        strings: ["engaging web experiences.", "dynamic user interfaces.", "full-stack applications."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        cursorChar: '|',
    };
    const typed = new Typed('#typed-text', options);

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
            }
        });
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Reveal Sections on Scroll ---
    const sections = document.querySelectorAll('.reveal');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});