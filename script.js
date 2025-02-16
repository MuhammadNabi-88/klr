function myFunction() {
    alert("I am an alert box!");
  }

document.addEventListener("DOMContentLoaded", () => {
    // Language Change Button
    const langBtn = document.querySelector(".lang-btn");
    langBtn.addEventListener("click", () => {
        alert("Language changed!");
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    // const navLinks = document.querySelector(".nav-links");
    const navLinksA = document.getElementsByClassName(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinksA.classList.toggle("show");
    });
});

