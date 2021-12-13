export function AddClass(element, className) {
  element.classList.add(className);
}

export function AddCloseClass(element) {
  AddClass(element, "close");
}

export function AddActiveClass(element) {
  AddClass(element, "active");
}

export function ToggleClass(element, className) {
  element.classList.toggle(className);
}

export function ToggleActiveClass(element) {
  ToggleClass(element, "active");
}

const menu = document.querySelector(".menu");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggler");
mobileMenuToggle.addEventListener("click", () => {
  ToggleActiveClass(menu);
});
