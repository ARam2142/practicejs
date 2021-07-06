const allImages = document.querySelectorAll(".image-holder");
const imageContainer = document.querySelector(".wrapper");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
const startScreen = document.querySelector(".initial-screen");
console.log(allImages);

let index = 0;
let totalPictures = allImages.length;
console.log(totalPictures);

//hide everything first and only display the start button first
function slidesHiddenUponPageLoad() {
  next.style.display = "none";
  back.style.display = "none";
  allImages.forEach((img) => {
    img.style.display = "none";
  });
}
slidesHiddenUponPageLoad();

//hide start button and display next button and images
startScreen.addEventListener("click", () => {
  startScreen.style.display = "none";
  next.style.display = "block";
  back.style.display = "block";
});

//update position of image
function updatePicPosition() {
  for (let image of allImages) {
    image.style.display = "none";
    allImages[index].style.display = "block";
  }
}
//display current image after clicking next button
function nextImage() {
  if (index === totalPictures - 1) {
    index = 0;
  } else {
    index++;
  }
  updatePicPosition();
}

//display current image after clicking back button
function prevImage() {
  if (index === 0) {
    index = 0;
  } else {
    index--;
  }
  updatePicPosition();
}

//next button
next.addEventListener("click", () => {
  nextImage();
});

//back button
back.addEventListener("click", () => {
  prevImage();
});
