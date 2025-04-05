document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('numeror');
    
    const iti = window.intlTelInput(phoneInput, {
        // Opciones para la librería
        initialCountry: "CL", // Puedes configurarlo al país inicial como Chile
        separateDialCode: true, // Muestra el código de país separado
        preferredCountries: ["CL", "US", "MX", "AR"], // Países preferidos
    });
});