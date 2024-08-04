// Basic slideshow functionality
document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slideshow .slide");

  const showSlides = () => {
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "block" : "none";
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
  };

  showSlides();
});
