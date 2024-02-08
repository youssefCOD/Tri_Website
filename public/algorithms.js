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

function cocktailSort(arr) {
  const swaps = [];
  let swapped = true;
  let start = 0;
  let end = arr.length;

  while (swapped) {
    swapped = false;

    // Sort from the beginning to the end
    for (let i = start; i < end - 1; ++i) {
      if (arr[i] > arr[i + 1]) {
        swaps.push([i, i + 1]);
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    swapped = false;
    --end;

    // Sort from the end to the beginning
    for (let i = end - 1; i >= start; --i) {
      if (arr[i] > arr[i + 1]) {
        swaps.push([i, i + 1]);
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    ++start;
  }

  return swaps;
}

function quickSort(arr) {
  const swaps = []; // Initialize an array to track swaps

  // Helper function to partition the array
  function partition(array, low, high) {
    const pivot = array[high]; // Choose the last element as the pivot
    let i = low - 1; // Initialize the partition index

    for (let j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        swaps.push([i, j]); // Track the swap
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Place pivot in correct position
    swaps.push([i + 1, high]); // Track the final pivot position
    return i + 1;
  }

  // Recursive quick sort function
  function recursiveQuickSort(array, low, high) {
    if (low < high) {
      const pi = partition(array, low, high);
      recursiveQuickSort(array, low, pi - 1); // Sort left sub-array
      recursiveQuickSort(array, pi + 1, high); // Sort right sub-array
    }
  }

  const size = arr.length;
  recursiveQuickSort(arr, 0, size - 1);
  return swaps; // Return the array of swaps
}
function heapSort(arr) {
  const swaps = []; // Initialize an array to track swaps

  // Helper function to maintain the heap property
  function heapify(array, length, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < length && array[left] > array[largest]) {
      largest = left;
    }
    if (right < length && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]]; // Swap elements
      swaps.push([i, largest]); // Track the swap
      heapify(array, length, largest); // Recursively heapify the affected subtree
    }
  }

  // Build a max-heap from the input array
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move the root (max element) to the end
    swaps.push([0, i]); // Track the swap
    heapify(arr, i, 0); // Heapify the reduced heap
  }

  return swaps; // Return the array of swaps
}

function timSort(arr) {
  const RUN = 32;
  const n = arr.length;
  const swaps = [];

  // Insertion sort for small arrays
  for (let i = 0; i < n; i += RUN) {
    for (let j = i + 1; j < Math.min(i + RUN, n); j++) {
      let key = arr[j];
      let k = j - 1;

      while (k >= i && arr[k] > key) {
        swaps.push([k, k + 1]);
        arr[k + 1] = arr[k];
        k--;
      }
      arr[k + 1] = key;
    }
  }

  // Merge sort for larger arrays
  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min(left + 2 * size - 1, n - 1);

      let i = left;
      let j = mid + 1;
      let temp = [];

      while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
          temp.push(arr[i]);
          i++;
        } else {
          swaps.push([i, j]);
          temp.push(arr[j]);
          j++;
        }
      }

      while (i <= mid) {
        temp.push(arr[i]);
        i++;
      }

      while (j <= right) {
        temp.push(arr[j]);
        j++;
      }

      for (let i = left; i <= right; i++) {
        arr[i] = temp[i - left];
      }
    }
  }

  return swaps;
}

function shellSort(arr) {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  let swaps = [];

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
        swaps.push([j, j - gap]); // Consider moving an element into its sorted position as a "swap"
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return swaps;
}
