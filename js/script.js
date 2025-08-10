document.addEventListener('DOMContentLoaded', function() {

    // --- Language Switcher ---
    const body = document.body;
    const langTCBtn = document.getElementById('lang-tc-btn');
    const langENBtn = document.getElementById('lang-en-btn');
    const langSCBtn = document.getElementById('lang-sc-btn');
    const searchInput = document.getElementById('searchInput');

    function setLanguage(lang) {
        if (!body) return;

        if (lang === 'en') {
            body.classList.remove('lang-tc');
            body.classList.remove('lang-sc');
            body.classList.add('lang-en');
            langENBtn && langENBtn.classList.add('active');
            langTCBtn && langTCBtn.classList.remove('active');
            langSCBtn && langSCBtn.classList.remove('active');
            if (searchInput) searchInput.placeholder = "Search...";
        } else if (lang === 'sc') {
            body.classList.remove('lang-tc');
            body.classList.remove('lang-en');
            body.classList.add('lang-sc');
            langSCBtn && langSCBtn.classList.add('active');
            langTCBtn && langTCBtn.classList.remove('active');
            langENBtn && langENBtn.classList.remove('active');
            if (searchInput) searchInput.placeholder = "搜索...";
        } else { // default tc
            body.classList.remove('lang-en');
            body.classList.remove('lang-sc');
            body.classList.add('lang-tc');
            langTCBtn && langTCBtn.classList.add('active');
            langENBtn && langENBtn.classList.remove('active');
            langSCBtn && langSCBtn.classList.remove('active');
            if (searchInput) searchInput.placeholder = "搜尋...";
        }
    }

    if (langTCBtn) langTCBtn.addEventListener('click', () => setLanguage('tc'));
    if (langENBtn) langENBtn.addEventListener('click', () => setLanguage('en'));
    if (langSCBtn) langSCBtn.addEventListener('click', () => setLanguage('sc'));

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
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

        animatedElements.forEach(el => { observer.observe(el); });
    }

    // --- Hero slider ---
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 1) {
        let currentSlideIndex = 0;
        const switchIntervalMs = 6000;

        function goToSlide(index) {
            slides.forEach((s, i) => { i === index ? s.classList.add('active') : s.classList.remove('active'); });
            currentSlideIndex = index;
        }
        function goToNextSlide() { goToSlide((currentSlideIndex + 1) % slides.length); }
        goToSlide(0);
        setInterval(goToNextSlide, switchIntervalMs);
    }

});
