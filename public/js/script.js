const sorts = document.querySelectorAll("[data-sort]");
const dataBtn = document.querySelector(".data-btn");
const dataBtns = dataBtn.querySelectorAll("li");
const simulation1 = document.querySelector("[data-type='simulation-1']");
const bars1 = simulation1.querySelector(".bars1");
const buttons1 = simulation1.querySelector(".buttons1");
const simulation2 = document.querySelector("[data-type='simulation-2']");
const bars2 = simulation2.querySelector(".bars2");
const buttons2 = simulation2.querySelector(".buttons2");
const simulation3 = document.querySelector("[data-type='simulation-3']");
const bars3 = simulation3.querySelector(".bars3");
const buttons3 = simulation3.querySelector(".buttons3");
const simulation4 = document.querySelector("[data-type='simulation-4']");
const bars4 = simulation4.querySelector(".bars4");
const buttons4 = simulation4.querySelector(".buttons4");
const simulation5 = document.querySelector("[data-type='simulation-5']");
const bars5 = simulation5.querySelector(".bars5");
const buttons5 = simulation5.querySelector(".buttons5");
const simulation6 = document.querySelector("[data-type='simulation-6']");
const bars6 = simulation6.querySelector(".bars6");
const buttons6 = simulation6.querySelector(".buttons6");
const simulation7 = document.querySelector("[data-type='simulation-7']");
const bars7 = simulation7.querySelector(".bars7");
const buttons7 = simulation7.querySelector(".buttons7");
const simulation8 = document.querySelector("[data-type='simulation-8']");
const bars8 = simulation8.querySelector(".bars8");
const buttons8 = simulation8.querySelector(".buttons8");
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

function initSelection(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsSelection();
}
function animateSelection(swaps) {
  if (swaps.length == 0) {
    showBarsSelection();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsSelection([i, j]);
  setTimeout(function () {
    animateSelection(swaps);
  }, 300);
}
function playSelection() {
  const copyArr = [...arr];
  const swaps = selectionSort(copyArr);
  animateSelection(swaps);
}
function showBarsSelection(indexs) {
  bars3.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars3.append(bar);
  }
}

// DOM manipulation
buttons3
  .querySelector(".btn-init-selection")
  .addEventListener("click", function () {
    initSelection(arr);
  });
buttons3
  .querySelector(".btn-play-selection")
  .addEventListener("click", function () {
    playSelection(arr);
  });

initSelection(arr);

function initCocktail(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsCocktail();
}
function animateCocktail(swaps) {
  if (swaps.length == 0) {
    showBarsCocktail();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsCocktail([i, j]);
  setTimeout(function () {
    animateCocktail(swaps);
  }, 300);
}
function playCocktail() {
  const copyArr = [...arr];
  const swaps = cocktailSort(copyArr);
  animateCocktail(swaps);
}
function showBarsCocktail(indexs) {
  bars4.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars4.append(bar);
  }
}

// DOM manipulation
buttons4
  .querySelector(".btn-init-cocktail")
  .addEventListener("click", function () {
    initCocktail(arr);
  });
buttons4
  .querySelector(".btn-play-cocktail")
  .addEventListener("click", function () {
    playCocktail(arr);
  });

initCocktail(arr);

function initQuick(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsQuick();
}
function animateQuick(swaps) {
  if (swaps.length == 0) {
    showBarsQuick();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsQuick([i, j]);
  setTimeout(function () {
    animateQuick(swaps);
  }, 300);
}
function playQuick() {
  const copyArr = [...arr];
  const swaps = quickSort(copyArr);
  animateQuick(swaps);
}
function showBarsQuick(indexs) {
  bars5.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars5.append(bar);
  }
}

// DOM manipulation
buttons5
  .querySelector(".btn-init-quick")
  .addEventListener("click", function () {
    initQuick(arr);
  });
buttons5
  .querySelector(".btn-play-quick")
  .addEventListener("click", function () {
    playQuick(arr);
  });

initQuick(arr);

function initHeap(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsHeap();
}
function animateHeap(swaps) {
  if (swaps.length == 0) {
    showBarsHeap();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsHeap([i, j]);
  setTimeout(function () {
    animateHeap(swaps);
  }, 300);
}
function playHeap() {
  const copyArr = [...arr];
  const swaps = heapSort(copyArr);
  animateHeap(swaps);
}
function showBarsHeap(indexs) {
  bars6.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars6.append(bar);
  }
}

// DOM manipulation
buttons6.querySelector(".btn-init-heap").addEventListener("click", function () {
  initHeap(arr);
});
buttons6.querySelector(".btn-play-heap").addEventListener("click", function () {
  playHeap(arr);
});

initHeap(arr);

function initTim(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsTim();
}
function animateTim(swaps) {
  if (swaps.length == 0) {
    showBarsTim();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsTim([i, j]);
  setTimeout(function () {
    animateTim(swaps);
  }, 300);
}
function playTim() {
  const copyArr = [...arr];
  const swaps = timSort(copyArr);
  animateTim(swaps);
}
function showBarsTim(indexs) {
  bars7.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars7.append(bar);
  }
}

// DOM manipulation
buttons7
  .querySelector(".btn-init-tim")
  .addEventListener("click", function () {
    initTim(arr);
  });
buttons7
  .querySelector(".btn-play-tim")
  .addEventListener("click", function () {
    playTim(arr);
  });

initTim(arr);

function initShell(arr) {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  showBarsShell();
}
function animateShell(swaps) {
  if (swaps.length == 0) {
    showBarsShell();
    return;
  }
  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBarsShell([i, j]);
  setTimeout(function () {
    animateShell(swaps);
  }, 300);
}
function playShell() {
  const copyArr = [...arr];
  const swaps = shellSort(copyArr);
  animateShell(swaps);
}
function showBarsShell(indexs) {
  bars8.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.style.width = 6 + "%";
    bar.style.backgroundColor = "black";
    if (indexs && indexs.includes(i)) {
      bar.style.backgroundColor = "#059669";
    }
    bars8.append(bar);
  }
}

// DOM manipulation
buttons8
  .querySelector(".btn-init-shell")
  .addEventListener("click", function () {
    initShell(arr);
  });
buttons8
  .querySelector(".btn-play-shell")
  .addEventListener("click", function () {
    playShell(arr);
  });

initShell(arr);

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
