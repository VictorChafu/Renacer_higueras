document.addEventListener('DOMContentLoaded', function() {
    // Elementos del carrusel
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevBtn = document.querySelector('.carrusel-prev');
    const nextBtn = document.querySelector('.carrusel-next');
    const indicators = document.querySelectorAll('.carrusel-indicador');
    
    let slideIndex = 0;
    let slideInterval;

    // Función para mostrar un slide específico
    function mostrarSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        slideIndex = index;
        
        // Manejo del índice circular
        if (slideIndex < 0) slideIndex = slides.length - 1;
        if (slideIndex >= slides.length) slideIndex = 0;
        
        slides[slideIndex].classList.add('active');
        indicators[slideIndex].classList.add('active');
    }

    // Eventos para botones prev/next
    prevBtn.addEventListener('click', () => {
        mostrarSlide(slideIndex - 1);
        reiniciarIntervalo();
    });
    
    nextBtn.addEventListener('click', () => {
        mostrarSlide(slideIndex + 1);
        reiniciarIntervalo();
    });
    
    // Eventos para indicadores
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            mostrarSlide(index);
            reiniciarIntervalo();
        });
    });
    
    // Función para iniciar el carrusel automático
    function iniciarIntervalo() {
        slideInterval = setInterval(() => {
            mostrarSlide(slideIndex + 1);
        }, 5000); // Cambiar cada 5 segundos
    }
    
    // Función para reiniciar el intervalo
    function reiniciarIntervalo() {
        clearInterval(slideInterval);
        iniciarIntervalo();
    }
    
    // Iniciar carrusel
    iniciarIntervalo();
});
