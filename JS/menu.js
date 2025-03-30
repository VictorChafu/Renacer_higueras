document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle")
    const navbarMenu = document.querySelector(".navbar ul")
  
    if (menuToggle && navbarMenu) {
      menuToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("active")
      })
  
      // cerrar el menu al hacer click en el link
      const navLinks = document.querySelectorAll(".navbar ul li a")
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navbarMenu.classList.remove("active")
        })
      })
    }
  })
  
  