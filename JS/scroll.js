document.addEventListener('DOMContentLoaded', function() {
    // Elements to add scroll effect to
    const sections = [
      '.vision', 
      '.NuestraVision', 
      '.versiculo', 
      '.pastores',
      '.pastor', 
      '.ministerios',
      '.servicios',
      '.contacto'
    ];
    
    // efectos de Scroll para cada sesion usando un for each 
    sections.forEach(section => {
      const elements = document.querySelectorAll(section);
      elements.forEach(element => {
        element.classList.add('scroll-effect');
      });
    });
    
    // funcion para verificar si el elemento está en la ventana de visualización
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
      );
    }
    
    // funcion para manejar el evento de desplazamiento
    function handleScroll() {
      const scrollEffects = document.querySelectorAll('.scroll-effect');
      scrollEffects.forEach(effect => {
        if (isInViewport(effect)) {
          effect.classList.add('visible');
        }
      });
    }
    

    handleScroll();
    
    // Agregar el evento de desplazamiento a la ventana
    window.addEventListener('scroll', handleScroll);
  });