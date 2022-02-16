// Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currnetSlide = 2;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous And Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle Click On Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element
let paginationElement = document.createElement("ul");

// Set Id On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {
  // Create The Li
  let paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main Ul List
  paginationElement.appendChild(paginationItem);
}

// Add The Created Ul Element To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created Ul

let paginationCreatedUl = document.getElementById("pagination-ul");
theCheacker();
// Next Slide Function
function nextSlide() {
  console.log("Next");
}
// Next Previous Function
function prevSlide() {
  console.log("Prev");
}

// Create The Cheacker Function
function theCheacker() {
  // Set The Slide Number
  slideNumberElement.textContent = `Slide #${currnetSlide} of ${slidesCount}`;

  // Set Active Class On Current Slide
  sliderImages[currnetSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currnetSlide - 1].classList.add("active");
}
