import { getResolution } from "./getSreenResolution.js";

const menu = document.querySelector(".menu");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggler");

export const onMobile = [menu, mobileMenuToggle];

export function enableOnMobile() {
  if (getResolution().toString() < 720) {
    onMobile.forEach((mobileEvent) => {
      mobileEvent.classList.add("mobile");
    });
  } else {
    onMobile.forEach((mobileEvent) => {
      mobileEvent.classList.remove("mobile");
    });
  }
}
