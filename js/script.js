document.addEventListener('DOMContentLoaded', function() {

    // --- Language Switcher ---
    const body = document.body;
    const langTCBtn = document.getElementById('lang-tc-btn');
    const langENBtn = document.getElementById('lang-en-btn');
    const searchInput = document.getElementById('searchInput');

    function setLanguage(lang) {
        if (!body || !langTCBtn || !langENBtn) return;

        if (lang === 'en') {
            body.classList.remove('lang-tc');
            body.classList.add('lang-en');
            langENBtn.classList.add('active');
            langTCBtn.classList.remove('active');
            if (searchInput) {
                searchInput.placeholder = "Search...";
            }
        } else {
            body.classList.remove('lang-en');
            body.classList.add('lang-tc');
            langTCBtn.classList.add('active');
            langENBtn.classList.remove('active');
            if (searchInput) {
                searchInput.placeholder = "搜尋...";
            }
        }
    }

    if (langTCBtn && langENBtn) {
        langTCBtn.addEventListener('click', () => setLanguage('tc'));
        langENBtn.addEventListener('click', () => setLanguage('en'));
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Sticky Header on Scroll ---
    const header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Scroll to top button ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Animate elements on scroll ---
    const animatedElements = document.querySelectorAll('.info-item, .news-main, .news-item, .journal-item, .scholar-item');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

});
