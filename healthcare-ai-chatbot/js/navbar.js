document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("shadow-md");
        navbar.classList.replace("bg-white/95", "bg-white");
      } else {
        navbar.classList.remove("shadow-md");
        navbar.classList.replace("bg-white", "bg-white/95");
      }
    });
  }
});
