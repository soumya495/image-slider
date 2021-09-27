let images = document.querySelectorAll("img");

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let slide = document.querySelector(".slide");

let counter = 1;
let imageWidth = slide.clientWidth;

slide.style.transform = `translateX(-${imageWidth * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  slide.style.transition = `transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1)`;
  counter++;
  slide.style.transform = `translateX(-${imageWidth * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slide.style.transition = `transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1)`;
  counter--;
  slide.style.transform = `translateX(-${imageWidth * counter}px)`;
});

slide.addEventListener("transitionend", () => {
  if (images[counter].id === "lastImage") {
    slide.style.transition = "none";
    counter = images.length - 2;
    slide.style.transform = `translateX(-${imageWidth * counter}px)`;
  }
  if (images[counter].id === "firstImage") {
    slide.style.transition = "none";
    counter = images.length - counter;
    slide.style.transform = `translateX(-${imageWidth * counter}px)`;
  }
});
