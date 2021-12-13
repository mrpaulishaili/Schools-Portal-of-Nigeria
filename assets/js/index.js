import { AddClass, AddCloseClass } from "./functions/closeFunction.js";

import { onMobile, enableOnMobile } from "./modules/onMobile.js";

import "./modules/loaderScreen.js";
const closeModal = document.querySelector(".modal-close");
const Modal = document.querySelector(".modal");

document.addEventListener("loadeddata", () => {
  Modal.classList.remove("close");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  AddCloseClass(Modal);
});

// console.log(getResolution().toString());

enableOnMobile();
window.addEventListener("resize", () => {
  enableOnMobile();
});

const text1_options = [
  "Joint Admission Matriculation Board ",
  "West African Examination Council",
  "National Examination Council",
  "Joint Universities Programme Examination Board",
];
const text2_options = ["JAMB", "WAEC", "NECO", "JUPEB"];
const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
const image_options = [
  "/images/JAMBLogo.png",
  "/images/Waec_logo.png",
  "/images/NecoLogo.jpg",
  "/images/JUPEBLogo.jpg",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};
