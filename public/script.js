const simulation = document.querySelector("[data-type='simulation']");
const bars = simulation.querySelector(".bars");
const buttons = simulation.querySelector(".buttons");
const arraySize = 10;
let arr = [];
function init(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBars();
}
function bubbleSort(arr) {
  do {
    var swapped = false;
    for (let i = 1; i < arraySize; i++) {
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
  showBars();
}
function showBars() {
  bars.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    bars.append(bar);
  }
}
buttons.querySelector(".btn-init").addEventListener("click", function () {
  init(arr);
});
buttons.querySelector(".btn-play").addEventListener("click", function () {
  play(arr);
});
init(arr);

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
