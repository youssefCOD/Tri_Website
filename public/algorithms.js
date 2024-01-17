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
