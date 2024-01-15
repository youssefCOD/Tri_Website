const simulation = document.querySelector("[data-type='simulation']");
const bars = simulation.querySelector(".bars");
const arraySize = 10;
let arr = [];
function init(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
}
function bubbleSort(arr) {
  let swapped = false;
  do {
    for (let i = 0; i < arraySize; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = true;
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  } while (swapped);
}
function play(arr) {
  init(arr);
  bubbleSort(arr);
  showBars(arr);
}
function showBars(arr) {
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    bars.append(bar);
  }
}
init(arr);
bubbleSort(arr);

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
