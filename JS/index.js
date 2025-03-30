document.addEventListener('DOMContentLoaded', function() {
    // Elementos del carrusel
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    let intervalId;

    // Función para mostrar un slide específico
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        currentIndex = index;
        
        // Manejo del índice circular
        if (currentIndex < 0) currentIndex = slides.length - 1;
        if (currentIndex >= slides.length) currentIndex = 0;
        
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    // Eventos para botones prev/next
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        resetInterval();
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        resetInterval();
    });
    
    // Eventos para indicadores
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            showSlide(index);
            resetInterval();
        });
    });
    
    // Función para iniciar el carrusel automático
    function startInterval() {
        intervalId = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); // Cambiar cada 5 segundos
    }
    
    // Función para reiniciar el intervalo
    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }
    
    // Iniciar carrusel
    startInterval();
});