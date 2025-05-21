document.addEventListener('DOMContentLoaded', function () {
    // === Carrusel #1 ===
    const slides1 = document.querySelectorAll('.slide');
    const prevBtn1 = document.querySelector('.prev-btn');
    const nextBtn1 = document.querySelector('.next-btn');
    const indicators1 = document.querySelectorAll('.indicator');
    let currentIndex1 = 0;
    let intervalId1;

    function showSlide1(index) {
        currentIndex1 = (index + slides1.length) % slides1.length;
        slides1.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex1);
            indicators1[i].classList.toggle('active', i === currentIndex1);
        });
    }

    function startInterval1() {
        intervalId1 = setInterval(() => showSlide1(currentIndex1 + 1), 5000);
    }

    function resetInterval1() {
        clearInterval(intervalId1);
        startInterval1();
    }

    if (slides1.length && prevBtn1 && nextBtn1) {
        prevBtn1.addEventListener('click', () => {
            showSlide1(currentIndex1 - 1);
            resetInterval1();
        });
        nextBtn1.addEventListener('click', () => {
            showSlide1(currentIndex1 + 1);
            resetInterval1();
        });
        indicators1.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                showSlide1(i);
                resetInterval1();
            });
        });
        startInterval1();
    }

    // === Carrusel #2 ===
    const slides2 = document.querySelectorAll('.carrusel-slide');
    const prevBtn2 = document.querySelector('.carrusel-prev');
    const nextBtn2 = document.querySelector('.carrusel-next');
    const indicators2 = document.querySelectorAll('.carrusel-indicador');
    let currentIndex2 = 0;
    let intervalId2;

    function showSlide2(index) {
        currentIndex2 = (index + slides2.length) % slides2.length;
        slides2.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex2);
            indicators2[i].classList.toggle('active', i === currentIndex2);
        });
    }

    function startInterval2() {
        intervalId2 = setInterval(() => showSlide2(currentIndex2 + 1), 5000);
    }

    function resetInterval2() {
        clearInterval(intervalId2);
        startInterval2();
    }

    if (slides2.length && prevBtn2 && nextBtn2) {
        prevBtn2.addEventListener('click', () => {
            showSlide2(currentIndex2 - 1);
            resetInterval2();
        });
        nextBtn2.addEventListener('click', () => {
            showSlide2(currentIndex2 + 1);
            resetInterval2();
        });
        indicators2.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                showSlide2(i);
                resetInterval2();
            });
        });
        startInterval2();
    }

    // === Scroll Reveal con IntersectionObserver ===
    const sections = [
        '.header',
        '.vision',
        '.NuestraVision',
        '.versiculo',
        '.pastores',
        '.pastor',
        '.ministerios',
        '.servicios',
        '.contacto'
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Mejor rendimiento
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('scroll-effect');
            observer.observe(el);
        });
    });

    // === Navbar efecto al hacer scroll ===
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // === Toggle menú responsive ===
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar ul');

    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        document.querySelectorAll('.navbar ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
            });
        });
    }
});
