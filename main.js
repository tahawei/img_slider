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

// Get Pagination Items | Array.from [ES6 Feature]
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Pagination Bullets
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currnetSlide = parseInt(this.getAttribute("data-index"));
    theCheacker();
  };
}

// Next Slide Function
theCheacker();
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currnetSlide++;
    theCheacker();
  }
}
// Next Previous Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currnetSlide--;
    theCheacker();
  }
}

// Create The Cheacker Function
function theCheacker() {
  removeAllActive();

  // Set The Slide Number
  slideNumberElement.textContent = `Slide #${currnetSlide} of ${slidesCount}`;

  // Set Active Class On Current Slide
  sliderImages[currnetSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currnetSlide - 1].classList.add("active");

  // Check If Current Class Is The Frist
  if (currnetSlide == 1) {
    // Add Disabled Class To Privious Button
    prevButton.classList.add("disabled");
  } else {
    // remove Disabled Class To Privious Button
    prevButton.classList.remove("disabled");
  }

  // Check If Current Class Is The last
  if (currnetSlide == slidesCount) {
    // Add Disabled Class To next Button
    nextButton.classList.add("disabled");
  } else {
    // remove Disabled Class To next Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images And Pagination bullets
function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
