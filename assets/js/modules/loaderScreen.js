let customLoader = document.querySelector(".loader-screen");
window.addEventListener("load", function () {
  customLoader.style.display = "none";
});

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (e) => {
    // e.preventDefault();
    customLoader.style.display = "flex";
  });
});
