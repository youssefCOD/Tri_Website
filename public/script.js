document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      // Add a class when scrolling down
      header.classList.add("bg-white");
    } else {
      // Remove the class when scrolling back to the top
      header.classList.remove("bg-white");
    }
  });
});
