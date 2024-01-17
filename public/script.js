const simulation = document.querySelector("[data-type='simulation']");
const bars = simulation.querySelector(".bars");
const buttons = simulation.querySelector(".buttons");
const arraySize = 10;
let arr = [];

// Functions
function init(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBars();
}
function animate(swaps) {
  if (swaps.length == 0) {
    showBars();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBars([i, j]);
  setTimeout(function () {
    animate(swaps);
  }, 300);
}
function play() {
  const copyArr = [...arr];
  const swaps = bubbleSort(copyArr);
  animate(swaps);
}
function showBars(indexs) {
  bars.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars.append(bar);
  }
}

// DOM manipulation
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
