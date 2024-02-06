function bubbleSort(arr) {
  const swaps = [];
  do {
    var swapped = false;
    for (let i = 1; i < arraySize; i++) {
      if (arr[i - 1] > arr[i]) {
        swaps.push([i - 1, i]);
        swapped = true;
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  } while (swapped);
  return swaps;
}
function insertionSort(arr) {
  const swaps = [];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swaps.push([j - 1, j]);
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return swaps;
}
function selectionSort(arr) {
  const swaps = [];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swaps.push([i, minIndex]);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return swaps;
}
