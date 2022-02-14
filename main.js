// Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currnetSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous And Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle Click On Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Next Slide Function
function nextSlide() {
  console.log("Next");
}
// Next Previous Function
function prevSlide() {
  console.log("Prev");
}
