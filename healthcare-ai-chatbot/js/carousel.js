document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  let currentSlide = 0;
  const intervalTime = 5000; // 5 seconds
  let slideInterval;

  // Function to change slide
  window.goToSlide = (index) => {
    // Reset interval to prevent jumping
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);

    // Update Slides
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("opacity-0", "pointer-events-none");
        slide.classList.add("opacity-100");
      } else {
        slide.classList.remove("opacity-100");
        slide.classList.add("opacity-0", "pointer-events-none");
      }
    });

    // Update Dots
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-white/40");
        dot.classList.add("bg-white", "scale-125");
      } else {
        dot.classList.add("bg-white/40");
        dot.classList.remove("bg-white", "scale-125");
      }
    });

    currentSlide = index;
  };

  const nextSlide = () => {
    let index = currentSlide + 1;
    if (index >= slides.length) {
      index = 0;
    }
    goToSlide(index);
  };

  // Initialize
  goToSlide(0);
});
