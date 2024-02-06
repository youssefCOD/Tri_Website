const sorts = document.querySelectorAll("[data-sort]");
const dataBtn = document.querySelector(".data-btn");
const dataBtns = dataBtn.querySelectorAll("li");
const simulation1 = document.querySelector("[data-type='simulation-1']");
const bars1 = simulation1.querySelector(".bars1");
const buttons1 = simulation1.querySelector(".buttons1");
const simulation2 = document.querySelector("[data-type='simulation-2']");
const bars2 = simulation2.querySelector(".bars2");
const buttons2 = simulation2.querySelector(".buttons2");
const arraySize = 10;
let arr = [];

dataBtn.addEventListener("click", function (e) {
  const clicked = e.target.closest("li");
  if (!clicked) return;
  dataBtns.forEach(function (el) {
    el.classList.remove("bg-white");
    el.classList.remove("text-emerald-600");
  });
  clicked.classList.add("bg-white");
  clicked.classList.add("text-emerald-600");

  const dataTypes = clicked
    .closest(".sort-container")
    .querySelectorAll(`[data-type]`);
  const dataNumbers = clicked
    .closest(".sort-container")
    .querySelectorAll(`[data-number]`);
  let dataNumber;
  for (let i = 0; i < dataNumbers.length; i++) {
    if (!dataNumbers[i].classList.contains("hidden"))
      dataNumber = dataNumbers[i];
  }
  console.log(dataTypes);

  dataTypes.forEach((el) => el.classList.add("hidden"));

  const dataType = clicked
    .closest(".sort-container")
    .querySelector(
      `[data-type=${clicked.dataset.typeClicked}-${dataNumber.dataset.number}]`
    );

  console.log(
    "the value that is being cliked is : " + clicked.dataset.typeClicked
  );

  dataType.classList.remove("hidden");

  console.log(dataType);
});

// Functions
function initBubble(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsBubble();
}
function animateBubble(swaps) {
  if (swaps.length == 0) {
    showBarsBubble();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsBubble([i, j]);
  setTimeout(function () {
    animateBubble(swaps);
  }, 300);
}
function playBubble() {
  const copyArr = [...arr];
  const swaps = bubbleSort(copyArr);
  animateBubble(swaps);
}
console.log(bars1);
function showBarsBubble(indexs) {
  bars1.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars1.append(bar);
  }
}

// DOM manipulation
buttons1
  .querySelector(".btn-init-bubble")
  .addEventListener("click", function () {
    initBubble(arr);
  });
buttons1
  .querySelector(".btn-play-bubble")
  .addEventListener("click", function () {
    playBubble(arr);
  });
initBubble(arr);

function initInsertion(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsInsertion();
}
function animateInsertion(swaps) {
  if (swaps.length == 0) {
    showBarsInsertion();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsInsertion([i, j]);
  setTimeout(function () {
    animateInsertion(swaps);
  }, 300);
}
function playInsertion() {
  const copyArr = [...arr];
  const swaps = insertionSort(copyArr);
  animateInsertion(swaps);
}
console.log(bars1);
function showBarsInsertion(indexs) {
  bars2.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars2.append(bar);
  }
}

// DOM manipulation
buttons2
  .querySelector(".btn-init-insertion")
  .addEventListener("click", function () {
    initInsertion(arr);
  });
buttons2
  .querySelector(".btn-play-insertion")
  .addEventListener("click", function () {
    playInsertion(arr);
  });
initInsertion(arr);

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
